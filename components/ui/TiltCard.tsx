"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const spring = { stiffness: 320, damping: 38 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), spring);

  const glareX = useTransform(mx, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["15%", "85%"]);
  const glare = useTransform([glareX, glareY], ([gx, gy]) =>
    `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.055) 0%, transparent 55%)`
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]"
        style={{ background: glare }}
      />
    </motion.div>
  );
}
