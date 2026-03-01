"use client";

import { motion } from "framer-motion";

interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Sparkle({
  className = "",
  size = 24,
  color = "#2D6A4F",
}: SparkleProps) {
  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <path
        d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
        fill={color}
        opacity={0.6}
      />
    </motion.svg>
  );
}

export function SparkleGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <Sparkle
        className="absolute top-[10%] right-[15%]"
        size={20}
        color="#2D6A4F"
      />
      <Sparkle
        className="absolute top-[30%] left-[10%]"
        size={16}
        color="#E8EDE5"
      />
      <Sparkle
        className="absolute bottom-[20%] right-[25%]"
        size={14}
        color="#2D6A4F"
      />
      <Sparkle
        className="absolute top-[60%] left-[20%]"
        size={18}
        color="#C1553B"
      />
      <Sparkle
        className="absolute bottom-[40%] right-[8%]"
        size={12}
        color="#2D6A4F"
      />
    </div>
  );
}
