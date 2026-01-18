"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "3x", label: "Avg. Traffic Growth" },
  { value: "24h", label: "Response Time" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 px-4 sm:pt-20 sm:pb-24">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue accent blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/20 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Digital Solutions for Modern Businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your
            <br />
            <span className="text-primary">Business</span> with
            <br />
            Digital Excellence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Web applications, SEO, social media management, business digitization,
            and AI-powered automation — all under one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm group"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-foreground font-medium rounded-xl hover:bg-secondary/80 transition-colors border border-border"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
