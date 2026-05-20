"use client";

import FadeIn from "./FadeIn";

const companyData = [
  { label: "会社名", value: "合同会社VERTEX" },
  { label: "所在地", value: "あとで入力" },
  { label: "代表者", value: "あとで入力" },
  {
    label: "事業内容",
    value: "軽貨物配送、企業配送、スポット配送、チャーター便",
  },
  { label: "Instagram", value: "あとで入力" },
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
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">
              COMPANY
            </h2>
          </FadeIn>

          {/* Right: table */}
          <FadeIn delay={0.2} direction="right">
            <div className="border border-white/[0.08]">
              {companyData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[160px_1fr] border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.015] transition-colors duration-200"
                >
                  <div className="px-6 py-5 bg-white/[0.02] border-r border-white/[0.06]">
                    <span className="text-white/40 text-xs font-[family-name:var(--font-noto)] font-medium whitespace-nowrap tracking-wide">
                      {row.label}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <span
                      className={`text-sm font-[family-name:var(--font-noto)] leading-relaxed ${
                        row.value === "あとで入力"
                          ? "text-white/20 italic"
                          : "text-white/65"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
