"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

interface BlogListProps {
  posts: Post[];
}

const categoryColors: Record<string, string> = {
  "お知らせ": "text-blue-400/70 border-blue-500/25",
  "サービス": "text-cyan-400/70 border-cyan-500/25",
  "採用":     "text-emerald-400/70 border-emerald-500/25",
};

export default function BlogList({ posts }: BlogListProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#020204]" />
      <div className="absolute inset-0 grid-bg opacity-35" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.05]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Category filter placeholder */}
        <div className="flex items-center gap-3 mb-12">
          {["すべて", "お知らせ", "サービス", "採用"].map((cat, i) => (
            <button
              key={cat}
              className={`text-[10px] tracking-[0.2em] px-4 py-2 font-[family-name:var(--font-inter)] transition-colors duration-200 ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "border border-white/[0.08] text-white/30 hover:text-white/60 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 0 1px rgba(0,102,255,0.3), 0 16px 40px rgba(0,102,255,0.1)",
                transition: { duration: 0.22 },
              }}
              className="group card-shimmer border border-white/[0.07] bg-white/[0.018] overflow-hidden cursor-pointer relative"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />

              <Link href={`/blog/${post.slug}`} className="block p-7">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-[9px] tracking-[0.2em] border px-2.5 py-1 font-[family-name:var(--font-inter)] ${
                      categoryColors[post.category] ?? "text-white/40 border-white/15"
                    }`}
                  >
                    {post.category}
                  </span>
                  <time className="text-white/22 text-[10px] font-[family-name:var(--font-inter)]">
                    {post.date}
                  </time>
                </div>

                <h2 className="font-[family-name:var(--font-noto)] font-bold text-base text-white mb-3 leading-snug group-hover:text-blue-100 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-white/32 text-xs font-[family-name:var(--font-noto)] leading-[1.9] line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 mt-5 text-blue-400/50 group-hover:text-blue-400/80 transition-colors duration-300">
                  <span className="text-[10px] font-[family-name:var(--font-inter)] tracking-[0.2em]">READ MORE</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>

              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent transition-all duration-500" />
            </motion.article>
          ))}
        </div>

        {/* WordPress note */}
        <div className="border border-white/[0.05] bg-white/[0.01] p-6 max-w-lg">
          <p className="text-white/22 text-xs font-[family-name:var(--font-noto)] leading-[1.9]">
            このブログはWordPress REST APIとの連携を想定した構成です。
            コンテンツの追加・管理はWordPressで行えます。
          </p>
        </div>
      </div>
    </section>
  );
}
