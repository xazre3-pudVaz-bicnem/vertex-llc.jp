"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type WPPost, getPostImage, getPostImageAlt, getPostCategoryNames, formatDate, stripHtml } from "@/lib/wordpress";

const ease = [0.16, 1, 0.3, 1] as const;

const CAT_COLORS = [
  "text-blue-400/70 border-blue-500/22",
  "text-cyan-400/70 border-cyan-500/22",
  "text-emerald-400/70 border-emerald-500/22",
  "text-violet-400/70 border-violet-500/22",
  "text-amber-400/70 border-amber-500/22",
];

interface BlogCardProps {
  post: WPPost;
  index?: number;
  inView?: boolean;
}

export default function BlogCard({ post, index = 0, inView = true }: BlogCardProps) {
  const imageUrl = getPostImage(post);
  const imageAlt = getPostImageAlt(post);
  const categories = getPostCategoryNames(post);
  const title = stripHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt.rendered).substring(0, 120);
  const date = formatDate(post.date);

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease }}
      whileHover={{
        y: -5,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      className="group card-shimmer relative border border-white/[0.07] bg-white/[0.018] overflow-hidden cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500 z-10" />

      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-white/[0.03]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={80}
            />
          ) : (
            /* No-image placeholder */
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-[family-name:var(--font-bebas)] text-4xl text-white/[0.06] tracking-[0.2em]">
                VERTEX
              </span>
              <div className="absolute inset-0 grid-bg opacity-40" />
            </div>
          )}
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Card body */}
        <div className="p-6 md:p-7">
          {/* Meta row */}
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.slice(0, 2).map((cat, i) => (
                <span
                  key={cat}
                  className={`text-[9px] tracking-[0.18em] border px-2.5 py-1 font-[family-name:var(--font-inter)] ${
                    CAT_COLORS[i % CAT_COLORS.length]
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
            <time className="text-white/22 text-[10px] font-[family-name:var(--font-inter)] tracking-[0.08em] shrink-0">
              {date}
            </time>
          </div>

          {/* Title */}
          <h2 className="font-[family-name:var(--font-noto)] font-bold text-sm md:text-base text-white/85 group-hover:text-white leading-snug mb-3 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-white/32 text-xs font-[family-name:var(--font-noto)] leading-[1.9] line-clamp-3 mb-5">
              {excerpt}
            </p>
          )}

          {/* Read more */}
          <div className="flex items-center gap-2 text-blue-400/45 group-hover:text-blue-400/75 transition-colors duration-300">
            <span className="text-[10px] font-[family-name:var(--font-inter)] tracking-[0.25em]">
              READ MORE
            </span>
            <svg
              className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500/45 to-transparent transition-all duration-500" />
    </motion.article>
  );
}
