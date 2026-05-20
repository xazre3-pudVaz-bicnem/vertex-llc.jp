"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "24H",  label: "即日対応" },
  { value: "365",  label: "年中稼働" },
  { value: "100%", label: "責任配送" },
];

export default function StatementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[#030306]">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% 50%, rgba(0,60,200,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden select-none">
        <span className="font-[family-name:var(--font-bebas)] text-[28vw] leading-none text-white/[0.018] whitespace-nowrap pl-4">
          TRUST
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20 items-end">

          {/* ── Left: Statement ── */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease }}
              className="flex items-center gap-3 mb-10"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.1, ease }}
                style={{ transformOrigin: "left" }}
                className="block w-7 h-px bg-blue-500"
              />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Our Mission
              </span>
            </motion.div>

            {/* Statement lines */}
            <div className="space-y-2 mb-10">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.08, ease }}
                  className="font-[family-name:var(--font-noto)] font-black text-[clamp(1.8rem,4.5vw,4rem)] leading-[1.2] text-white/50"
                >
                  ただ運ぶだけではない。
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.18, ease }}
                  className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.1] text-white"
                >
                  信頼を、届ける。
                </motion.p>
              </div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              style={{ transformOrigin: "left" }}
              className="h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mb-8"
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.38, ease }}
              className="text-white/38 text-sm md:text-base font-[family-name:var(--font-noto)] leading-[2.1] max-w-xl"
            >
              合同会社VERTEXは、一件一件の配送に向き合い、
              クライアントとの長期的なパートナーシップを大切にしています。
              スピードと誠実さを両輪に、物流の現場を支え続けます。
            </motion.p>
          </div>

          {/* ── Right: Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="flex flex-row lg:flex-col gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease }}
                whileHover={{
                  x: 6,
                  boxShadow: "0 0 0 1px rgba(0,102,255,0.35), 4px 0 20px rgba(0,102,255,0.12)",
                  transition: { duration: 0.22 },
                }}
                className="flex-1 lg:flex-none border border-white/[0.07] bg-white/[0.018] p-6 flex items-center gap-5 cursor-default"
              >
                <span className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl text-blue-400 leading-none tracking-wider">
                  {s.value}
                </span>
                <span className="text-white/40 text-xs font-[family-name:var(--font-noto)] tracking-wide">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
