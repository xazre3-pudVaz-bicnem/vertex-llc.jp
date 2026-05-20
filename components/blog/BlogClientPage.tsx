"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import BlogPagination from "@/components/blog/BlogPagination";
import { type WPPost, type WPCategory } from "@/lib/wordpress";

const WP_BASE = "https://wp.vertex-llc.jp/wp-json/wp/v2";

export default function BlogClientPage() {
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const categoryId = searchParams.get("category")
    ? parseInt(searchParams.get("category")!, 10)
    : undefined;

  const [posts, setPosts] = useState<WPPost[]>([]);
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(false);

    let postsUrl = `${WP_BASE}/posts?_embed&per_page=12&page=${currentPage}&orderby=date&order=desc`;
    if (categoryId) postsUrl += `&categories=${categoryId}`;

    const catsUrl = `${WP_BASE}/categories?per_page=20&hide_empty=false&orderby=count&order=desc`;

    try {
      const [postsRes, catsRes] = await Promise.all([
        fetch(postsUrl),
        fetch(catsUrl),
      ]);

      if (!postsRes.ok) throw new Error(`HTTP ${postsRes.status}`);

      const postsData: WPPost[] = await postsRes.json();
      const t = parseInt(postsRes.headers.get("X-WP-Total") ?? String(postsData.length), 10);
      const tp = parseInt(postsRes.headers.get("X-WP-TotalPages") ?? "1", 10);

      const catsData: WPCategory[] = catsRes.ok ? await catsRes.json() : [];

      setPosts(postsData);
      setTotal(t);
      setTotalPages(tp);
      setCategories(catsData);
    } catch (err) {
      console.error("[WP] client fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [currentPage, categoryId]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <main>
      <PageHero
        label="News & Info"
        heading="BLOG"
        subheading="ブログ・お知らせ"
        breadcrumb={[{ label: "BLOG", href: "/blog" }]}
      />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#020204]" />
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          {/* Category filter + post count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <BlogCategoryFilter
              categories={categories}
              activeCategoryId={categoryId}
            />
            {!loading && !error && (
              <p className="text-white/20 text-[10px] font-[family-name:var(--font-inter)] tracking-[0.2em] shrink-0">
                {total} POSTS
              </p>
            )}
          </div>

          {/* Loading skeleton */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/[0.06] bg-white/[0.02] aspect-[4/3] animate-pulse"
                />
              ))}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="text-center py-32">
              <p className="text-white/30 text-sm font-[family-name:var(--font-noto)]">
                記事を取得できませんでした。
              </p>
              <button
                onClick={loadPosts}
                className="mt-6 text-[10px] tracking-[0.22em] font-[family-name:var(--font-inter)] text-blue-400/70 hover:text-blue-300 transition-colors"
              >
                再試行
              </button>
            </div>
          )}

          {/* Posts grid */}
          {!loading && !error && <BlogList posts={posts} />}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              categoryId={categoryId}
            />
          )}
        </div>
      </section>
    </main>
  );
}