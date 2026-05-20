/* -----------------------------------------------------------------
   WordPress REST API client  -  URL is hardcoded, no env vars.
   ----------------------------------------------------------------- */

const WP_BASE = "https://wp.vertex-llc.jp/wp-json/wp/v2";

/* -- Types ------------------------------------------------------- */

export interface WPMedia {
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      medium?: { source_url: string; width: number; height: number };
      medium_large?: { source_url: string; width: number; height: number };
      large?: { source_url: string; width: number; height: number };
      full?: { source_url: string; width: number; height: number };
    };
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  categories: number[];
  tags: number[];
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface PostsResult {
  posts: WPPost[];
  total: number;
  totalPages: number;
}

/* -- Posts ------------------------------------------------------- */

export async function fetchPosts(opts: {
  page?: number;
  perPage?: number;
  categoryId?: number;
} = {}): Promise<PostsResult> {
  const { page = 1, perPage = 12, categoryId } = opts;

  // Build URL exactly as: .../posts?_embed&per_page=12[&page=N][&categories=N]
  let qs = `_embed&per_page=${perPage}&page=${page}&orderby=date&order=desc`;
  if (categoryId) qs += `&categories=${categoryId}`;

  const url = `${WP_BASE}/posts?${qs}`;
  console.log("[WP] fetchPosts ->", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; NextJS)" },
    });

    console.log("[WP] fetchPosts status:", res.status);

    if (!res.ok) {
      console.error("[WP] fetchPosts failed:", res.status, res.statusText);
      return { posts: [], total: 0, totalPages: 0 };
    }

    const posts: WPPost[] = await res.json();
    const total = parseInt(res.headers.get("X-WP-Total") ?? String(posts.length), 10);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10);

    console.log(`[WP] fetchPosts <- ${posts.length} posts (total=${total}, pages=${totalPages})`);
    return { posts, total, totalPages };
  } catch (err) {
    console.error("[WP] fetchPosts error:", err);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const url = `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`;
  console.log("[WP] fetchPostBySlug ->", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; NextJS)" },
    });
    if (!res.ok) {
      console.error("[WP] fetchPostBySlug failed:", res.status);
      return null;
    }
    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch (err) {
    console.error("[WP] fetchPostBySlug error:", err);
    return null;
  }
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  const url = `${WP_BASE}/posts?per_page=100&_fields=slug`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; NextJS)" },
    });
    if (!res.ok) return [];
    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
}

/* -- Categories ------------------------------------------------- */

export async function fetchCategories(): Promise<WPCategory[]> {
  const url = `${WP_BASE}/categories?per_page=20&hide_empty=false&orderby=count&order=desc`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; NextJS)" },
    });
    if (!res.ok) return [];
    const data: WPCategory[] = await res.json();
    return data;
  } catch {
    return [];
  }
}

/* -- Helpers ---------------------------------------------------- */

export function getPostImage(post: WPPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const sizes = media.media_details?.sizes;
  return (
    sizes?.large?.source_url ??
    sizes?.medium_large?.source_url ??
    sizes?.medium?.source_url ??
    media.source_url
  );
}

export function getPostImageAlt(post: WPPost): string {
  return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    decodeEntities(post.title.rendered)
  );
}

export function getPostCategoryNames(post: WPPost): string[] {
  return post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
}

export function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "--")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, " ");
}