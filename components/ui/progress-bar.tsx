"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-white/10"
      aria-label={`Course progress ${value}%`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: value / 100 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          type: "spring",
          stiffness: 180,
          damping: 24
        }}
        style={{
          transformOrigin: "left center",
          willChange: "transform"
        }}
      />
    </div>
  );
}
