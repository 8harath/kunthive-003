"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What services does Kunthive offer?",
    answer:
      "Kunthive specializes in five core services: custom web application development, SEO optimization, social media management, business digitization, and AI workflow automation.",
  },
  {
    question: "How long does it take to build a web application?",
    answer:
      "Timelines vary by complexity. Simple applications typically take 4–8 weeks; complex platforms may take 3–6 months. We provide a detailed timeline during the initial consultation.",
  },
  {
    question: "Can you improve my website's SEO?",
    answer:
      "Absolutely. Our SEO services cover keyword research, on-page optimization, technical audits, content strategy, and link building — with a custom plan for your specific goals.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We manage all major platforms — Facebook, Instagram, Twitter/X, LinkedIn, TikTok, and YouTube. Services include content creation, scheduling, community management, and analytics.",
  },
  {
    question: "What does business digitization involve?",
    answer:
      "We convert paper-based processes to digital systems, implement cloud solutions, automate workflows, set up digital payments, and train your team on new tools — all in a phased plan.",
  },
  {
    question: "How can AI be integrated into my existing workflow?",
    answer:
      "We analyze your current processes and identify where AI adds the most value — whether that's chatbots, automated data processing, predictive analytics, or intelligent document handling.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes — from solo founders to mid-sized enterprises. Our services scale to meet you where you are, with pricing plans from $29/month up to custom enterprise engagements.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 bg-gray-50 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Can't find the answer you're looking for?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact our team
            </Link>
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-medium text-foreground">{faq.question}</span>
                <span className="flex-shrink-0 text-muted-foreground">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-primary" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
