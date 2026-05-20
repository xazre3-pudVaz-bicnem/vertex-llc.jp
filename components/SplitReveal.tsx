"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface Props {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  start?: string;
}

export default function SplitReveal({
  text,
  className = "",
  stagger = 0.06,
  delay = 0,
  start = "top 88%",
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const split = new SplitType(el, { types: "words" });
    const words = split.words;
    if (!words || words.length === 0) return;

    gsap.set(words, { opacity: 0, y: 28 });

    const ctx = gsap.context(() => {
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [stagger, delay, start]);

  return (
    <h2 ref={ref} className={className}>
      {text}
    </h2>
  );
}
