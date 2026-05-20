"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlowButton from "@/components/ui/GlowButton";
import TiltCard from "@/components/ui/TiltCard";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    num: "01",
    title: "未経験歓迎",
    body: "ドライバー経験がなくても大丈夫。一から丁寧にサポートします。",
    icon: "★",
  },
  {
    num: "02",
    title: "業務委託契約",
    body: "自由度の高い働き方で、自分のペースでキャリアを積めます。",
    icon: "◇",
  },
  {
    num: "03",
    title: "頑張りが収入に直結",
    body: "走った分だけ報酬が増える仕組み。努力が正直に反映されます。",
    icon: "↑",
  },
  {
    num: "04",
    title: "柔軟な働き方",
    body: "勤務時間や休日も相談可能。ライフスタイルに合わせて調整できます。",
    icon: "⊕",
  },
];

export default function RecruitSection() {
  const topRef   = useRef(null);
  const tagRef   = useRef(null);
  const cardRef  = useRef(null);
  const topInView  = useInView(topRef,  { once: true, margin: "-60px" });
  const tagInView  = useInView(tagRef,  { once: true, margin: "-60px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <section id="recruit" className="relative py-40 md:py-64 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#000]" />
      <div className="absolute inset-0 grid-bg opacity-45" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 80% 20%, rgba(0,60,220,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none orb-float"
        style={{ background: "rgba(0,55,200,0.08)" }}
      />

      {/* Huge watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-[family-name:var(--font-bebas)] text-[32vw] leading-none text-white/[0.014] whitespace-nowrap">
          JOIN VERTEX
        </span>
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-[28%] w-px h-full bg-gradient-to-b from-blue-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/6 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

        {/* ── Section label + RECRUIT heading ── */}
        <div ref={topRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={topInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={topInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.08, ease }}
              style={{ transformOrigin: "left" }}
              className="block w-7 h-px bg-blue-500"
            />
            <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
              Join Our Team
            </span>
          </motion.div>
          <div className="overflow-hidden mb-16">
            <motion.h2
              initial={{ y: "110%" }}
              animate={topInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,10vw,9rem)] leading-[0.88] text-white"
            >
              RECRUIT
            </motion.h2>
          </div>
        </div>

        {/* ── Tagline ── */}
        <div ref={tagRef} className="mb-20">
          <div className="overflow-hidden mb-1">
            <motion.p
              initial={{ y: "110%" }}
              animate={tagInView ? { y: 0 } : {}}
              transition={{ duration: 0.88, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-[clamp(1.8rem,4vw,3.8rem)] leading-[1.2] text-white/45"
            >
              走った分だけ、
            </motion.p>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "110%" }}
              animate={tagInView ? { y: 0 } : {}}
              transition={{ duration: 0.88, delay: 0.12, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[1.1]"
            >
              <span className="text-gradient-blue">未来が変わる。</span>
            </motion.p>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={tagInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.3, ease }}
            style={{ transformOrigin: "left" }}
            className="h-px w-56 bg-gradient-to-r from-blue-500 to-transparent mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={tagInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.38, ease }}
            className="text-white/38 text-sm md:text-base font-[family-name:var(--font-noto)] leading-[2.1] max-w-lg"
          >
            合同会社VERTEXでは、共に成長できる軽貨物ドライバーを募集しています。
            未経験から挑戦したい方、しっかり稼ぎたい方、自由度の高い働き方を目指したい方を歓迎します。
          </motion.p>
        </div>

        {/* ── Benefit cards ── */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 36 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
            <TiltCard
              intensity={6}
              className="group card-shimmer border border-white/[0.07] bg-white/[0.02] p-7 cursor-default h-full"
            >
              {/* Number */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-white/[0.06] group-hover:text-blue-500/12 transition-colors duration-400 leading-none">
                  {b.num}
                </span>
                <span className="text-blue-500/40 text-lg group-hover:text-blue-400/70 transition-colors duration-300">
                  {b.icon}
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-noto)] font-bold text-base text-white mb-3 leading-tight">
                {b.title}
              </h4>
              <p className="text-white/32 text-xs font-[family-name:var(--font-noto)] leading-[1.95]">
                {b.body}
              </p>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/45 to-transparent transition-all duration-450" />
            </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="flex flex-wrap gap-4"
        >
          <GlowButton href="/recruit" variant="primary" size="lg">
            採用情報を見る
          </GlowButton>
          <GlowButton href="/contact" variant="outline" size="lg">
            まずは相談する
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
