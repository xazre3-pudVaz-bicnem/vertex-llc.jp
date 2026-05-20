import type { Variants, Transition } from "framer-motion";

export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fastTransition: Transition = { duration: 0.3, ease: "easeOut" };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

export const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0)",
    transition: fastTransition,
  },
  hover: {
    y: -8,
    boxShadow:
      "0 0 0 1px rgba(0,102,255,0.45), 0 20px 60px rgba(0,102,255,0.18), 0 4px 20px rgba(0,0,0,0.4)",
    transition: fastTransition,
  },
};

export const iconHover: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: fastTransition,
  },
  hover: {
    scale: 1.12,
    rotate: -6,
    transition: fastTransition,
  },
};
