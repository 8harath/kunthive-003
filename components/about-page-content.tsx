"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower local businesses with cutting-edge digital solutions that transform their operations and drive sustainable growth. We believe every business deserves access to professional digital services that help them thrive in today's competitive market.",
  },
  {
    icon: Users,
    title: "Who We Are",
    description:
      "We are a team of passionate undergraduate students from Bangalore, combining our academic knowledge with real-world problem-solving skills. Our diverse backgrounds in technology, business, and design enable us to deliver comprehensive solutions tailored to your needs.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "We bring fresh perspectives and innovative thinking to every project. As students, we stay updated with the latest technologies and trends, ensuring your business benefits from modern solutions. We're not just service providers—we're partners in your digital transformation journey.",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    description:
      "We're committed to making a meaningful impact on local businesses. We understand the unique challenges you face and work closely with you to develop solutions that drive real results. Your success is our success, and we're invested in your growth.",
  },
]

export function AboutPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About Kunthive
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Driven by passion, powered by innovation. We're here to transform your business for the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Kunthive is managed by a team of undergraduate students in Bangalore who are passionate about making
                a meaningful impact on local businesses. We believe that every business, regardless of size, deserves
                access to cutting-edge digital solutions that can transform their operations and help them thrive in
                today's digital landscape.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our mission is to empower local businesses with the tools and expertise they need to succeed online.
                From building custom web applications to optimizing SEO, managing social media presence, digitizing
                traditional processes, and incorporating AI into workflows—we're here to help businesses unlock their
                full potential.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As students, we bring fresh perspectives, innovative thinking, and a deep commitment to understanding
                the unique challenges faced by local businesses. We're not just service providers—we're partners in
                your digital transformation journey.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{value.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

