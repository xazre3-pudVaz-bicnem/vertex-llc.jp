"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlowButton from "@/components/ui/GlowButton";
import TiltCard from "@/components/ui/TiltCard";
import FadeIn from "@/components/FadeIn";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  { num: "01", title: "未経験歓迎", english: "WELCOME", body: "ドライバー経験がなくても大丈夫。研修サポートを通じて一から丁寧に指導します。", icon: "★" },
  { num: "02", title: "業務委託契約", english: "FLEXIBLE", body: "フリーランス感覚で自由度の高い働き方を実現。自分のペースでキャリアを積めます。", icon: "◇" },
  { num: "03", title: "頑張りが収入に直結", english: "INCOME", body: "走った分だけ報酬が増える仕組み。努力が正直に反映されます。", icon: "↑" },
  { num: "04", title: "柔軟な働き方", english: "LIFESTYLE", body: "勤務時間や休日も相談可能。ライフスタイルに合わせた調整ができます。", icon: "⊕" },
];

const jobData = [
  { label: "募集職種", value: "軽貨物ドライバー" },
  { label: "雇用形態", value: "業務委託" },
  { label: "仕事内容", value: "軽貨物配送、企業配送、スポット配送など" },
  { label: "応募資格", value: "普通自動車免許（AT限定可）" },
  { label: "勤務地",   value: "あとで入力" },
  { label: "報酬",     value: "あとで入力" },
  { label: "勤務時間", value: "案件により異なる" },
  { label: "休日",     value: "案件により異なる" },
];

const faq = [
  { q: "未経験でも応募できますか？", a: "はい、未経験歓迎です。丁寧にサポートしますのでご安心ください。" },
  { q: "車両は必要ですか？",   a: "車両は現在ご自身でご用意いただく必要があります。詳細はお問い合わせください。" },
  { q: "稼働日・時間は自由ですか？", a: "基本的に相談に応じます。案件によって異なりますのでご相談ください。" },
  { q: "報酬の支払いサイクルは？", a: "詳細はお問い合わせください。あとで入力。" },
];

const applySteps = [
  { num: "01", title: "LINEまたはメールで応募", body: "お問い合わせページからご連絡ください。" },
  { num: "02", title: "面談（オンライン可）",   body: "簡単なヒアリングを行います。30分程度です。" },
  { num: "03", title: "契約・稼働スタート",     body: "最短即日から稼働開始できます。" },
];

