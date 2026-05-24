"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  { num: "01", text: "圧倒的行動力" },
  { num: "02", text: "挑戦を止めない" },
  { num: "03", text: "約束を守り抜く" },
  { num: "04", text: "迅速かつ丁寧な配送" },
  { num: "05", text: "「また頼みたい」を積み重ねる" },
];

export default function PhilosophySection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-48 md:py-80 overflow-hidden">

      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 bg-[#01010b]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />

      {/* Ambient glow orbs */}
      <div
        className="absolute -top-40 left-1/3 w-[900px] h-[700px] rounded-full blur-[220px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,50,220,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,80,255,0.08) 0%, transparent 70%)" }}
      />

      {/* Diagonal speed stripe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute h-[1px] w-[160%] -left-[30%] bg-gradient-to-r from-transparent via-blue-500/18 to-transparent"
          style={{ top: "40%", transform: "rotate(-2deg)" }}
        />
        <div
          className="absolute h-[1px] w-[140%] -left-[20%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
          style={{ top: "65%", transform: "rotate(1.5deg)" }}
        />
      </div>

      {/* Giant faded watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-[family-name:var(--font-bebas)] text-[22vw] leading-none text-white/[0.015] whitespace-nowrap tracking-widest">
          PHILOSOPHY
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

        {/* ── Section label ── */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-7 h-px bg-blue-500" />
            <span className="text-blue-400 text-[10px] tracking-[0.5em] font-[family-name:var(--font-inter)] uppercase">
              Philosophy / 企業理念
            </span>
          </div>
        </FadeIn>

        {/* ── Main headline ── */}
        <div ref={headRef} className="mb-24 md:mb-32">

          {/* Decorative opening mark */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="font-[family-name:var(--font-bebas)] text-[7rem] md:text-[10rem] leading-none text-blue-500/12 block -mb-6 select-none"
            aria-hidden="true"
          >
            "
          </motion.span>

          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: "105%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 1.05, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.8rem,8vw,8rem)] leading-[1.05] text-white"
            >
              運送業界を
            </motion.h2>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: "105%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 1.05, delay: 0.1, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.8rem,8vw,8rem)] leading-[1.05] text-gradient-blue"
            >
              カッコよくする。
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.42, ease }}
            className="flex items-center gap-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-blue-500 to-transparent" />
            <p className="text-white/25 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.42em] uppercase">
              Corporate Philosophy — 合同会社VERTEX
            </p>
          </motion.div>
        </div>

        {/* ── Cards — asymmetric grid ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4"
        >

          {/* ═══ MISSION — dominant left card ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease }}
            whileHover={{
              y: -6,
              boxShadow: "0 0 0 1px rgba(0,102,255,0.5), 0 0 80px rgba(0,60,255,0.22), 0 0 160px rgba(0,40,200,0.1)",
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            className="group relative overflow-hidden rounded-none backdrop-blur-xl
                       bg-gradient-to-br from-blue-950/20 via-blue-900/8 to-transparent
                       border border-blue-500/18
                       p-10 md:p-14 lg:p-16 min-h-[340px] flex flex-col justify-between"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400/60 via-blue-300/30 to-transparent" />
            {/* Right accent bar */}
            <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-blue-400/40 to-transparent" />
            {/* Bottom hover line */}
            <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500/60 via-blue-400/30 to-transparent transition-all duration-700" />
            {/* Inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,80,255,0.07) 0%, transparent 70%)" }}
            />

            {/* Watermark number */}
            <span
              className="absolute bottom-6 right-8 font-[family-name:var(--font-bebas)] leading-none text-white/[0.04] select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem,12vw,10rem)" }}
              aria-hidden="true"
            >
              01
            </span>

            <div>
              {/* Label row */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.55em] text-blue-400/75 uppercase">
                  MISSION
                </span>
                <span className="flex-1 h-px bg-blue-500/15" />
                <span className="font-[family-name:var(--font-noto)] text-[10px] text-white/20 tracking-[0.2em]">
                  使命
                </span>
              </div>

              {/* Body */}
              <p className="font-[family-name:var(--font-noto)] font-black text-[clamp(1.25rem,2.8vw,2.1rem)] text-white leading-[1.75] mb-3">
                常識にとらわれない
                <br />
                行動力と責任感で、
              </p>
              <p className="font-[family-name:var(--font-noto)] text-white/45 text-base md:text-lg leading-[1.9]">
                物流業界に新しい価値を創り出す。
              </p>
            </div>

            {/* Bottom tag */}
            <div className="flex items-center gap-2 mt-10">
              <span className="w-5 h-px bg-blue-500/50" />
              <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.4em] text-blue-400/40 uppercase">
                合同会社VERTEX
              </span>
            </div>
          </motion.div>

          {/* ═══ Right column — stacked VISION + VALUE ═══ */}
          <div className="flex flex-col gap-4">

            {/* ── VISION ── */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.14, ease }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 0 1px rgba(0,120,255,0.55), 0 0 60px rgba(0,100,255,0.25)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative overflow-hidden backdrop-blur-xl flex-1
                         bg-gradient-to-br from-blue-700/18 via-blue-900/10 to-transparent
                         border border-blue-400/28
                         p-8 md:p-10"
            >
              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-[70px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(0,102,255,0.25)" }}
              />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400/70 via-blue-300/40 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-blue-400/60 to-transparent transition-all duration-700" />

              {/* Watermark */}
              <span
                className="absolute bottom-3 right-5 font-[family-name:var(--font-bebas)] text-[5rem] leading-none text-white/[0.045] select-none pointer-events-none"
                aria-hidden="true"
              >
                02
              </span>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.55em] text-blue-300/85 uppercase">
                  VISION
                </span>
                <span className="flex-1 h-px bg-blue-400/20" />
                <span className="font-[family-name:var(--font-noto)] text-[10px] text-white/20 tracking-[0.2em]">
                  ビジョン
                </span>
              </div>

              <p className="font-[family-name:var(--font-noto)] font-bold text-white text-lg md:text-xl leading-[1.85]">
                多摩エリアNo.1から、
              </p>
              <p className="font-[family-name:var(--font-noto)] font-bold text-white/50 text-lg md:text-xl leading-[1.85]">
                全国で必要とされる
                <br />
                物流会社へ。
              </p>
            </motion.div>

            {/* ── VALUE ── */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.26, ease }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 0 1px rgba(0,102,255,0.35), 0 0 40px rgba(0,60,255,0.14)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-blue-950/14 via-blue-900/6 to-transparent
                         border border-blue-500/14
                         p-8 md:p-10"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-700" />

              <span
                className="absolute bottom-3 right-5 font-[family-name:var(--font-bebas)] text-[5rem] leading-none text-white/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                03
              </span>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.55em] text-blue-400/60 uppercase">
                  VALUE
                </span>
                <span className="flex-1 h-px bg-blue-500/12" />
                <span className="font-[family-name:var(--font-noto)] text-[10px] text-white/20 tracking-[0.2em]">
                  行動指針
                </span>
              </div>

              <ul className="divide-y divide-white/[0.055]">
                {values.map((v, i) => (
                  <motion.li
                    key={v.text}
                    initial={{ opacity: 0, x: -12 }}
                    animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.32 + i * 0.08, ease }}
                    className="flex items-center gap-4 py-3 group/item"
                  >
                    <span className="font-[family-name:var(--font-bebas)] text-blue-500/45 text-sm tabular-nums w-6 flex-shrink-0 group-hover/item:text-blue-400/70 transition-colors duration-200">
                      {v.num}
                    </span>
                    <span className="text-white/50 text-sm font-[family-name:var(--font-noto)] group-hover/item:text-white/75 transition-colors duration-200">
                      {v.text}
                    </span>
                    <span className="ml-auto w-3 h-px bg-blue-500/0 group-hover/item:bg-blue-500/40 transition-all duration-300" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
