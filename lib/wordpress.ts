/* ─────────────────────────────────────────────────────────────
   WordPress REST API client
   Base URL is read from WORDPRESS_API_URL env var (server-only).
   ───────────────────────────────────────────────────────────── */

const BASE =
  process.env.WORDPRESS_API_URL ??
  "https://wp.vertex-llc.jp/wp-json/wp/v2";

/* ── Types ────────────────────────────────────────────────── */

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

/* ── Fetch helpers ────────────────────────────────────────── */

async function apiFetch<T>(
  path: string,
  params: Record<string, string | number | boolean> = {},
  revalidate = 60
): Promise<{ data: T; headers: Headers } | null> {
  const url = new URL(`${BASE}${path}`);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v));
  }

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error(`[WP] ${res.status} ${res.statusText} — ${url}`);
      return null;
    }

    const data: T = await res.json();
    return { data, headers: res.headers };
  } catch (err) {
    console.error(`[WP] fetch failed — ${url}`, err);
    return null;
  }
}

/* ── Posts ────────────────────────────────────────────────── */

export async function fetchPosts(opts: {
  page?: number;
  perPage?: number;
  categoryId?: number;
  search?: string;
} = {}): Promise<PostsResult> {
  const { page = 1, perPage = 9, categoryId, search } = opts;

  const params: Record<string, string | number | boolean> = {
    page,
    per_page: perPage,
    _embed: 1,
    orderby: "date",
    order: "desc",
  };
  if (categoryId) params.categories = categoryId;
  if (search) params.search = search;

  const result = await apiFetch<WPPost[]>("/posts", params);
  if (!result) return { posts: [], total: 0, totalPages: 0 };

  const total = parseInt(result.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = parseInt(result.headers.get("X-WP-TotalPages") ?? "0", 10);

  return { posts: result.data, total, totalPages };
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const result = await apiFetch<WPPost[]>("/posts", {
    slug,
    _embed: 1,
  });
  return result?.data[0] ?? null;
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  const result = await apiFetch<Array<{ slug: string }>>(
    "/posts",
    { per_page: 100, _fields: "slug" },
    3600
  );
  return result?.data.map((p) => p.slug) ?? [];
}

/* ── Categories ───────────────────────────────────────────── */

export async function fetchCategories(): Promise<WPCategory[]> {
  const result = await apiFetch<WPCategory[]>(
    "/categories",
    { per_page: 20, hide_empty: true, orderby: "count", order: "desc" },
    3600
  );
  return result?.data ?? [];
}

/* ── Helpers ──────────────────────────────────────────────── */

/** Returns the best available featured image URL for a post */
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

/** Returns the alt text for a post's featured image */
export function getPostImageAlt(post: WPPost): string {
  return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    decodeEntities(post.title.rendered)
  );
}

/** Returns category names for a post (first term array = categories) */
export function getPostCategoryNames(post: WPPost): string[] {
  return post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
}

/** Formats a WP date string to Japanese locale */
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

/** Strips HTML tags and decodes basic entities */
export function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

/** Decodes common HTML entities */
function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&nbsp;/g, " ");
}
