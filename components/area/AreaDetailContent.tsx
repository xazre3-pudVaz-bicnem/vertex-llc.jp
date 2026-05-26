"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { type Area } from "@/lib/areas";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    en: "LIGHT CARGO",
    ja: "軽貨物配送",
    desc: "軽バン・軽トラックでの小口荷物配送。個人宅・企業宅配に対応します。",
  },
  {
    en: "CORPORATE",
    ja: "企業専属配送",
    desc: "専任ドライバーが企業様の配送業務を専属でお引き受け。ルート配送・緊急便に対応。",
  },
  {
    en: "SPOT",
    ja: "スポット配送",
    desc: "急な配送依頼にも即日対応。突発的な物流ニーズにも柔軟に対応します。",
  },
  {
    en: "CHARTER",
    ja: "チャーター配送",
    desc: "車両を1台丸ごとチャーター。大量荷物・特急便など、専用便でお客様に合わせます。",
  },
];

interface Props {
  area: Area;
}

export default function AreaDetailContent({ area }: Props) {
  const servicesRef = useRef(null);
  const recruitRef  = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-60px" });
  const recruitInView  = useInView(recruitRef,  { once: true, margin: "-60px" });

  return (
    <>
      {/* ── Lead ── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#020204]">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: "rgba(0,55,220,0.07)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                {area.catchphrase}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-noto)] font-black text-[clamp(1.8rem,5vw,4rem)] text-white mb-6 leading-tight">
              {area.name}の軽貨物配送・<br className="hidden sm:block" />
              ドライバー求人
            </h1>
            <p className="text-white/45 text-sm md:text-base font-[family-name:var(--font-noto)] leading-[2.2] max-w-2xl">
              {area.lead}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Services
              </span>
            </div>
            <div className="overflow-hidden mb-5">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,6vw,5rem)] leading-[0.9] text-white">
                {area.name}の配送サービス
              </h2>
            </div>
            <p className="text-white/35 text-sm font-[family-name:var(--font-noto)] leading-[2] max-w-2xl mb-12">
              {area.serviceNote}
            </p>
          </FadeIn>

          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {services.map((s, i) => (
              <motion.div
                key={s.en}
                initial={{ opacity: 0, y: 28 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="group border border-white/[0.07] bg-white/[0.018] hover:bg-white/[0.04] hover:border-blue-500/25 transition-all duration-300 p-7 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
                <span className="font-[family-name:var(--font-bebas)] text-[9px] tracking-[0.3em] text-white/18 group-hover:text-blue-400/50 transition-colors block mb-2">
                  {s.en}
                </span>
                <h3 className="font-[family-name:var(--font-noto)] font-bold text-white text-base mb-3 leading-tight">
                  {s.ja}
                </h3>
                <p className="text-white/32 text-xs font-[family-name:var(--font-noto)] leading-[1.95]">
                  {s.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/service"
                className="inline-flex items-center gap-4 border border-white/[0.1] hover:border-white/25 px-7 py-3 text-white/45 hover:text-white/75 transition-all duration-300 font-[family-name:var(--font-bebas)] text-base tracking-[0.2em] group"
              >
                サービス詳細を見る
                <span className="w-4 h-px bg-current opacity-50 group-hover:w-6 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 px-7 py-3 text-white transition-all duration-300 btn-shimmer font-[family-name:var(--font-bebas)] text-base tracking-[0.2em] group"
              >
                {area.name}への配送を相談する
                <span className="w-4 h-px bg-white/60 group-hover:w-6 transition-all duration-300" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Recruit ── */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#020204]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div
          className="absolute top-1/2 left-0 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "rgba(0,60,255,0.06)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div ref={recruitRef}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={recruitInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-px bg-blue-500" />
                <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                  Driver Recruit
                </span>
              </div>
              <div className="overflow-hidden mb-5">
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,6vw,5rem)] leading-[0.9] text-white">
                  {area.name}のドライバー求人
                </h2>
              </div>

              <div className="max-w-2xl border border-white/[0.07] p-8 md:p-10 relative overflow-hidden bg-white/[0.018]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-transparent" />
                <p className="text-white/45 text-sm font-[family-name:var(--font-noto)] leading-[2.2] mb-8">
                  {area.recruitNote}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {["未経験歓迎", "業務委託契約", "高収入可能"].map((tag) => (
                    <li
                      key={tag}
                      className="text-center text-[10px] tracking-[0.1em] text-blue-400/60 border border-blue-500/20 py-2 font-[family-name:var(--font-noto)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/recruit"
                    className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 px-7 py-3 text-white transition-all duration-300 btn-shimmer font-[family-name:var(--font-bebas)] text-base tracking-[0.2em] group"
                  >
                    求人詳細を見る
                    <span className="w-4 h-px bg-white/60 group-hover:w-6 transition-all duration-300" />
                  </Link>
                  <a
                    href="https://lin.ee/oiG5UJQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-green-500/30 hover:border-green-400/60 px-7 py-3 text-white/50 hover:text-white/80 transition-all duration-300 font-[family-name:var(--font-bebas)] text-base tracking-[0.2em]"
                  >
                    LINEで相談する
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Other areas ── */}
      <section className="relative py-14 overflow-hidden bg-[#030305]">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-white/30 text-xs font-[family-name:var(--font-noto)]">
                他のエリアを見る
              </p>
              <Link
                href="/area"
                className="inline-flex items-center gap-3 text-white/40 hover:text-white/70 text-xs font-[family-name:var(--font-inter)] tracking-widest transition-colors group"
              >
                エリア一覧へ戻る
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
