import Link from "next/link";
import { type WPCategory } from "@/lib/wordpress";

interface BlogCategoryFilterProps {
  categories: WPCategory[];
  activeCategoryId?: number;
}

export default function BlogCategoryFilter({
  categories,
  activeCategoryId,
}: BlogCategoryFilterProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Link
        href="/blog"
        className={`text-[10px] tracking-[0.22em] px-4 py-2.5 font-[family-name:var(--font-inter)] transition-all duration-200 ${
          !activeCategoryId
            ? "bg-blue-600 text-white"
            : "border border-white/[0.08] text-white/35 hover:text-white/65 hover:border-white/20"
        }`}
      >
        ALL
      </Link>

      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/blog?category=${cat.id}`}
          className={`text-[10px] tracking-[0.22em] px-4 py-2.5 font-[family-name:var(--font-inter)] transition-all duration-200 ${
            activeCategoryId === cat.id
              ? "bg-blue-600 text-white"
              : "border border-white/[0.08] text-white/35 hover:text-white/65 hover:border-white/20"
          }`}
        >
          {cat.name}
          <span className="ml-1.5 text-white/25">{cat.count}</span>
        </Link>
      ))}
    </div>
  );
}
