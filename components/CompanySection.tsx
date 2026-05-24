"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const companyData = [
  { label: "会社名",   value: "合同会社VERTEX" },
  { label: "所在地",   value: "東京都八王子市川口町1395-8" },
  { label: "代表者",   value: "森田 稚洋" },
  { label: "設立",     value: "2026年5月" },
  { label: "資本金",   value: "300,000円" },
  {
    label: "事業内容",
    value: "ラストワンマイル配送 / 企業配送 / スポット配送 / チャーター配送 / 倉庫内仕分け / 物流サポート",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vertex.logi.official?igsh=MTJ5YmdnenY3cjZ1ZQ%3D%3D&utm_source=qr",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/vertex_logi?s=21",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M15.34 3h2.71l-5.92 6.77L19 17h-5.46l-3.81-4.98L5.34 17H2.63l6.33-7.24L2 3h5.59l3.45 4.51L15.34 3zm-.95 12.6h1.5L5.66 4.52H4.05l10.34 11.08z" />
      </svg>
    ),
  },
  {
    label: "LINE",
    href: "https://lin.ee/oiG5UJQ",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6 2 2.5 5 2.5 8.6c0 3.7 3.3 6.7 8 7.1V18l3-3a9.4 9.4 0 001.3-.4C17.3 13.5 19.5 11.2 19.5 8.6 19.5 5 16 2 10 2z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 9h7M6.5 11.5h4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CompanySection() {
  return (
    <section
      id="company"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#040407]" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-blue-700/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.35em] font-[family-name:var(--font-inter)] uppercase">
                Corporate Info
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white mb-10">
              COMPANY
            </h2>
            {/* Logo */}
            <div className="relative w-28 h-28 mb-2">
              <Image
                src="/logo.jpg"
                alt="合同会社VERTEX ロゴ"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
          </FadeIn>

          {/* Right: table */}
          <FadeIn delay={0.2} direction="right">
            <div className="border border-white/[0.08]">
              {companyData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[160px_1fr] border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors duration-200"
                >
                  <div className="px-6 py-5 bg-white/[0.02] border-r border-white/[0.06]">
                    <span className="text-white/40 text-xs font-[family-name:var(--font-noto)] font-medium whitespace-nowrap tracking-wide">
                      {row.label}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <span className="text-sm font-[family-name:var(--font-noto)] leading-relaxed text-white/65">
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}

              {/* SNS row */}
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[160px_1fr] hover:bg-white/[0.015] transition-colors duration-200">
                <div className="px-6 py-5 bg-white/[0.02] border-r border-white/[0.06]">
                  <span className="text-white/40 text-xs font-[family-name:var(--font-noto)] font-medium whitespace-nowrap tracking-wide">
                    SNS
                  </span>
                </div>
                <div className="px-6 py-5 flex items-center flex-wrap gap-4">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-1.5 text-white/35 hover:text-blue-400 transition-colors duration-200 text-xs font-[family-name:var(--font-inter)] tracking-wider"
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
