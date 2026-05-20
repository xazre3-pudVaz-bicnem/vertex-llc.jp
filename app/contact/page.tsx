import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "配送のご相談・ドライバー応募はこちらから。合同会社VERTEXへのお問い合わせ窓口です。",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Get In Touch"
        heading="CONTACT"
        subheading="お問い合わせ"
        breadcrumb={[{ label: "CONTACT", href: "/contact" }]}
      />
      <ContactSection />
    </main>
  );
}
