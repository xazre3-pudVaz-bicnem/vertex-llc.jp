import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import AreaDetailContent from "@/components/area/AreaDetailContent";
import { areas, getArea } from "@/lib/areas";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: { absolute: `${area.metaTitle} | 合同会社VERTEX` },
    description: area.metaDesc,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDesc,
      url: `https://vertex-llc.jp/area/${area.slug}`,
    },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <main>
      <PageHero
        label="Coverage Area"
        heading={area.name}
        subheading="対応エリア詳細"
        breadcrumb={[
          { label: "AREA", href: "/area" },
          { label: area.name, href: `/area/${area.slug}` },
        ]}
      />
      <AreaDetailContent area={area} />
    </main>
  );
}
