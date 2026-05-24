"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useCallback, useRef, useState, useEffect } from "react";
import GlowButton from "@/components/ui/GlowButton";
import HeroParticles from "@/components/HeroParticles";

const LETTERS = "VERTEX".split("");
const ease = [0.16, 1, 0.3, 1] as const;

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./";
const SUBTITLE_TEXT = "DELIVERING TRUST.   MOVING THE FUTURE.";

function useScramble(text: string, active: boolean): string {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!active) return;
    let iter = 0;
    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < Math.floor(iter)) return text[i];
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );
      iter += 0.55;
      if (Math.floor(iter) >= text.length) {
        clearInterval(id);
        setDisplay(text);
      }
    }, 28);
    return () => clearInterval(id);
  }, [active, text]);
  return display;
}

/* Letters alternating solid / outline */
const OUTLINE_IDX = new Set([1, 3]); // E, T are outline

const BEAMS = [
  { left: "8%",  dur: 17, delay: 0,   op: 0.09 },
  { left: "28%", dur: 22, delay: 5,   op: 0.055 },
  { left: "55%", dur: 14, delay: 10,  op: 0.07 },
  { left: "78%", dur: 19, delay: 3.5, op: 0.048 },
];

const STREAKS = [
  { top: "14%", dur: 3.2, delay: 0.5,  width: 80,  op: 0.07 },
  { top: "31%", dur: 2.6, delay: 2.1,  width: 120, op: 0.055 },
  { top: "49%", dur: 4.1, delay: 0.8,  width: 60,  op: 0.06 },
  { top: "63%", dur: 2.9, delay: 3.4,  width: 100, op: 0.08 },
  { top: "77%", dur: 3.7, delay: 1.2,  width: 90,  op: 0.05 },
  { top: "88%", dur: 2.3, delay: 4.6,  width: 140, op: 0.065 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const subtitle = useScramble(SUBTITLE_TEXT, revealed);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1600);
    return () => clearTimeout(t);
  }, []);

  /* ── Scroll parallax ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY  = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  /* ── Mouse parallax ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 38, damping: 26 });
  const springY = useSpring(rawY, { stiffness: 38, damping: 26 });

  const orb1X = useTransform(springX, (x) => x * -0.6);
  const orb1Y = useTransform(springY, (y) => y * -0.6);
  const orb2X = useTransform(springX, (x) => x * 0.45);
  const orb2Y = useTransform(springY, (y) => y * 0.45);
  const orb3X = useTransform(springX, (x) => x * -0.25);
  const orb3Y = useTransform(springY, (y) => y * 0.35);
  const gridX = useTransform(springX, (x) => x * 0.08);
  const gridY = useTransform(springY, (y) => y * 0.08);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      rawX.set((e.clientX - r.width / 2) / 20);
      rawY.set((e.clientY - r.height / 2) / 20);
    },
    [rawX, rawY]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* ── Layer 0: Particles ── */}
      <HeroParticles />

      {/* ── Layer 1: Animated fine grid ── */}
      <motion.div
        className="absolute inset-0 grid-bg-fine pointer-events-none"
        style={{ x: gridX, y: gridY, opacity: 0.6 }}
      />

      {/* ── Layer 2: Diagonal beams ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BEAMS.map((b, i) => (
          <div
            key={i}
            className="beam-line"
            style={{
              left: b.left,
              background: `linear-gradient(to bottom, transparent 0%, rgba(0,102,255,${b.op}) 30%, rgba(0,140,255,${b.op * 1.2}) 50%, rgba(0,102,255,${b.op}) 70%, transparent 100%)`,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Layer 3: Horizontal speed streaks ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STREAKS.map((s, i) => (
          <div
            key={i}
            className="hero-streak absolute"
            style={{
              top: s.top,
              width: `${s.width}px`,
              background: `linear-gradient(90deg, transparent, rgba(0,160,255,${s.op}), rgba(100,200,255,${s.op * 1.5}), rgba(0,160,255,${s.op}), transparent)`,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Layer 4: HUD scan line ── */}
      <div className="hero-scan" />

      {/* ── Layer 5: Mouse-parallax glow orbs ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: orb1X, y: orb1Y, scale: bgScale }}>
        <div
          className="absolute top-[-5%] left-[-5%] w-[900px] h-[900px] rounded-full blur-[200px] orb-float"
          style={{ background: "rgba(0,60,255,0.065)" }}
        />
      </motion.div>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: orb2X, y: orb2Y }}>
        <div
          className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] orb-float-slow"
          style={{ background: "rgba(0,100,255,0.045)" }}
        />
      </motion.div>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: orb3X, y: orb3Y }}>
        <div
          className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,180,255,0.025)" }}
        />
      </motion.div>

      {/* ── Layer 6: Thin vertical accents ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[12%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.055] to-transparent" />
        <div className="absolute top-0 left-[28%] w-px h-full bg-gradient-to-b from-blue-500/[0.08] via-transparent to-transparent" />
      </div>

      {/* ── Layer 7: Edge vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* ── Layer 8: Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-16 pt-32 pb-24"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.25, ease }}
            style={{ transformOrigin: "left" }}
            className="block w-10 h-px bg-blue-500"
          />
          <span className="text-blue-400/80 text-[10px] tracking-[0.45em] font-[family-name:var(--font-inter)] uppercase">
            Light Cargo&nbsp;&nbsp;/&nbsp;&nbsp;Corporate Logistics
          </span>
        </motion.div>

        {/* ── VERTEX ── */}
        <div className="relative mb-0">
          {/* Glow shadow layer */}
          <div
            aria-hidden
            className="absolute left-0 top-0 flex flex-wrap leading-[0.88] pointer-events-none select-none"
            style={{ filter: "blur(28px)", opacity: 0.18 }}
          >
            <span className="font-[family-name:var(--font-bebas)] text-[clamp(6rem,21vw,21rem)] text-blue-400">
              VERTEX
            </span>
          </div>

          <h1
            className="flex flex-wrap mb-0 leading-none"
            aria-label="VERTEX"
          >
            {LETTERS.map((letter, i) => (
              <div key={i} className="overflow-hidden inline-block">
                <motion.span
                  initial={{ y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.32 + i * 0.07, ease }}
                  className="inline-block font-[family-name:var(--font-bebas)] text-[clamp(6rem,21vw,21rem)] leading-[0.88] tracking-[0.02em]"
                  style={
                    OUTLINE_IDX.has(i)
                      ? {
                          WebkitTextStroke: "1.5px rgba(255,255,255,0.55)",
                          color: "transparent",
                        }
                      : { color: "white" }
                  }
                >
                  {letter}
                </motion.span>
              </div>
            ))}
          </h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.9, ease }}
          style={{ transformOrigin: "left" }}
          className="depth-line my-6 max-w-3xl"
        />

        {/* EN sub-copy — scramble reveal */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 1.0, ease }}
            className="font-[family-name:var(--font-bebas)] text-[clamp(0.85rem,2.2vw,1.9rem)] tracking-[0.22em] text-white/20"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* JP tagline */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 1.1, ease }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 1.05 }}
            style={{ transformOrigin: "top" }}
            className="block w-0.5 h-10 bg-blue-500 shrink-0"
          />
          <p className="text-white/60 text-lg md:text-xl font-[family-name:var(--font-noto)] font-light tracking-wide">
            物流の現場に、確かなスピードと信頼を。
          </p>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.22, ease }}
          className="text-white/30 text-sm md:text-[0.9375rem] font-[family-name:var(--font-noto)] font-light max-w-[520px] leading-[2.1] mb-12"
        >
          東京を拠点とする合同会社VERTEXは、ラストワンマイル配送・企業配送・
          スポット配送・チャーター配送まで柔軟に対応する軽貨物物流パートナーです。
          一件一件に責任を持ち、スピードと丁寧さを両立したサービスを提供します。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.38, ease }}
          className="flex flex-wrap gap-4"
        >
          <GlowButton href="/recruit" variant="primary">
            ドライバー募集を見る
          </GlowButton>
          <GlowButton href="/contact" variant="outline">
            配送の相談をする
          </GlowButton>
        </motion.div>

        {/* HUD data points */}
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex items-center gap-8 mt-14"
          >
            {[
              { val: "24H", label: "即日対応" },
              { val: "365", label: "年中稼働" },
              { val: "100%", label: "責任配送" },
            ].map((stat) => (
              <div key={stat.val} className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-bebas)] text-2xl text-blue-400/70 tracking-wider">
                  {stat.val}
                </span>
                <span className="text-white/22 text-[9px] font-[family-name:var(--font-noto)] tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-white/18 text-[9px] tracking-[0.45em] font-[family-name:var(--font-inter)]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>

      {/* ── Corner label ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1.2 }}
        className="absolute top-28 right-8 md:right-14 flex flex-col items-end gap-1 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.45em] text-white/10 font-[family-name:var(--font-inter)]">
          合同会社
        </span>
        <span className="text-[9px] tracking-[0.45em] text-white/10 font-[family-name:var(--font-inter)]">
          VERTEX
        </span>
      </motion.div>
    </section>
  );
}
