"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let mx = -300, my = -300;
    let dx = -300, dy = -300;
    let rx = -300, ry = -300;
    let hover = false;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      hover = !!(e.target as Element).closest("a, button, [role='button']");
    };

    const loop = () => {
      dx += (mx - dx) * 0.85;
      dy += (my - dy) * 0.85;
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;

      dot.style.transform = `translate3d(${dx - 3}px,${dy - 3}px,0) scale(${hover ? 2.4 : 1})`;
      dot.style.background = hover ? "rgba(0,140,255,0.9)" : "rgb(59,130,246)";
      ring.style.transform = `translate3d(${rx - 18}px,${ry - 18}px,0) scale(${hover ? 1.65 : 1})`;
      ring.style.borderColor = hover ? "rgba(0,140,255,0.55)" : "rgba(0,100,255,0.22)";

      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-blue-500 will-change-transform"
        style={{ width: 6, height: 6, opacity: 0, transition: "background 0.2s, transform 0.1s cubic-bezier(0.16,1,0.3,1)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full will-change-transform"
        style={{
          width: 36,
          height: 36,
          opacity: 0,
          border: "1px solid rgba(0,100,255,0.22)",
          transition: "border-color 0.3s, transform 0.08s linear",
        }}
      />
    </>
  );
}
