import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatementSection from "@/components/StatementSection";
import StrengthSection from "@/components/StrengthSection";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "会社概要",
  description: "合同会社VERTEXの会社概要。東京・八王子を拠点に軽貨物配送・企業配送・スポット配送に対応。代表者・所在地・事業内容など基本情報をご確認ください。",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="Corporate Info"
        heading="ABOUT"
        subheading="会社概要"
        breadcrumb={[{ label: "ABOUT", href: "/about" }]}
      />
      <AboutContent />
      <StatementSection />
      <StrengthSection />
    </main>
  );
}
