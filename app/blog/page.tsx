import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "ブログ",
  description: "合同会社VERTEXのブログ。軽貨物配送に関する情報・ニュースをお届けします。",
};

/* WordPress REST API ready — replace with actual fetch when available */
const placeholderPosts = [
  {
    slug: "welcome-post",
    title: "合同会社VERTEXのホームページを公開しました",
    excerpt: "この度、合同会社VERTEXのコーポレートサイトをオープンしました。軽貨物配送を中心にサービス展開していきます。",
    date: "2024-01-01",
    category: "お知らせ",
  },
  {
    slug: "service-info",
    title: "スポット配送・チャーター便のご案内",
    excerpt: "急な配送ご依頼にも対応するスポット便と、専用便として柔軟にご対応するチャーター便についてご説明します。",
    date: "2024-01-05",
    category: "サービス",
  },
  {
    slug: "recruit-info",
    title: "軽貨物ドライバー募集中！未経験歓迎",
    excerpt: "現在、軽貨物ドライバーを積極的に募集しています。未経験者も歓迎。業務委託契約で自由度の高い働き方が可能です。",
    date: "2024-01-10",
    category: "採用",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        label="News & Info"
        heading="BLOG"
        subheading="ブログ・お知らせ"
        breadcrumb={[{ label: "BLOG", href: "/blog" }]}
      />
      <BlogList posts={placeholderPosts} />
    </main>
  );
}
