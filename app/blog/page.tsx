import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import BlogPagination from "@/components/blog/BlogPagination";
import { fetchPosts, fetchCategories } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "ブログ",
  description: "合同会社VERTEXのブログ。軽貨物配送に関する情報・ニュースをお届けします。",
};

/* Revalidate every 60 seconds (ISR) */
export const revalidate = 60;

const PER_PAGE = 9;

interface SearchParams {
  page?: string;
  category?: string;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { page: pageParam, category } = await searchParams;

  const currentPage   = Math.max(1, parseInt(pageParam ?? "1", 10));
  const categoryId    = category ? parseInt(category, 10) : undefined;

  /* Parallel fetch posts + categories */
  const [{ posts, total, totalPages }, categories] = await Promise.all([
    fetchPosts({ page: currentPage, perPage: PER_PAGE, categoryId }),
    fetchCategories(),
  ]);

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
            <p className="text-white/20 text-[10px] font-[family-name:var(--font-inter)] tracking-[0.2em] shrink-0">
              {total} POSTS
            </p>
          </div>

          {/* Posts grid */}
          <BlogList posts={posts} />

          {/* Pagination */}
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            categoryId={categoryId}
          />

          {/* API status note (only in dev / when empty) */}
          {posts.length === 0 && (
            <div className="mt-8 border border-white/[0.05] bg-white/[0.01] p-6 max-w-lg">
              <p className="text-white/22 text-xs font-[family-name:var(--font-noto)] leading-[1.9]">
                WordPress APIへの接続を確認中です。
                <code className="text-blue-400/60 text-[10px] ml-1 font-mono">
                  WORDPRESS_API_URL
                </code>
                の設定と、WordPressサイトが公開されているか確認してください。
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
