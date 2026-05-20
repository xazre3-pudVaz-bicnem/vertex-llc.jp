import type { Metadata } from "next";
import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `ブログ記事 — ${slug}`,
    description: "合同会社VERTEXのブログ記事",
  };
}

/* Placeholder — replace with WordPress REST API fetch */
async function getPost(slug: string) {
  return {
    slug,
    title: "ブログ記事タイトル（あとで入力）",
    date: "2024-01-01",
    category: "お知らせ",
    content: `
      <p>この記事の本文はWordPress REST API経由で取得されます。</p>
      <p>コンテンツの管理・追加はWordPressで行ってください。</p>
    `,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10">
            {[
              { label: "TOP",  href: "/" },
              { label: "BLOG", href: "/blog" },
              { label: post.title.substring(0, 24) + "…", href: "#" },
            ].map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/15 text-[10px]">/</span>}
                <Link
                  href={crumb.href}
                  className="text-[10px] text-white/22 hover:text-white/50 transition-colors font-[family-name:var(--font-inter)] tracking-[0.2em]"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[9px] tracking-[0.2em] border border-blue-500/25 text-blue-400/70 px-2.5 py-1 font-[family-name:var(--font-inter)]">
              {post.category}
            </span>
            <time className="text-white/25 text-[10px] font-[family-name:var(--font-inter)]">
              {post.date}
            </time>
          </div>
          <h1 className="font-[family-name:var(--font-noto)] font-black text-2xl md:text-4xl text-white leading-snug">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#020204]" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
          <div
            className="prose-custom font-[family-name:var(--font-noto)] text-white/60 text-sm leading-[2.1] max-w-2xl mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="border-t border-white/[0.06] pt-10">
            <p className="text-white/30 text-sm font-[family-name:var(--font-noto)] mb-6">
              記事に関するご質問・お問い合わせはこちらから。
            </p>
            <div className="flex flex-wrap gap-4">
              <GlowButton href="/contact" variant="primary" size="md">
                お問い合わせ
              </GlowButton>
              <GlowButton href="/blog" variant="outline" size="md">
                ブログ一覧へ戻る
              </GlowButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
