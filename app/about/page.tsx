import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatementSection from "@/components/StatementSection";
import StrengthSection from "@/components/StrengthSection";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "会社概要",
  description: "合同会社VERTEXの会社概要。軽貨物配送のプロとして、信頼とスピードを届けます。",
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