export default function RecruitLP() {
  const heroRef  = useRef<HTMLElement>(null);
  const cardRef  = useRef(null);
  const tableRef = useRef(null);
  const faqRef   = useRef(null);
  const cardInView  = useInView(cardRef,  { once: true, margin: "-60px" });
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });
  const faqInView   = useInView(faqRef,   { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY   = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOp  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── Recruit Hero ── */}
      <section
        ref={heroRef}
        id="recruit-hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-black"
      >
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 100% 80% at 70% 30%, rgba(0,50,220,0.10) 0%, transparent 65%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none orb-float"
          style={{ background: "rgba(0,60,200,0.09)" }}
        />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span className="font-[family-name:var(--font-bebas)] text-[34vw] leading-none text-white/[0.012] whitespace-nowrap">
            JOIN VERTEX
          </span>
        </div>

        {/* Accent lines */}
        <div className="absolute top-0 left-[22%] w-px h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/7 to-transparent pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOp }}
          className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-16 pt-32 pb-24"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.08, ease }}
              style={{ transformOrigin: "left" }}
              className="block w-7 h-px bg-blue-500"
            />
            <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
              Join Our Team
            </span>
          </motion.div>

          {/* RECRUIT heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,14vw,13rem)] leading-[0.88] text-white"
            >
              RECRUIT
            </motion.h1>
          </div>

          {/* Tagline */}
          <div className="mb-3">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.88, delay: 0.15, ease }}
                className="font-[family-name:var(--font-noto)] font-black text-[clamp(1.6rem,4vw,3.5rem)] leading-[1.2] text-white/40"
              >
                走った分だけ、
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.88, delay: 0.26, ease }}
                className="font-[family-name:var(--font-noto)] font-black text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[1.1]"
              >
                <span className="text-gradient-blue">未来が変わる。</span>
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, delay: 0.38, ease }}
            style={{ transformOrigin: "left" }}
            className="h-px w-56 bg-gradient-to-r from-blue-500 to-transparent mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease }}
            className="text-white/35 text-sm md:text-base font-[family-name:var(--font-noto)] leading-[2.1] max-w-lg mb-10"
          >
            合同会社VERTEXでは、共に成長できる軽貨物ドライバーを募集しています。
            未経験から挑戦したい方、しっかり稼ぎたい方、自由度の高い働き方を目指したい方を歓迎します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="flex flex-wrap gap-4"
          >
            <GlowButton href="#apply" variant="primary" size="lg">
              今すぐ応募する
            </GlowButton>
            <GlowButton href="#job-info" variant="outline" size="lg">
              募集要項を見る
            </GlowButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
        >
          <span className="text-white/18 text-[9px] tracking-[0.45em] font-[family-name:var(--font-inter)]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Benefit cards ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-[#020204]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Why Join Us
              </span>
            </div>
            <div className="overflow-hidden mb-14">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                BENEFITS
              </h2>
            </div>
          </FadeIn>

          <div ref={cardRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
            {benefits.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 36 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <TiltCard
                  className="card-shimmer group border border-white/[0.07] bg-white/[0.02] p-7 relative overflow-hidden cursor-default h-full"
                  intensity={6}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/55 transition-all duration-500" />
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-[family-name:var(--font-bebas)] text-4xl text-white/[0.06] leading-none">
                      {b.num}
                    </span>
                    <span className="text-blue-500/40 text-lg group-hover:text-blue-400/70 transition-colors duration-300">
                      {b.icon}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-bebas)] text-[9px] tracking-[0.28em] text-white/18 block mb-1.5">
                    {b.english}
                  </span>
                  <h4 className="font-[family-name:var(--font-noto)] font-bold text-base text-white mb-3 leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-white/32 text-xs font-[family-name:var(--font-noto)] leading-[1.95]">
                    {b.body}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/45 to-transparent transition-all duration-500" />
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job info table ── */}
      <section id="job-info" className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                Job Details
              </span>
            </div>
            <div className="overflow-hidden mb-14">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                JOB INFO
              </h2>
            </div>
          </FadeIn>

          <motion.div
            ref={tableRef}
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="border border-white/[0.08] max-w-3xl"
          >
            {jobData.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[200px_1fr] border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="px-6 py-5 bg-white/[0.025] border-r border-white/[0.06]">
                  <span className="text-white/45 text-sm font-[family-name:var(--font-noto)] font-medium whitespace-nowrap">
                    {row.label}
                  </span>
                </div>
                <div className="px-6 py-5">
                  <span className={`text-sm font-[family-name:var(--font-noto)] ${row.value === "あとで入力" ? "text-white/20 italic" : "text-white/65"}`}>
                    {row.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Apply steps ── */}
      <section id="apply" className="relative py-24 md:py-36 overflow-hidden bg-[#020204]">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                How To Apply
              </span>
            </div>
            <div className="overflow-hidden mb-14">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                APPLY FLOW
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] max-w-4xl mb-16">
            {applySteps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.12}>
                <div className="bg-[#020204] p-8 group hover:bg-white/[0.02] transition-colors cursor-default">
                  <span className="font-[family-name:var(--font-bebas)] text-4xl text-blue-500/18 group-hover:text-blue-500/30 transition-colors block mb-4 leading-none">
                    {s.num}
                  </span>
                  <h4 className="font-[family-name:var(--font-noto)] font-bold text-white text-base mb-2">
                    {s.title}
                  </h4>
                  <p className="text-white/35 text-xs font-[family-name:var(--font-noto)] leading-[1.9]">
                    {s.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <GlowButton href="/contact" variant="primary" size="lg">
                応募する・相談する
              </GlowButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative py-24 md:py-36 overflow-hidden bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-blue-500" />
              <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
                FAQ
              </span>
            </div>
            <div className="overflow-hidden mb-14">
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                よくある質問
              </h2>
            </div>
          </FadeIn>

          <div
            ref={faqRef}
            className="space-y-0 max-w-3xl"
          >
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={faqInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="border-t border-white/[0.06] last:border-b py-7 group hover:bg-white/[0.015] transition-colors px-1 cursor-default"
              >
                <p className="font-[family-name:var(--font-noto)] font-bold text-white/85 text-sm mb-3 flex items-start gap-3">
                  <span className="text-blue-500 text-[10px] font-[family-name:var(--font-bebas)] tracking-widest shrink-0 mt-0.5">Q.</span>
                  {item.q}
                </p>
                <p className="font-[family-name:var(--font-noto)] text-white/38 text-sm leading-[1.95] flex items-start gap-3">
                  <span className="text-white/20 text-[10px] font-[family-name:var(--font-bebas)] tracking-widest shrink-0 mt-0.5">A.</span>
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
