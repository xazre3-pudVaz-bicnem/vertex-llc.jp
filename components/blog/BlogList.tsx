"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { type WPPost } from "@/lib/wordpress";

interface BlogListProps {
  posts: WPPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (posts.length === 0) {
    return (
      <div className="text-center py-32">
        <span className="font-[family-name:var(--font-bebas)] text-5xl text-white/[0.08] tracking-[0.3em]">
          NO POSTS
        </span>
        <p className="text-white/25 text-sm font-[family-name:var(--font-noto)] mt-4">
          記事が見つかりませんでした。
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {posts.map((post, i) => (
        <BlogCard key={post.id} post={post} index={i} inView={inView} />
      ))}
    </div>
  );
}
