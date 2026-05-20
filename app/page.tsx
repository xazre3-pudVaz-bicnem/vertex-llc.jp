import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import StatementSection from "@/components/StatementSection";
import ServiceSection from "@/components/ServiceSection";
import StrengthSection from "@/components/StrengthSection";
import RecruitSection from "@/components/RecruitSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <StatementSection />
      <ServiceSection />
      {/* Brand keywords — large faint type between sections */}
      <MarqueeSection variant="brand" reverse />
      <StrengthSection />
      <MarqueeSection variant="light" />
      <RecruitSection />
      <ContactSection />
    </main>
  );
}
