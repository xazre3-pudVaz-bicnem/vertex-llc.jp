"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/utils/motion";

const strengths = [
  {
    number: "01",
    title: "スピーディーな対応",
    english: "SPEEDY RESPONSE",
    description:
      "急なご依頼にも迅速に対応します。問い合わせから配送手配まで、無駄のないスピードで動きます。",
  },
  {
    number: "02",
    title: "丁寧な配送品質",
    english: "QUALITY DELIVERY",
    description:
      "荷物を安全・確実にお届けすることを最優先。一件一件の配送に責任とプライドを持って取り組みます。",
  },
  {
    number: "03",
    title: "柔軟な配送体制",
    english: "FLEXIBLE SYSTEM",
    description:
      "スポット便からルート便、チャーターまで多様な案件に対応。お客様のニーズに合わせた配送体制を整えています。",
  },
  {
    number: "04",
    title: "ドライバーとの連携力",
    english: "TEAMWORK",
    description:
      "信頼できるドライバーとの強固なネットワーク。チームとしての連携により、安定した配送サービスを実現します。",
  },
];

export default function StrengthSection() {
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const listInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <section
      id="strength"
      className="relative py-32 md:py-48 bg-[#030303] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div
        className="absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full blur-[90px] pointer-events-none"
        style={{ background: "rgba(0,80,255,0.05)" }}
      />
      {/* Left accent line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              style={{ transformOrigin: "left" }}
              className="block w-8 h-px bg-blue-500"
            />
            <span className="text-blue-400 text-[10px] tracking-[0.35em] font-[family-name:var(--font-inter)] uppercase">
              Why Choose Us
            </span>
          </motion.div>

          <div className="overflow-hidden mb-20">
            <motion.h2
              initial={{ y: "110%" }}
              animate={headingInView ? { y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white"
            >
              OUR STRENGTH
            </motion.h2>
          </div>
        </div>

        {/* List */}
        <div ref={listRef} className="space-y-0">
          {strengths.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -40 }}
              animate={listInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.13, ease }}
              className="group border-t border-white/[0.06] last:border-b hover:bg-white/[0.018] transition-colors duration-300 cursor-default"
            >
              <div className="py-8 md:py-10 grid grid-cols-[56px_1fr] md:grid-cols-[110px_1fr_1fr] gap-6 md:gap-10 items-start md:items-center">
                {/* Number */}
                <motion.span
                  animate={{ opacity: [0.05, 0.12, 0.05] }}
                  transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl leading-none group-hover:text-blue-500/20 transition-colors duration-500 select-none"
                  style={{ color: "rgba(255,255,255,0.05)" }}
                >
                  {item.number}
                </motion.span>

                {/* Title block */}
                <div>
                  <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.3em] text-white/20 group-hover:text-blue-400/50 transition-colors duration-300 block mb-1.5">
                    {item.english}
                  </span>
                  <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl md:text-2xl text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="col-span-2 md:col-span-1 text-white/35 text-sm font-[family-name:var(--font-noto)] leading-[2]">
                  {item.description}
                </p>
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={listInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.13 + 0.35, ease }}
                style={{ transformOrigin: "left" }}
                className="h-px bg-gradient-to-r from-blue-500/30 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
