import Link from "next/link";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  categoryId?: number;
}

function buildHref(page: number, categoryId?: number): string {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));
  if (categoryId) params.set("category", String(categoryId));
  const qs = params.toString();
  return `/blog${qs ? `?${qs}` : ""}`;
}

/** Builds a windowed page number list: [1, …, 4, 5, 6, …, 12] */
function buildPages(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  if (current > 3) pages.push("…");
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < total - 2) pages.push("…");
  pages.push(total);
  return pages;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  categoryId,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = buildPages(currentPage, totalPages);

  return (
    <nav
      className="flex items-center justify-center gap-1.5 mt-16"
      aria-label="ページナビゲーション"
    >
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1, categoryId)}
          className="flex items-center gap-1.5 px-4 py-2.5 border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 text-[10px] tracking-[0.2em] font-[family-name:var(--font-inter)] transition-all duration-200"
        >
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          PREV
        </Link>
      ) : (
        <span className="flex items-center gap-1.5 px-4 py-2.5 border border-white/[0.04] text-white/15 text-[10px] tracking-[0.2em] font-[family-name:var(--font-inter)] cursor-not-allowed">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          PREV
        </span>
      )}

      {/* Page numbers */}
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="px-2 py-2.5 text-white/20 text-[10px] font-[family-name:var(--font-inter)]">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={buildHref(p, categoryId)}
            className={`w-9 h-9 flex items-center justify-center text-[11px] font-[family-name:var(--font-inter)] tracking-wider transition-all duration-200 ${
              p === currentPage
                ? "bg-blue-600 text-white"
                : "border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25"
            }`}
            aria-current={p === currentPage ? "page" : undefined}
          >
            {p}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(currentPage + 1, categoryId)}
          className="flex items-center gap-1.5 px-4 py-2.5 border border-white/[0.08] text-white/40 hover:text-white hover:border-white/25 text-[10px] tracking-[0.2em] font-[family-name:var(--font-inter)] transition-all duration-200"
        >
          NEXT
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      ) : (
        <span className="flex items-center gap-1.5 px-4 py-2.5 border border-white/[0.04] text-white/15 text-[10px] tracking-[0.2em] font-[family-name:var(--font-inter)] cursor-not-allowed">
          NEXT
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </nav>
  );
}
