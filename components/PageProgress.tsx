"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[1px] origin-left pointer-events-none"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(0,80,255,0.9) 0%, rgba(0,160,255,1) 50%, rgba(100,220,255,1) 100%)",
      }}
    />
  );
}
