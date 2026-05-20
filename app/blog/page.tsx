import type { Metadata } from "next";
import { Suspense } from "react";
import BlogClientPage from "@/components/blog/BlogClientPage";

export const metadata: Metadata = {
  title: "ブログ",
  description: "合同会社VERTEXのブログ。軽貨物配送に関する情報・ニュースをお届けします。",
};

export default function BlogPage() {
  return (
    <Suspense>
      <BlogClientPage />
    </Suspense>
  );
}
