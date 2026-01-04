"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  words?: string[]
  className?: string
}

export function ParticleTextEffect({ words = ["Kunthive"], className = "" }: AnimatedTextProps) {
  const text = words[0] || "Kunthive"

  return (
    <div className={`flex items-center justify-center w-full h-full min-h-[200px] ${className}`}>
      <motion.h1
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
