"use client";

const ITEMS_DARK = [
  "LIGHT CARGO DELIVERY",
  "VERTEX",
  "SPEED & TRUST",
  "物流パートナー",
  "CHARTER SERVICE",
  "SPOT DELIVERY",
  "CORPORATE LOGISTICS",
  "RELIABLE DELIVERY",
  "MOVING THE FUTURE",
];

const ITEMS_LIGHT = [
  "JOIN OUR TEAM",
  "VERTEX CAREERS",
  "走った分だけ未来が変わる",
  "未経験歓迎",
  "業務委託",
  "DRIVER WANTED",
  "GROW WITH US",
  "軽貨物ドライバー募集",
];

const ITEMS_BRAND = [
  "DEVELOPMENT",
  "TRUST",
  "INNOVATION",
  "PARTNER",
  "GROWTH",
  "RELIABILITY",
  "EXCELLENCE",
  "COMMITMENT",
  "FORWARD",
];

interface Props {
  reverse?: boolean;
  variant?: "dark" | "light" | "brand";
}

export default function MarqueeSection({ reverse = false, variant = "dark" }: Props) {
  const items =
    variant === "light" ? ITEMS_LIGHT :
    variant === "brand" ? ITEMS_BRAND :
    ITEMS_DARK;
  const doubled = [...items, ...items];

  const containerCls =
    variant === "light"  ? "border-blue-500/10 bg-blue-600/[0.04]" :
    variant === "brand"  ? "border-white/[0.03] bg-transparent" :
    "border-white/[0.05] bg-white/[0.01]";

  const textCls =
    variant === "light"  ? "text-blue-400/25" :
    variant === "brand"  ? "text-white/[0.055]" :
    "text-white/18";

  const dotCls =
    variant === "light"  ? "text-blue-400/50" :
    variant === "brand"  ? "text-white/[0.04]" :
    "text-blue-500/35";

  const textSizeCls =
    variant === "brand"
      ? "font-[family-name:var(--font-bebas)] text-4xl md:text-6xl tracking-[0.18em]"
      : "font-[family-name:var(--font-bebas)] text-xl md:text-2xl tracking-[0.22em]";

  const paddingCls =
    variant === "brand" ? "py-[10px]" : "py-[14px]";

  return (
    <div className={`overflow-hidden border-y ${paddingCls} ${containerCls}`}>
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: "reverse" } : {}}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className={`${textSizeCls} px-8 ${textCls}`}>
              {item}
            </span>
            <span className={`glow-dot text-[7px] ${dotCls}`}>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
