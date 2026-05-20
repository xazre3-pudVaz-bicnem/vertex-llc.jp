import type { Metadata } from "next";
import RecruitLP from "@/components/recruit/RecruitLP";

export const metadata: Metadata = {
  title: "採用情報",
  description: "合同会社VERTEXでは軽貨物ドライバーを募集しています。未経験歓迎・業務委託・高収入。",
};

export default function RecruitPage() {
  return (
    <main>
      <RecruitLP />
    </main>
  );
}
