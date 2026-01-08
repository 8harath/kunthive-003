"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About Kunthive
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kunthive is managed by a team of undergraduate students in Bangalore who are
              passionate about making a meaningful impact on local businesses. We bring fresh
              perspectives, innovative thinking, and a commitment to real results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From web apps to AI automation — we're not just service providers, we're partners
              in your digital transformation journey.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Learn more about us →
            </Link>
          </motion.div>

          {/* Right — stats card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "2+", label: "Years of Experience", bg: "bg-accent" },
              { value: "50+", label: "Projects Completed", bg: "bg-violet-50" },
              { value: "5", label: "Core Services", bg: "bg-emerald-50" },
              { value: "Bangalore", label: "Based In", bg: "bg-amber-50" },
            ].map((item) => (
              <div
                key={item.label}
                className={`${item.bg} rounded-2xl p-6 border border-border/50`}
              >
                <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
