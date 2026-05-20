/* -----------------------------------------------------------------
   WordPress REST API client
   Use || (not ??) so an empty-string env var also falls back.
   ----------------------------------------------------------------- */

const BASE = (
  process.env.WORDPRESS_API_URL || "https://wp.vertex-llc.jp/wp-json/wp/v2"
).replace(/\/$/, "");

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

  const url = new URL(`${BASE}/posts`);
  url.searchParams.set("_embed", "");
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("page", String(page));
  url.searchParams.set("orderby", "date");
  url.searchParams.set("order", "desc");
  if (categoryId) url.searchParams.set("categories", String(categoryId));

  console.log("[WP] fetchPosts ->", url.toString());

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`[WP] fetchPosts ${res.status} ${res.statusText} -- ${url}`);
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
  const url = new URL(`${BASE}/posts`);
  url.searchParams.set("slug", slug);
  url.searchParams.set("_embed", "");

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) {
      console.error(`[WP] fetchPostBySlug ${res.status} -- ${url}`);
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
  const url = new URL(`${BASE}/posts`);
  url.searchParams.set("per_page", "100");
  url.searchParams.set("_fields", "slug");

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
}

/* -- Categories ------------------------------------------------- */

export async function fetchCategories(): Promise<WPCategory[]> {
  const url = new URL(`${BASE}/categories`);
  url.searchParams.set("per_page", "20");
  url.searchParams.set("hide_empty", "false");
  url.searchParams.set("orderby", "count");
  url.searchParams.set("order", "desc");

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
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
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&nbsp;/g, " ");
}
