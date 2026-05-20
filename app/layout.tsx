import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  title: {
    template: "%s | 合同会社VERTEX",
    default: "合同会社VERTEX | 軽貨物配送・物流パートナー",
  },
  description:
    "合同会社VERTEXは、軽貨物配送を中心に、企業配送・スポット便・チャーター便まで柔軟に対応する物流パートナーです。",
  openGraph: {
    siteName: "合同会社VERTEX",
    locale: "ja_JP",
    type: "website",
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
          <LoadingScreen />
          <Navigation />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
