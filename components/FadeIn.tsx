"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/utils/motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.75,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });

  const offsets = {
    up:    { y: 40,  x: 0  },
    left:  { y: 0,   x: -44 },
    right: { y: 0,   x: 44  },
    none:  { y: 0,   x: 0  },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
