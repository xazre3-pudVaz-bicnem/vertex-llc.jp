import type { Metadata } from "next";
import RecruitLP from "@/components/recruit/RecruitLP";

export const metadata: Metadata = {
  title: {
    absolute:
      "東京の軽貨物ドライバー求人｜業務委託・未経験歓迎・高収入｜合同会社VERTEX",
  },
  description:
    "東京都内で軽貨物ドライバー（業務委託）を募集中。未経験歓迎・高収入可能・自由な働き方。普通自動車免許（AT可）があれば応募OK。八王子を拠点に活躍するドライバー仲間を募集しています。",
  openGraph: {
    title: "東京の軽貨物ドライバー求人｜業務委託・未経験歓迎｜合同会社VERTEX",
    description:
      "東京都内で軽貨物ドライバー（業務委託）を募集中。未経験歓迎・高収入可能・自由な働き方。まずはLINEでご相談ください。",
    url: "https://vertex-llc.jp/recruit",
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "軽貨物ドライバー（業務委託）",
  description:
    "東京都内での軽貨物配送ドライバーを募集しています。ラストワンマイル配送・企業配送・スポット配送など。未経験歓迎・業務委託契約・高収入可能。自由な働き方で活躍したい方歓迎。",
  identifier: {
    "@type": "PropertyValue",
    name: "合同会社VERTEX",
    value: "vertex-recruit-2026",
  },
  hiringOrganization: {
    "@type": "Organization",
    name: "合同会社VERTEX",
    sameAs: "https://vertex-llc.jp",
    url: "https://vertex-llc.jp",
    logo: "https://vertex-llc.jp/logo.jpg",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "川口町1395-8",
      addressLocality: "八王子市",
      addressRegion: "東京都",
      postalCode: "192-0011",
      addressCountry: "JP",
    },
  },
  employmentType: "CONTRACTOR",
  datePosted: "2026-05-01",
  validThrough: "2027-12-31",
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      minValue: 200000,
      maxValue: 500000,
      unitText: "MONTH",
    },
  },
  qualifications: "普通自動車免許（AT限定可）",
  responsibilities:
    "軽貨物配送、ラストワンマイル配送、企業配送、スポット配送、チャーター配送など",
  jobBenefits: "業務委託契約、高収入可能、未経験歓迎、自由な働き方、車両リース制度あり",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Japan",
  },
  directApply: true,
  url: "https://vertex-llc.jp/recruit",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "東京での軽貨物ドライバー求人ですが、未経験でも応募できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、未経験歓迎です。東京・八王子エリアを中心に、一から丁寧にサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "車両は必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "車両リース制度がありますので、車をお持ちでない方でも安心して始められます！",
      },
    },
    {
      "@type": "Question",
      name: "稼働日・時間は自由ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本的に相談に応じます。業務委託契約のため、ご自身のライフスタイルに合わせた働き方が可能です。",
      },
    },
    {
      "@type": "Question",
      name: "報酬の支払いサイクルは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "詳細はお問い合わせください。まずはLINEよりお気軽にご相談ください。",
      },
    },
  ],
};

export default function RecruitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <RecruitLP />
      </main>
    </>
  );
}
