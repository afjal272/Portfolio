"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left rounded-r-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(45,212,191,0.8)]"
    />
  );
}