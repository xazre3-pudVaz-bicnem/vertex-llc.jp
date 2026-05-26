"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { areas } from "@/lib/areas";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AreaIndexContent() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── Intro ── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#020204]">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Multi-Area Coverage
              </span>
            </div>
            <p className="text-white/40 text-sm md:text-base font-[family-name:var(--font-noto)] leading-[2.2] max-w-2xl">
              合同会社VERTEXは東京都八王子市を拠点に、多摩地域全30市区町村への軽貨物配送・企業専属配送・スポット配送・チャーター配送に対応しています。エリアを選択して詳細をご確認ください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Area cards grid ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                30 Areas
              </span>
            </div>
            <div className="overflow-hidden mb-12">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                対応エリア一覧
              </h2>
            </div>
          </FadeIn>

          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
          >
            {areas.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
              >
                <Link
                  href={`/area/${area.slug}`}
                  className="group relative flex flex-col justify-between border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 p-5 overflow-hidden cursor-pointer h-full min-h-[120px]"
                >
                  {/* Top accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />

                  <div>
                    <p className="font-[family-name:var(--font-noto)] font-bold text-white/80 group-hover:text-white text-sm leading-tight mb-1.5 transition-colors">
                      {area.name}
                    </p>
                    <p className="text-white/28 text-[10px] font-[family-name:var(--font-noto)] leading-[1.6] group-hover:text-white/45 transition-colors">
                      {area.catchphrase}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-3">
                    <span className="text-blue-500/40 text-[9px] font-[family-name:var(--font-inter)] tracking-widest group-hover:text-blue-400/70 transition-colors">
                      詳細
                    </span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="text-blue-500/30 group-hover:text-blue-400/60 group-hover:translate-x-0.5 transition-all duration-200"
                    >
                      <path
                        d="M2 5h6M5 2l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <FadeIn delay={0.4}>
            <p className="mt-10 text-white/20 text-xs font-[family-name:var(--font-noto)] leading-[2]">
              ※ 上記以外のエリアへの配送もご相談ください。東京都内・神奈川県・埼玉県などへの対応も可能な場合があります。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#020204]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Contact
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-noto)] font-black text-[clamp(1.6rem,4vw,3rem)] text-white mb-4 leading-tight">
              お気軽にご相談ください
            </h2>
            <p className="text-white/35 text-sm font-[family-name:var(--font-noto)] leading-[2] max-w-lg mb-8">
              対応エリア外でもご相談次第で対応できる場合があります。まずはLINEまたはお問い合わせフォームからご連絡ください。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-white transition-all duration-300 btn-shimmer font-[family-name:var(--font-bebas)] text-lg tracking-[0.2em] group"
              >
                配送を相談する
                <span className="w-4 h-px bg-white/60 group-hover:w-6 transition-all duration-300" />
              </Link>
              <a
                href="https://lin.ee/oiG5UJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-green-500/30 hover:border-green-400/60 px-8 py-3.5 text-white/55 hover:text-white/85 transition-all duration-300 font-[family-name:var(--font-bebas)] text-lg tracking-[0.2em]"
              >
                LINEで相談する
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
