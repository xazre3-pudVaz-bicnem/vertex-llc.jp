"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  label: string;
  heading: string;
  subheading?: string;
  breadcrumb?: Crumb[];
  children?: ReactNode;
}

export default function PageHero({
  label,
  heading,
  subheading,
  breadcrumb,
  children,
}: PageHeroProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-35" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div
        className="absolute top-0 left-0 w-[700px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(0,55,220,0.07)" }}
      />
      <div className="absolute top-0 left-[28%] w-px h-full bg-gradient-to-b from-blue-500/[0.1] via-transparent to-transparent pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-4 md:pr-10">
        <span className="font-[family-name:var(--font-bebas)] text-[22vw] leading-none text-white/[0.016]">
          {heading}
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-10"
          >
            <Link
              href="/"
              className="text-[10px] text-white/22 hover:text-white/50 transition-colors font-[family-name:var(--font-inter)] tracking-[0.2em]"
            >
              TOP
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span className="text-white/15 text-[10px]">/</span>
                <Link
                  href={crumb.href}
                  className="text-[10px] text-white/22 hover:text-white/50 transition-colors font-[family-name:var(--font-inter)] tracking-[0.2em]"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </motion.nav>
        )}

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="flex items-center gap-3 mb-6"
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

        {/* Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,11vw,10rem)] leading-[0.88] text-white"
          >
            {heading}
          </motion.h1>
        </div>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-white/35 font-[family-name:var(--font-noto)] text-sm md:text-base tracking-widest"
          >
            {subheading}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
}
