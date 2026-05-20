"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";

const ease = [0.16, 1, 0.3, 1] as const;

const companyData = [
  { label: "会社名",   value: "合同会社VERTEX" },
  { label: "所在地",   value: "あとで入力" },
  { label: "代表者",   value: "あとで入力" },
  { label: "設立",     value: "あとで入力" },
  { label: "資本金",   value: "あとで入力" },
  { label: "事業内容", value: "軽貨物配送、企業配送、スポット配送、チャーター便" },
  { label: "Instagram", value: "あとで入力" },
];

const values = [
  {
    num: "01",
    title: "スピード",
    english: "SPEED",
    body: "急なご依頼にも迅速に対応。問い合わせから配送手配まで、無駄のない対応力を誇ります。",
  },
  {
    num: "02",
    title: "信頼",
    english: "TRUST",
    body: "一件一件の配送に向き合い、クライアントとの長期的なパートナーシップを大切にします。",
  },
  {
    num: "03",
    title: "品質",
    english: "QUALITY",
    body: "荷物を安全・確実にお届けすることを最優先。丁寧さとプロ意識を持って臨みます。",
  },
  {
    num: "04",
    title: "柔軟性",
    english: "FLEXIBILITY",
    body: "スポット便からルート便まで多様なニーズに対応。柔軟な体制で最適な物流を実現します。",
  },
];

export default function AboutContent() {
  const valRef = useRef(null);
  const tableRef = useRef(null);
  const valInView = useInView(valRef, { once: true, margin: "-60px" });
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── Values ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Our Values
              </span>
            </div>
            <div className="overflow-hidden mb-14">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                MISSION &amp; VALUES
              </h2>
            </div>
          </FadeIn>

          <div
            ref={valRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 32 }}
                animate={valInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 0 1px rgba(0,102,255,0.35), 0 16px 48px rgba(0,102,255,0.12)",
                  transition: { duration: 0.22 },
                }}
                className="card-shimmer group border border-white/[0.07] bg-white/[0.02] p-7 relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/55 transition-all duration-500" />
                <span className="font-[family-name:var(--font-bebas)] text-5xl text-white/[0.05] leading-none block mb-3">
                  {v.num}
                </span>
                <span className="font-[family-name:var(--font-bebas)] text-[9px] tracking-[0.3em] text-white/20 block mb-1.5">
                  {v.english}
                </span>
                <h3 className="font-[family-name:var(--font-noto)] font-bold text-lg text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-white/32 text-xs font-[family-name:var(--font-noto)] leading-[1.9]">
                  {v.body}
                </p>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company table ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#020204]" />
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(0,50,255,0.05)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div
            ref={tableRef}
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={tableInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-px bg-blue-500" />
                <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                  Corporate Info
                </span>
              </div>
              <div className="overflow-hidden">
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                  COMPANY
                </h2>
              </div>
              <p className="text-white/30 text-sm font-[family-name:var(--font-noto)] leading-[2] mt-6 max-w-xs">
                合同会社VERTEXの基本情報です。
                ご不明な点はお気軽にお問い合わせください。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={tableInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease }}
              className="border border-white/[0.08]"
            >
              {companyData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[180px_1fr] border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.015] transition-colors"
                >
                  <div className="px-6 py-5 bg-white/[0.02] border-r border-white/[0.06]">
                    <span className="text-white/40 text-xs font-[family-name:var(--font-noto)] font-medium whitespace-nowrap">
                      {row.label}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <span
                      className={`text-sm font-[family-name:var(--font-noto)] ${
                        row.value === "あとで入力"
                          ? "text-white/18 italic"
                          : "text-white/65"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
