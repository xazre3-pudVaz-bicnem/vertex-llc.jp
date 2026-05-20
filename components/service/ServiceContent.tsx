"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import GlowButton from "@/components/ui/GlowButton";
import TiltCard from "@/components/ui/TiltCard";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    number: "01",
    english: "LIGHT CARGO",
    title: "軽貨物配送",
    body: "軽バンや軽トラックを使用した小口荷物の配送。個人宅への宅配から企業向けまで、幅広いニーズに対応します。スピードと安全性を両立した配送で、お客様の信頼にお応えします。",
    features: ["当日配送対応", "個人宅・企業宅配", "小口荷物に最適"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <rect x="4" y="18" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M34 24h6l4 6v8h-10V24z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="40" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="36" cy="40" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 26h30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: "02",
    english: "CORPORATE",
    title: "企業専属配送",
    body: "企業様の配送業務を専属でお引き受けします。ルート配送から緊急便まで、安定した品質で毎日対応。業務の流れを熟知した専任ドライバーが対応するため、安心してお任せいただけます。",
    features: ["専属ドライバー対応", "ルート配送・緊急便", "継続的な品質保証"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 8V6M24 8V6M32 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="14" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="26" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 32h20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: "03",
    english: "SPOT",
    title: "スポット配送",
    body: "急な配送依頼にも即日対応。スポットでのご依頼をお気軽にどうぞ。迅速な手配と確実な配達をお約束します。突発的な物流ニーズにも柔軟に対応できる体制を整えています。",
    features: ["即日対応可能", "突発依頼に柔軟対応", "全エリア対応"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 24L32 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    number: "04",
    english: "CHARTER",
    title: "チャーター便",
    body: "車両を一台丸ごとチャーターいただけます。大量荷物や特急便など、専用便として柔軟にご対応します。貸し切り便でお客様のスケジュールや要件に合わせたサービスを提供します。",
    features: ["車両貸し切り対応", "大量荷物・特急便", "フルカスタム対応"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <path d="M4 28h32l4-10H8L4 28z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 28v6h40v-6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="36" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="34" cy="36" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "お問い合わせ", body: "メール・LINE・お電話でお気軽にご連絡ください。" },
  { num: "02", title: "ご要件確認",   body: "配送内容・スケジュール・エリアをヒアリングします。" },
  { num: "03", title: "お見積り",     body: "最短即日でお見積りをご提示いたします。" },
  { num: "04", title: "配送開始",     body: "ご契約後、迅速に配送をスタートします。" },
];

export default function ServiceContent() {
  const gridRef  = useRef(null);
  const stepsRef = useRef(null);
  const gridInView  = useInView(gridRef,  { once: true, margin: "-60px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── Service cards ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#020204]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
              >
                <TiltCard
                  className="card-shimmer group relative bg-white/[0.018] border border-white/[0.07] p-8 md:p-10 overflow-hidden cursor-default"
                  intensity={5}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
                  {/* Number watermark */}
                  <span className="absolute top-5 right-6 font-[family-name:var(--font-bebas)] text-[6rem] leading-none text-white/[0.04] select-none pointer-events-none">
                    {s.number}
                  </span>

                  <div className="flex items-start gap-6">
                    <div className="shrink-0 text-white/25 group-hover:text-blue-400 transition-colors duration-400 mt-1">
                      {s.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-[family-name:var(--font-bebas)] text-[9px] tracking-[0.32em] text-white/20 group-hover:text-blue-400/55 transition-colors duration-300 block mb-1.5">
                        {s.english}
                      </span>
                      <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl md:text-2xl text-white mb-3 leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-white/40 text-sm font-[family-name:var(--font-noto)] leading-[2] mb-5">
                        {s.body}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="text-[9px] tracking-[0.1em] text-blue-400/50 border border-blue-500/20 px-2.5 py-1 font-[family-name:var(--font-noto)]"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/45 to-transparent transition-all duration-500" />
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "rgba(0,60,255,0.05)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                How It Works
              </span>
            </div>
            <div className="overflow-hidden mb-14">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                FLOW
              </h2>
            </div>
          </FadeIn>

          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 28 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="bg-[#030305] p-8 group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-blue-500/20 group-hover:text-blue-500/35 transition-colors duration-300 block mb-4 leading-none">
                  {s.num}
                </span>
                <h4 className="font-[family-name:var(--font-noto)] font-bold text-white text-base mb-2">
                  {s.title}
                </h4>
                <p className="text-white/35 text-xs font-[family-name:var(--font-noto)] leading-[1.9]">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 flex flex-wrap gap-4">
              <GlowButton href="/contact" variant="primary">
                配送を相談する
              </GlowButton>
              <GlowButton href="/contact" variant="outline">
                お見積りを依頼する
              </GlowButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
