"use client";

import FadeIn from "./FadeIn";

const jobData = [
  { label: "募集職種", value: "軽貨物ドライバー" },
  { label: "雇用形態", value: "業務委託" },
  {
    label: "仕事内容",
    value: "軽貨物配送、企業配送、スポット配送など",
  },
  { label: "応募資格", value: "普通自動車免許（AT限定可）" },
  { label: "勤務地", value: "あとで入力" },
  { label: "報酬", value: "あとで入力" },
  { label: "勤務時間", value: "案件により異なる" },
  { label: "休日", value: "案件により異なる" },
];

export default function JobInfoSection() {
  return (
    <section
      id="job-info"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 text-[10px] tracking-[0.35em] font-[family-name:var(--font-inter)] uppercase">
              Job Details
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white mb-16">
            JOB INFO
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="border border-white/[0.08] overflow-hidden">
            {jobData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[auto_1fr] md:grid-cols-[200px_1fr] border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-200`}
              >
                <div className="px-6 py-5 bg-white/[0.025] border-r border-white/[0.06]">
                  <span className="text-white/50 text-sm font-[family-name:var(--font-noto)] font-medium whitespace-nowrap">
                    {row.label}
                  </span>
                </div>
                <div className="px-6 py-5">
                  <span
                    className={`text-sm font-[family-name:var(--font-noto)] leading-relaxed ${
                      row.value === "あとで入力"
                        ? "text-white/20 italic"
                        : "text-white/70"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA under table */}
        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-xs tracking-[0.25em] px-8 py-4 transition-all duration-300 font-[family-name:var(--font-inter)] uppercase"
            >
              この求人に応募する
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-white/15 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.07] text-white text-xs tracking-[0.25em] px-8 py-4 transition-all duration-300 font-[family-name:var(--font-inter)] uppercase"
            >
              まずは相談する
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
