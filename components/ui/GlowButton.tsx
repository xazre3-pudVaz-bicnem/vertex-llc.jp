"use client";

import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export default function GlowButton({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: GlowButtonProps) {
  const px = size === "lg" ? "px-10 py-5" : size === "sm" ? "px-6 py-3" : "px-8 py-4";
  const textSize = size === "sm" ? "text-[10px]" : "text-[11px]";

  const base = `btn-shimmer group relative inline-flex items-center gap-3 font-[family-name:var(--font-inter)] ${textSize} tracking-[0.28em] uppercase overflow-hidden transition-all duration-300 ${px} ${className}`;

  const variantCls = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white",
    outline:
      "border border-white/18 hover:border-blue-500/60 bg-transparent hover:bg-blue-500/[0.06] text-white backdrop-blur-sm",
    ghost:
      "border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] text-white/70 hover:text-white",
  }[variant];

  const shadowVariant = {
    primary: "0 0 0 1px rgba(0,102,255,0.7), 0 0 40px rgba(0,80,255,0.55), 0 0 80px rgba(0,60,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
    outline:  "0 0 0 1px rgba(0,102,255,0.45), 0 0 24px rgba(0,80,255,0.3)",
    ghost:    "0 0 0 1px rgba(255,255,255,0.15)",
  }[variant];

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variantCls}`}
      whileHover={{
        boxShadow: shadowVariant,
        y: -1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.08 } }}
    >
      {/* Animated border trace for outline variant */}
      {variant === "outline" && (
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span
            className="absolute inset-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,102,255,0.0) 0%, rgba(0,200,255,0.25) 50%, rgba(0,102,255,0.0) 100%)",
            }}
          />
        </span>
      )}

      <span className="relative z-10 flex items-center gap-3">
        {children}
        <svg
          className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </motion.a>
  );
}
