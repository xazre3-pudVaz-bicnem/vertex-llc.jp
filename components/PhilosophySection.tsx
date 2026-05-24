"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  "圧倒的行動力",
  "挑戦を止めない",
  "約束を守り抜く",
  "迅速かつ丁寧な配送",
  "「また頼みたい」を積み重ねる",
];

export default function PhilosophySection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const valRef = useRef(null);
  const valInView = useInView(valRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-40 md:py-64 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#02020a]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />

      {/* Blue accent orbs */}
      <div
        className="absolute top-1/3 -left-20 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none orb-float-slow"
        style={{ background: "rgba(0,50,255,0.07)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none orb-float"
        style={{ background: "rgba(0,100,255,0.05)" }}
      />

      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/12 to-transparent w-full"
          style={{ top: "28%", transform: "rotate(-1.5deg)" }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-white/[0.025] to-transparent w-full"
          style={{ top: "72%", transform: "rotate(1deg)" }}
        />
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-[family-name:var(--font-bebas)] text-[20vw] leading-none text-white/[0.013] whitespace-nowrap">
          PHILOSOPHY
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-7 h-px bg-blue-500" />
            <span className="text-blue-400 text-[10px] tracking-[0.42em] font-[family-name:var(--font-inter)] uppercase">
              Philosophy / 企業理念
            </span>
          </div>
        </FadeIn>

        {/* Main philosophy statement */}
        <div ref={headRef} className="mb-28 md:mb-36">
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "105%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 1.0, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.2rem,6.5vw,6rem)] leading-[1.1] text-white"
            >
              運送業界を
            </motion.p>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.p
              initial={{ y: "105%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.1, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.2rem,6.5vw,6rem)] leading-[1.1] text-gradient-blue"
            >
              カッコよくする。
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.38, ease }}
            className="text-white/22 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.38em] uppercase"
          >
            Corporate Philosophy — 合同会社VERTEX
          </motion.p>
        </div>

        {/* Three pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0">

          {/* Mission */}
          <FadeIn delay={0} direction="up">
            <div className="group relative border border-white/[0.07] bg-white/[0.02] p-8 md:p-10 overflow-hidden card-shimmer h-full min-h-[240px]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/55 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />

              <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.42em] text-blue-400/55 block mb-2">
                MISSION
              </span>
              <h3 className="font-[family-name:var(--font-noto)] font-bold text-sm text-white/35 mb-6 tracking-widest">
                使命
              </h3>
              <p className="text-white/50 text-sm font-[family-name:var(--font-noto)] leading-[2.2]">
                常識にとらわれない行動力と責任感で、
                <br />
                物流業界に新しい価値を創り出す。
              </p>
            </div>
          </FadeIn>

          {/* Vision — highlighted */}
          <FadeIn delay={0.12} direction="up">
            <div className="group relative border border-blue-500/25 bg-blue-500/[0.045] p-8 md:p-10 overflow-hidden card-shimmer h-full min-h-[240px]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-400/60 to-transparent transition-all duration-500" />
              {/* Corner glow */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-[40px] pointer-events-none"
                style={{ background: "rgba(0,102,255,0.18)" }}
              />

              <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.42em] text-blue-400/80 block mb-2">
                VISION
              </span>
              <h3 className="font-[family-name:var(--font-noto)] font-bold text-sm text-white mb-6 tracking-widest">
                ビジョン
              </h3>
              <p className="text-white/65 text-sm font-[family-name:var(--font-noto)] leading-[2.2]">
                多摩エリアNo.1から、
                <br />
                全国で必要とされる
                <br />
                物流会社へ。
              </p>
            </div>
          </FadeIn>

          {/* Value */}
          <FadeIn delay={0.24} direction="up">
            <div
              ref={valRef}
              className="group relative border border-white/[0.07] bg-white/[0.02] p-8 md:p-10 overflow-hidden card-shimmer h-full min-h-[240px]"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/55 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />

              <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.42em] text-blue-400/55 block mb-2">
                VALUE
              </span>
              <h3 className="font-[family-name:var(--font-noto)] font-bold text-sm text-white/35 mb-6 tracking-widest">
                行動指針
              </h3>
              <ul className="space-y-3.5">
                {values.map((v, i) => (
                  <motion.li
                    key={v}
                    initial={{ opacity: 0, x: -14 }}
                    animate={valInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.28 + i * 0.1, ease }}
                    className="flex items-start gap-3 text-white/45 text-xs font-[family-name:var(--font-noto)] leading-[1.9]"
                  >
                    <span className="mt-[7px] flex-shrink-0 w-3 h-px bg-blue-500/60" />
                    {v}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
