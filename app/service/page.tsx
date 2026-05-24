import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceContent from "@/components/service/ServiceContent";

export const metadata: Metadata = {
  title: "事業内容",
  description: "合同会社VERTEXの事業内容。ラストワンマイル配送・軽貨物配送・企業専属配送・スポット配送・チャーター配送・倉庫内仕分けまで、東京の物流ニーズに柔軟に対応します。",
};

export default function ServicePage() {
  return (
    <main>
      <PageHero
        label="What We Do"
        heading="SERVICE"
        subheading="事業内容"
        breadcrumb={[{ label: "SERVICE", href: "/service" }]}
      />
      <ServiceContent />
    </main>
  );
}
