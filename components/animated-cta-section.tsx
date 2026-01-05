"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const highlights = [
  "No long-term contracts",
  "Free initial consultation",
  "Results within 30 days",
]

export function AnimatedCTASection() {
  return (
    <section className="py-20 px-4 bg-gray-50 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Partner with Kunthive to build powerful digital solutions — from web apps and SEO
              to AI-powered automation. We're passionate about helping your business grow.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors group"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-xl hover:bg-secondary/80 transition-colors border border-border"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-border p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">Quick Summary</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Everything you need to take your business digital — in one place.
            </p>
            <div className="space-y-4">
              {[
                { label: "Web Applications", value: "Custom built" },
                { label: "SEO", value: "3× traffic growth" },
                { label: "Social Media", value: "All platforms" },
                { label: "Digitization", value: "30% cost reduction" },
                { label: "AI Integration", value: "40% efficiency gain" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
