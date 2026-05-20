"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/utils/motion";

interface SectionTitleProps {
  label: string;
  heading: string;
  align?: "left" | "center";
  accentWord?: string;
  className?: string;
}

export default function SectionTitle({
  label,
  heading,
  align = "left",
  accentWord,
  className = "",
}: SectionTitleProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const alignCls = align === "center" ? "items-center text-center" : "items-start";

  let displayHeading: React.ReactNode = heading;
  if (accentWord) {
    const parts = heading.split(accentWord);
    displayHeading = (
      <>
        {parts[0]}
        <span className="text-gradient-blue">{accentWord}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div ref={ref} className={`flex flex-col gap-4 ${alignCls} ${className}`}>
      {/* Label row */}
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease }}
        className="flex items-center gap-3"
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.08, ease }}
          style={{ transformOrigin: "left" }}
          className="block w-7 h-px bg-blue-500"
        />
        <span className="text-blue-400 text-[10px] tracking-[0.38em] font-[family-name:var(--font-inter)] uppercase">
          {label}
        </span>
      </motion.div>

      {/* Heading — mask reveal */}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "110%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="font-[family-name:var(--font-bebas)] text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.88] text-white"
        >
          {displayHeading}
        </motion.h2>
      </div>
    </div>
  );
}
