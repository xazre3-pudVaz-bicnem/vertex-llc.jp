"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  type WPPost,
  getPostImage,
  getPostImageAlt,
  getPostCategoryNames,
  formatDate,
  stripHtml,
} from "@/lib/wordpress";

const WP_BASE = "https://wp.vertex-llc.jp/wp-json/wp/v2";
const ease = [0.16, 1, 0.3, 1] as const;

const CAT_COLORS = [
  "text-blue-400/70 border-blue-500/22",
  "text-cyan-400/70 border-cyan-500/22",
  "text-emerald-400/70 border-emerald-500/22",
  "text-violet-400/70 border-violet-500/22",
  "text-amber-400/70 border-amber-500/22",
];

export default function BlogPostPage() {
  const params = useParams();
  const rawSlug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? "");

  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!rawSlug) return;

    async function load() {
      setLoading(true);
      setNotFound(false);
      try {
        const url = `${WP_BASE}/posts?slug=${encodeURIComponent(rawSlug)}&_embed`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const posts: WPPost[] = await res.json();
        if (posts.length === 0) {
          setNotFound(true);
        } else {
          setPost(posts[0]);
        }
      } catch (err) {
        console.error("[WP] post fetch error:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [rawSlug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#020204] flex items-center justify-center">
        <div className="w-8 h-8 border border-white/10 border-t-blue-400/70 rounded-full animate-spin" />
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="min-h-screen bg-[#020204] flex flex-col items-center justify-center gap-8">
        <p className="text-white/30 text-sm font-[family-name:var(--font-noto)]">
          記事が見つかりませんでした。
        </p>
        <Link
          href="/blog"
          className="text-[10px] tracking-[0.22em] font-[family-name:var(--font-inter)] border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 px-6 py-3 transition-all duration-200"
        >
          記事一覧へ戻る
        </Link>
      </main>
    );
  }

  const imageUrl = getPostImage(post);
  const imageAlt = getPostImageAlt(post);
  const categories = getPostCategoryNames(post);
  const title = stripHtml(post.title.rendered);
  const date = formatDate(post.date);

  return (
    <article>
      <section className="relative pt-40 pb-12 md:pt-52 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
        <div
          className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: "rgba(0,50,220,0.06)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-10 flex-wrap"
          >
            {[
              { label: "TOP", href: "/" },
              { label: "BLOG", href: "/blog" },
            ].map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/15 text-[10px]">/</span>}
                <Link
                  href={crumb.href}
                  className="text-[10px] text-white/22 hover:text-white/55 transition-colors font-[family-name:var(--font-inter)] tracking-[0.22em]"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
            <span className="text-white/15 text-[10px]">/</span>
            <span className="text-[10px] text-white/18 font-[family-name:var(--font-inter)] tracking-[0.1em] line-clamp-1 max-w-[200px]">
              {title.substring(0, 30)}{title.length > 30 ? "..." : ""}
            </span>
          </motion.nav>

          {categories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center gap-2 mb-5 flex-wrap"
            >
              {categories.slice(0, 3).map((cat, i) => (
                <span
                  key={cat}
                  className={`text-[9px] tracking-[0.2em] border px-2.5 py-1 font-[family-name:var(--font-inter)] ${CAT_COLORS[i % CAT_COLORS.length]}`}
                >
                  {cat}
                </span>
              ))}
              <time className="text-white/22 text-[10px] font-[family-name:var(--font-inter)] ml-2">
                {date}
              </time>
            </motion.div>
          )}

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="font-[family-name:var(--font-noto)] font-black text-2xl md:text-4xl text-white leading-snug"
            >
              {title}
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-8"
          />
        </div>
      </section>

      {imageUrl && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#020204]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-6 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="relative w-full aspect-[16/9] overflow-hidden border border-white/[0.06]"
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </section>
      )}

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#020204]" />
        <div className="absolute inset-0 grid-bg opacity-25" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <div className="mt-16 pt-10 border-t border-white/[0.06]">
            <p className="text-white/25 text-xs font-[family-name:var(--font-noto)] mb-8">
              最終更新：{formatDate(post.modified)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[11px] tracking-[0.2em] font-[family-name:var(--font-inter)] transition-colors duration-200"
              >
                お問い合わせ
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] text-white/50 hover:text-white hover:border-white/30 text-[11px] tracking-[0.2em] font-[family-name:var(--font-inter)] transition-all duration-200"
              >
                記事一覧へ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}