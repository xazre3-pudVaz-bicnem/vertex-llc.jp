"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/utils/motion";

const stats = [
  { num: "24H", label: "対応可能" },
  { num: "365", label: "稼働体制" },
  { num: "100%", label: "責任配送" },
];

export default function AboutSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 md:py-48 grid-bg overflow-hidden">
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(0,70,255,0.05)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left ── */}
          <div ref={leftRef} className="relative">
            {/* Background watermark */}
            <span className="absolute -top-10 -left-4 font-[family-name:var(--font-bebas)] text-[9rem] md:text-[13rem] text-white/[0.022] leading-none select-none pointer-events-none">
              ABOUT
            </span>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={leftInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                style={{ transformOrigin: "left" }}
                className="block w-8 h-px bg-blue-500"
              />
              <span className="text-blue-400 text-[10px] tracking-[0.35em] font-[family-name:var(--font-inter)] uppercase">
                About Us
              </span>
            </motion.div>

            {/* Heading line reveal */}
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: "110%" }}
                animate={leftInView ? { y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease }}
                className="inline-block font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-white"
              >
                ABOUT
              </motion.span>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.span
                initial={{ y: "110%" }}
                animate={leftInView ? { y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.2, ease }}
                className="inline-block font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] gradient-text-blue"
              >
                VERTEX
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3, ease }}
              className="text-white/65 font-[family-name:var(--font-noto)] text-base leading-[2] mb-5"
            >
              合同会社VERTEXは、軽貨物配送を通じて企業と地域の物流を支える会社です。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.42, ease }}
              className="text-white/35 font-[family-name:var(--font-noto)] text-sm leading-[2]"
            >
              ただ荷物を運ぶだけではなく、配送品質・対応力・信頼関係を大切にし、
              継続して選ばれる配送体制を目指しています。
            </motion.p>
          </div>

          {/* ── Right ── */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease }}
            className="relative"
          >
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center relative overflow-hidden group hover:border-blue-500/20 transition-colors duration-500">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="relative z-10 text-center px-8">
                <p className="font-[family-name:var(--font-bebas)] text-6xl text-white/10 tracking-[0.2em] group-hover:text-white/15 transition-colors duration-500">
                  IMAGE
                </p>
                <p className="text-white/15 text-[10px] mt-2 font-[family-name:var(--font-inter)] tracking-[0.3em]">
                  PLACEHOLDER
                </p>
              </div>
              {/* Corner marks */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-blue-500/30" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-blue-500/30" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-white/8" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-white/8" />
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 0 1px rgba(0,102,255,0.3), 0 8px 24px rgba(0,102,255,0.12)",
                    transition: { duration: 0.25 },
                  }}
                  className="border border-white/[0.08] bg-white/[0.02] p-4 text-center cursor-default"
                >
                  <p className="font-[family-name:var(--font-bebas)] text-3xl text-blue-400 tracking-wider">
                    {stat.num}
                  </p>
                  <p className="text-white/35 text-[10px] font-[family-name:var(--font-noto)] mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
