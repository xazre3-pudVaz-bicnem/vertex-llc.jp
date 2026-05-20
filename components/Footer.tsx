"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const links = {
  会社情報: [
    { label: "会社概要",     href: "/about" },
    { label: "サービス",     href: "/service" },
    { label: "強み",         href: "/about#strength" },
  ],
  採用: [
    { label: "採用情報",     href: "/recruit" },
    { label: "募集要項",     href: "/recruit#job-info" },
    { label: "よくある質問", href: "/recruit#faq" },
  ],
  お問い合わせ: [
    { label: "配送相談",       href: "/contact" },
    { label: "ドライバー応募", href: "/recruit#apply" },
    { label: "ブログ",         href: "/blog" },
  ],
};

export default function Footer() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020202] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div
        className="absolute top-0 left-0 w-[400px] h-[200px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(0,50,255,0.04)" }}
      />

      {/* ── CTA section ─────────────────────────────────────── */}
      <div
        ref={ctaRef}
        className="relative border-b border-white/[0.05] py-36 md:py-52 overflow-hidden"
      >
        {/* CTA background orb */}
        <div
          className="absolute cta-orb-pulse pointer-events-none"
          style={{
            top: "50%",
            left: "30%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,60,255,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,120,255,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Giant watermark */}
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden select-none">
          <span className="font-[family-name:var(--font-bebas)] text-[24vw] leading-none text-white/[0.013] whitespace-nowrap -ml-2">
            CONTACT
          </span>
        </div>

        {/* Horizontal rule top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={ctaInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease }}
          style={{ transformOrigin: "left" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent"
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
            className="flex items-center gap-3 mb-10"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={ctaInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              style={{ transformOrigin: "left" }}
              className="block w-7 h-px bg-blue-500"
            />
            <span className="text-blue-400 text-[10px] tracking-[0.42em] font-[family-name:var(--font-inter)] uppercase">
              Get In Touch
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="space-y-3 mb-6 overflow-hidden">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={ctaInView ? { y: 0 } : {}}
                transition={{ duration: 0.95, delay: 0.08, ease }}
                className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.4rem,6.5vw,6.5rem)] leading-[1.1] text-white"
              >
                配送について、
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={ctaInView ? { y: 0 } : {}}
                transition={{ duration: 0.95, delay: 0.16, ease }}
                className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.4rem,6.5vw,6.5rem)] leading-[1.1] text-white/45"
              >
                まずはご相談ください。
              </motion.h2>
            </div>
          </div>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="text-white/28 text-sm font-[family-name:var(--font-noto)] leading-[2.1] max-w-md mb-14"
          >
            軽貨物からチャーター便まで、柔軟に対応いたします。
            <br />
            お気軽にお問い合わせください。
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-5 bg-blue-600 hover:bg-blue-500 px-10 py-4 text-white transition-all duration-300 btn-shimmer font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em] group"
            >
              お問い合わせ
              <span className="w-5 h-px bg-white/60 group-hover:w-8 transition-all duration-300" />
            </Link>
            <Link
              href="/recruit"
              className="inline-flex items-center gap-5 border border-white/12 hover:border-white/30 px-10 py-4 text-white/50 hover:text-white/80 transition-all duration-300 font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em] group"
            >
              ドライバー募集
              <span className="w-5 h-px bg-current opacity-50 group-hover:w-8 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Footer links ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 block mb-4"
            >
              VERTEX
            </Link>
            <p className="text-white/25 text-xs font-[family-name:var(--font-noto)] leading-[2] max-w-[200px]">
              軽貨物配送を中心に企業物流を支える、
              信頼のパートナー。
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-4 h-px bg-blue-500" />
              <span className="text-blue-400/60 text-[9px] tracking-[0.3em] font-[family-name:var(--font-inter)]">
                DELIVERING TRUST
              </span>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/20 text-[9px] tracking-[0.3em] font-[family-name:var(--font-inter)] uppercase mb-5">
                {group}
              </p>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/35 hover:text-white/70 text-xs font-[family-name:var(--font-noto)] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-[10px] font-[family-name:var(--font-inter)] tracking-widest">
            © 2024 合同会社VERTEX. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "TOP",     href: "/" },
              { label: "PRIVACY", href: "/privacy" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors font-[family-name:var(--font-inter)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
