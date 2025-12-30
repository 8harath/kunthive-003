"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Kunthive
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Driven by passion, powered by innovation
          </motion.p>
        </div>

        <motion.div
          className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Kunthive is managed by a team of undergraduate students in Bangalore who are passionate about making a meaningful impact on local businesses. We believe that every business, regardless of size, deserves access to cutting-edge digital solutions that can transform their operations and help them thrive in today's digital landscape.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our mission is to empower local businesses with the tools and expertise they need to succeed online. From building custom web applications to optimizing SEO, managing social media presence, digitizing traditional processes, and incorporating AI into workflows—we're here to help businesses unlock their full potential.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As students, we bring fresh perspectives, innovative thinking, and a deep commitment to understanding the unique challenges faced by local businesses. We're not just service providers—we're partners in your digital transformation journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

