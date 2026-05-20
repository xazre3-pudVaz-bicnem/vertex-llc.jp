"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "VERTEX".split("");
const ease = [0.16, 1, 0.3, 1] as const;
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!";
const LABEL_TEXT = "LIGHT CARGO / LOGISTICS";

function useScramble(text: string): string {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "/" || char === ".") return char;
            if (i < Math.floor(iteration)) return text[i];
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );
      iteration += 0.45;
      if (Math.floor(iteration) >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 32);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return display;
}

export default function LoadingScreen() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "done" | "exit">("counting");
  const rafRef = useRef<number | null>(null);
  const label = useScramble(LABEL_TEXT);

  useEffect(() => {
    const DURATION = 2100;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase("done");
        setTimeout(() => setPhase("exit"), 380);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease }}
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Film noise */}
          <div className="noise-overlay" />

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

          {/* Corner accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/6 to-transparent" />

          {/* Center content */}
          <div className="relative flex flex-col items-center">

            {/* Small label — scramble on mount */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease }}
                style={{ transformOrigin: "right" }}
                className="block w-6 h-px bg-blue-500/60"
              />
              <span className="text-[9px] tracking-[0.5em] text-white/22 font-[family-name:var(--font-inter)]">
                {label}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease }}
                style={{ transformOrigin: "left" }}
                className="block w-6 h-px bg-blue-500/60"
              />
            </motion.div>

            {/* VERTEX — letters slide up one by one */}
            <div className="relative mb-10">
              <h1 className="flex leading-none" aria-label="VERTEX">
                {LETTERS.map((letter, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + i * 0.06,
                        ease,
                      }}
                      className="inline-block font-[family-name:var(--font-bebas)] text-[clamp(4rem,14vw,10rem)] leading-[0.88] tracking-[0.05em] text-white"
                    >
                      {letter}
                    </motion.span>
                  </div>
                ))}
              </h1>

              {/* Glitch overlay — positioned over the h1 */}
              <div
                className="glitch-wrap absolute inset-0 pointer-events-none overflow-hidden"
                data-text="VERTEX"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(4rem,14vw,10rem)",
                  letterSpacing: "0.05em",
                  lineHeight: "0.88",
                  color: "transparent",
                }}
              >
                VERTEX
              </div>
            </div>

            {/* Progress area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="w-64 md:w-80 flex items-center gap-4"
            >
              {/* Bar */}
              <div className="flex-1 h-px bg-white/[0.08] relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 transition-none"
                  style={{ width: `${count}%` }}
                />
                {/* Shimmer on the bar */}
                <div
                  className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
                  style={{
                    left: `${count - 4}%`,
                    opacity: phase === "counting" ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              {/* Percentage */}
              <span className="font-[family-name:var(--font-bebas)] text-xl text-white/45 tabular-nums w-12 text-right">
                {count}%
              </span>
            </motion.div>
          </div>

          {/* Bottom signature */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-8 text-[9px] tracking-[0.45em] text-white/[0.1] font-[family-name:var(--font-inter)] uppercase"
          >
            合同会社 VERTEX
          </motion.p>

          {/* Done flash — blue line sweep */}
          {phase === "done" && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.38, ease }}
              style={{ transformOrigin: "left" }}
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-500"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
