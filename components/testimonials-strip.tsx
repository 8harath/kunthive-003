"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { testimonials } from "./testimonials-page-content"
import { Quote } from "lucide-react"

const featured = testimonials.slice(0, 3)

export function TestimonialsStrip() {
  return (
    <section className="py-20 px-4 bg-gray-50 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.p>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/testimonials"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all →
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl border border-border p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="h-5 w-5 text-primary/20 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.content}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/testimonials" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all testimonials →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
