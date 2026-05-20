"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";

const ease = [0.16, 1, 0.3, 1] as const;

const SHADOW_REST  = "0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0)";
const SHADOW_HOVER = "0 0 0 1px rgba(0,102,255,0.5), 0 24px 64px rgba(0,102,255,0.2), 0 8px 32px rgba(0,0,0,0.5)";

const services = [
  {
    number: "01",
    english: "LIGHT CARGO",
    title: "軽貨物配送",
    description: "軽バンや軽トラックを使用した小口荷物の配送。個人宅への宅配から企業向けまで、幅広いニーズに対応します。",
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
    description: "企業様の配送業務を専属でお引き受けします。ルート配送から緊急便まで、安定した品質で毎日対応します。",
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
    description: "急な配送依頼にも即日対応。スポットでのご依頼をお気軽にどうぞ。迅速な手配と確実な配達をお約束します。",
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
    description: "車両を一台丸ごとチャーターいただけます。大量荷物や特急便など、専用便として柔軟にご対応します。",
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

export default function ServiceSection() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="service" className="relative py-32 md:py-52 overflow-hidden">
      <div className="absolute inset-0 bg-[#000]" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(0,60,220,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionTitle label="What We Do" heading="SERVICE" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/30 text-sm font-[family-name:var(--font-noto)] leading-[1.9] max-w-xs"
          >
            企業から個人まで、あらゆる配送ニーズに<br className="hidden md:block"/>対応するサービスラインナップ。
          </motion.p>
        </div>

        {/* Cards — 2×2 on desktop */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
            >
            <TiltCard
              intensity={5}
              className="card-shimmer group relative bg-white/[0.018] border border-white/[0.07] p-8 md:p-10 overflow-hidden cursor-default"
            >
              {/* Number watermark */}
              <span className="absolute top-5 right-6 font-[family-name:var(--font-bebas)] text-[6rem] leading-none text-white/[0.04] group-hover:text-blue-500/[0.09] transition-colors duration-500 select-none pointer-events-none">
                {s.number}
              </span>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/65 transition-all duration-500" />

              <div className="flex items-start gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.28 } }}
                  className="shrink-0 text-white/25 group-hover:text-blue-400 transition-colors duration-400 mt-1"
                >
                  {s.icon}
                </motion.div>

                <div className="flex-1 min-w-0">
                  {/* EN label */}
                  <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.32em] text-white/22 group-hover:text-blue-400/55 transition-colors duration-300 block mb-1.5">
                    {s.english}
                  </span>
                  {/* JP title */}
                  <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl md:text-2xl text-white mb-4 leading-tight">
                    {s.title}
                  </h3>
                  {/* Description */}
                  <p className="text-white/32 text-sm font-[family-name:var(--font-noto)] leading-[1.95]">
                    {s.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white/15 group-hover:text-blue-400/60 group-hover:translate-x-1.5 transition-all duration-300"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Bottom slide line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-500" />
            </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA to service page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="/service"
            className="group inline-flex items-center gap-3 text-white/35 hover:text-white/70 text-[11px] tracking-[0.25em] font-[family-name:var(--font-inter)] transition-colors duration-300"
          >
            <span className="w-8 h-px bg-white/15 group-hover:bg-white/40 group-hover:w-12 transition-all duration-300" />
            VIEW ALL SERVICES
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
