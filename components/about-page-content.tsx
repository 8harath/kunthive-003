"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower local businesses with professional digital solutions that transform their operations and drive sustainable growth. Every business deserves access to tools that help them compete online.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Who We Are",
    description:
      "A team of passionate undergraduate students from Bangalore, combining academic knowledge with real-world problem-solving. Our diverse backgrounds in technology, business, and design let us deliver comprehensive solutions.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "We bring fresh perspectives and stay current with the latest technologies. As students, we're close to the cutting edge — and we bring that energy to every project we take on.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    description:
      "We understand the unique challenges local businesses face and work closely with every client to develop solutions that drive real results. Your success is our success.",
    color: "bg-emerald-50 text-emerald-600",
  },
]

export function AboutPageContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">About Us</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About Kunthive
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Driven by passion, powered by innovation. We're here to transform your business for the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="space-y-5 text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Kunthive is managed by a team of undergraduate students in Bangalore who are passionate
              about making a meaningful impact on local businesses. We believe that every business,
              regardless of size, deserves access to professional digital solutions.
            </p>
            <p>
              Our mission is to empower local businesses with the tools and expertise they need to
              succeed online — from building custom web applications to optimizing SEO, managing
              social media, digitizing traditional processes, and incorporating AI into workflows.
            </p>
            <p>
              As students, we bring fresh perspectives, innovative thinking, and deep commitment to
              understanding the unique challenges faced by local businesses. We're partners in your
              digital transformation journey, not just service providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl border border-border p-8 hover:shadow-sm transition-shadow"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${value.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
