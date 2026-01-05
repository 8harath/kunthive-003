"use client"

import { motion } from "framer-motion"
import { Code, Search, Share2, Smartphone, Brain } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Code,
    title: "Web Applications",
    description: "Scalable, responsive web apps tailored to your business — from landing pages to complex platforms.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost organic visibility with keyword strategy, technical audits, and content optimization.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Consistent brand presence across all platforms — content, community, and analytics.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Smartphone,
    title: "Business Digitization",
    description: "Move from paper to cloud — automated workflows, digital payments, real-time data.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Chatbots, predictive analytics, document processing — AI that works in your existing workflow.",
    color: "bg-amber-50 text-amber-600",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function AnimatedFeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions to help your business grow, compete, and thrive online.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-md transition-shadow duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${feature.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            variants={cardVariants}
            className="bg-primary rounded-2xl p-6 border border-primary flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ready to start?</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Tell us about your project and we'll put together a custom plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white underline underline-offset-2 hover:text-blue-100 transition-colors"
            >
              Get in touch →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
