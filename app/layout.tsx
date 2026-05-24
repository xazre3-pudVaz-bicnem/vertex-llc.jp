import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageProgress from "@/components/PageProgress";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertex-llc.jp"),
  title: {
    template: "%s | 合同会社VERTEX",
    default: "東京の軽貨物ドライバー求人なら合同会社VERTEX｜業務委託配送ドライバー募集",
  },
  description:
    "東京・八王子を拠点とする合同会社VERTEXは、軽貨物ドライバーを随時募集中。未経験歓迎・業務委託契約・高収入可能。ラストワンマイル配送・企業配送・スポット配送に対応する物流パートナーです。",
  keywords: [
    "東京 軽貨物ドライバー 求人",
    "軽貨物 求人",
    "軽配送 求人",
    "業務委託 ドライバー 東京",
    "配送ドライバー 求人",
    "軽貨物 未経験",
    "軽貨物 高収入",
    "八王子 軽貨物",
    "合同会社VERTEX",
  ],
  openGraph: {
    siteName: "合同会社VERTEX",
    locale: "ja_JP",
    type: "website",
    title: "東京の軽貨物ドライバー求人なら合同会社VERTEX｜業務委託配送ドライバー募集",
    description:
      "東京・八王子を拠点に軽貨物ドライバー求人を募集中。未経験歓迎・業務委託・高収入可能。ラストワンマイル配送から企業配送まで対応。",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "合同会社VERTEX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京の軽貨物ドライバー求人なら合同会社VERTEX",
    description:
      "未経験歓迎・業務委託・高収入可能。東京で軽貨物ドライバーとして活躍しませんか？",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${bebasNeue.variable} ${notoSansJP.variable} ${inter.variable}`}
    >
      <body>
        <LenisProvider>
          <CustomCursor />
          <PageProgress />
          <LoadingScreen />
          <Navigation />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
