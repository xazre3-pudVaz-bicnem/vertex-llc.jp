"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/utils/motion";
import GlowButton from "@/components/ui/GlowButton";

const channels = [
  {
    label: "Instagram",
    handle: "あとで入力",
    href: "https://instagram.com/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "LINE",
    handle: "あとで入力",
    href: "https://line.me/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6 2 2.5 5 2.5 8.6c0 3.7 3.3 6.7 8 7.1V18l3-3a9.4 9.4 0 001.3-.4C17.3 13.5 19.5 11.2 19.5 8.6 19.5 5 16 2 10 2z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6.5 9h7M6.5 11.5h4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "あとで入力",
    href: "mailto:あとで入力",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const topRef  = useRef(null);
  const cardRef = useRef(null);
  const topInView  = useInView(topRef,  { once: true, margin: "-80px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="relative py-40 md:py-64 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020204]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none orb-float"
        style={{ background: "rgba(0,60,255,0.06)" }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-[family-name:var(--font-bebas)] text-[24vw] leading-none text-white/[0.016] whitespace-nowrap">
          CONTACT
        </span>
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-blue-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/6 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

        {/* ── Header ── */}
        <div ref={topRef} className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={topInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={topInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.08, ease }}
              style={{ transformOrigin: "right" }}
              className="block w-7 h-px bg-blue-500"
            />
            <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
              Get In Touch
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={topInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.08, ease }}
              style={{ transformOrigin: "left" }}
              className="block w-7 h-px bg-blue-500"
            />
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "110%" }}
              animate={topInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,12vw,10rem)] leading-[0.88] text-white"
            >
              CONTACT
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={topInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.28, ease }}
            className="text-white/35 font-[family-name:var(--font-noto)] text-sm md:text-base leading-[2.2] max-w-md mx-auto"
          >
            配送のご相談、業務委託のご相談、ドライバー応募など、
            <br className="hidden sm:block" />お気軽にお問い合わせください。
          </motion.p>
        </div>

        {/* ── Dual track cards ── */}
        <div ref={cardRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-14">

          {/* Card 1 — Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease }}
            whileHover={{
              y: -6,
              boxShadow: "0 0 0 1px rgba(0,102,255,0.45), 0 20px 60px rgba(0,102,255,0.18)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group card-shimmer relative border border-white/[0.07] bg-white/[0.025] p-8 md:p-10 overflow-hidden cursor-default"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />

            {/* Icon */}
            <div className="w-12 h-12 rounded-sm border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-6 text-white/30 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors duration-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 20V8l8-4 8 4v12" stroke="currentColor" strokeWidth="1.4"/>
                <rect x="9" y="12" width="6" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M9 12v8" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>

            <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.3em] text-white/22 group-hover:text-blue-400/60 transition-colors duration-300 block mb-2">
              CORPORATE
            </span>
            <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl md:text-2xl text-white mb-3 leading-tight">
              配送のご相談
            </h3>
            <p className="text-white/35 text-sm font-[family-name:var(--font-noto)] leading-[1.95] mb-8">
              軽貨物配送・企業専属便・スポット便など、配送に関するご依頼・お見積りはこちらからどうぞ。
              まずはお気軽にご相談ください。
            </p>

            <GlowButton href="mailto:あとで入力" variant="primary" size="md">
              配送を相談する
            </GlowButton>
          </motion.div>

          {/* Card 2 — Recruit */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            whileHover={{
              y: -6,
              boxShadow: "0 0 0 1px rgba(0,102,255,0.45), 0 20px 60px rgba(0,102,255,0.18)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group card-shimmer relative border border-white/[0.07] bg-white/[0.025] p-8 md:p-10 overflow-hidden cursor-default"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />

            {/* Icon */}
            <div className="w-12 h-12 rounded-sm border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-6 text-white/30 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors duration-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>

            <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.3em] text-white/22 group-hover:text-blue-400/60 transition-colors duration-300 block mb-2">
              RECRUIT
            </span>
            <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl md:text-2xl text-white mb-3 leading-tight">
              ドライバー応募
            </h3>
            <p className="text-white/35 text-sm font-[family-name:var(--font-noto)] leading-[1.95] mb-8">
              軽貨物ドライバーとして一緒に働きませんか。未経験歓迎・業務委託契約。
              まずは気軽にメッセージをください。
            </p>

            <GlowButton href="#job-info" variant="outline" size="md">
              募集内容を確認する
            </GlowButton>
          </motion.div>
        </div>

        {/* ── Channel links ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto"
        >
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.38 + i * 0.08, ease }}
              whileHover={{
                y: -3,
                boxShadow: "0 0 0 1px rgba(0,102,255,0.3)",
                transition: { duration: 0.2 },
              }}
              className="flex items-center gap-2.5 px-5 py-3 border border-white/[0.07] bg-white/[0.02] text-white/35 hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-300 text-xs font-[family-name:var(--font-inter)] tracking-[0.15em]"
            >
              {ch.icon}
              <span>{ch.label}</span>
              <span className="text-white/18 text-[10px]">{ch.handle}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-center mt-16 text-white/[0.12] text-[10px] font-[family-name:var(--font-inter)] tracking-[0.35em] uppercase"
        >
          合同会社VERTEX — Light Cargo / Corporate Logistics
        </motion.p>
      </div>
    </section>
  );
}
