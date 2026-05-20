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

interface Props {
  reverse?: boolean;
  variant?: "dark" | "light";
}

export default function MarqueeSection({ reverse = false, variant = "dark" }: Props) {
  const items = variant === "light" ? ITEMS_LIGHT : ITEMS_DARK;
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y py-[14px] ${
        variant === "light"
          ? "border-blue-500/10 bg-blue-600/[0.04]"
          : "border-white/[0.05] bg-white/[0.01]"
      }`}
    >
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: "reverse" } : {}}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span
              className={`font-[family-name:var(--font-bebas)] text-xl md:text-2xl tracking-[0.22em] px-8 ${
                variant === "light"
                  ? "text-blue-400/25"
                  : "text-white/18"
              }`}
            >
              {item}
            </span>
            <span
              className={`glow-dot text-[7px] ${
                variant === "light" ? "text-blue-400/50" : "text-blue-500/35"
              }`}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
