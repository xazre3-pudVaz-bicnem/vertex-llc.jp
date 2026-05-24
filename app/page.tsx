import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import StatementSection from "@/components/StatementSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServiceSection from "@/components/ServiceSection";
import StrengthSection from "@/components/StrengthSection";
import RecruitSection from "@/components/RecruitSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "東京の軽貨物ドライバー求人なら合同会社VERTEX｜業務委託配送ドライバー募集",
  },
  description:
    "東京・八王子を拠点とする合同会社VERTEX。ラストワンマイル配送・企業配送・スポット配送に対応する軽貨物物流パートナー。軽貨物ドライバー（業務委託）を随時募集中。未経験歓迎・高収入可能。",
  openGraph: {
    title: "東京の軽貨物ドライバー求人なら合同会社VERTEX",
    description:
      "未経験歓迎・業務委託・高収入可能。東京で軽貨物ドライバーとして活躍しませんか？",
    url: "https://vertex-llc.jp",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "合同会社VERTEX",
  alternateName: "VERTEX",
  url: "https://vertex-llc.jp",
  logo: "https://vertex-llc.jp/logo.jpg",
  description:
    "東京・八王子を拠点とする軽貨物配送会社。ラストワンマイル配送・企業配送・スポット配送・チャーター配送に対応。軽貨物ドライバー（業務委託）を随時募集中。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "川口町1395-8",
    addressLocality: "八王子市",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
  sameAs: [
    "https://www.instagram.com/vertex.logi.official",
    "https://x.com/vertex_logi",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <HeroSection />
        <MarqueeSection />
        <StatementSection />
        <PhilosophySection />
        <ServiceSection />
        {/* Brand keywords — large faint type between sections */}
        <MarqueeSection variant="brand" reverse />
        <StrengthSection />
        <MarqueeSection variant="light" />
        <RecruitSection />
        <ContactSection />
      </main>
    </>
  );
}
