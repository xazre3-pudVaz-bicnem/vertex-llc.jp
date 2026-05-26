import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AreaIndexContent from "@/components/area/AreaIndexContent";

export const metadata: Metadata = {
  title: "対応エリア",
  description:
    "合同会社VERTEXの軽貨物配送・企業配送・スポット配送の対応エリア一覧。八王子市を拠点に東京・多摩地域30市区町村に対応。軽貨物ドライバー求人も随時募集中。",
  openGraph: {
    title: "対応エリア一覧｜東京・多摩地域の軽貨物配送｜合同会社VERTEX",
    description:
      "八王子市拠点の合同会社VERTEXは東京多摩30エリアに対応。軽貨物配送・企業配送・スポット配送・チャーター配送まで。",
    url: "https://vertex-llc.jp/area",
  },
};

export default function AreaPage() {
  return (
    <main>
      <PageHero
        label="Coverage Area"
        heading="AREA"
        subheading="対応エリア"
        breadcrumb={[{ label: "AREA", href: "/area" }]}
      />
      <AreaIndexContent />
    </main>
  );
}
