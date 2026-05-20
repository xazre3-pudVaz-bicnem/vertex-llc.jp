"use client";

import Link from "next/link";

const links = {
  会社情報: [
    { label: "会社概要",     href: "/about" },
    { label: "サービス",     href: "/service" },
    { label: "強み",         href: "/about#strength" },
  ],
  採用: [
    { label: "採用情報",     href: "/recruit" },
    { label: "募集要項",     href: "/recruit#job-info" },
    { label: "よくある質問", href: "/recruit#faq" },
  ],
  お問い合わせ: [
    { label: "配送相談",     href: "/contact" },
    { label: "ドライバー応募", href: "/recruit#apply" },
    { label: "ブログ",       href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020202] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-0 left-0 w-[400px] h-[200px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(0,50,255,0.04)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 block mb-4"
            >
              VERTEX
            </Link>
            <p className="text-white/25 text-xs font-[family-name:var(--font-noto)] leading-[2] max-w-[200px]">
              軽貨物配送を中心に企業物流を支える、
              信頼のパートナー。
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-4 h-px bg-blue-500" />
              <span className="text-blue-400/60 text-[9px] tracking-[0.3em] font-[family-name:var(--font-inter)]">
                DELIVERING TRUST
              </span>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/20 text-[9px] tracking-[0.3em] font-[family-name:var(--font-inter)] uppercase mb-5">
                {group}
              </p>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/35 hover:text-white/70 text-xs font-[family-name:var(--font-noto)] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-[10px] font-[family-name:var(--font-inter)] tracking-widest">
            © 2024 合同会社VERTEX. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "TOP", href: "/" },
              { label: "PRIVACY", href: "/privacy" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors font-[family-name:var(--font-inter)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
