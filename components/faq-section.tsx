"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Kunthive offer?",
    answer:
      "Kunthive specializes in five core services: Building custom web applications, improving SEO rankings, managing social media accounts, digitizing traditional business processes, and incorporating AI into existing workflows to automate and optimize operations.",
  },
  {
    question: "How long does it take to build a web application?",
    answer:
      "The timeline varies based on project complexity and requirements. Simple applications typically take 4-8 weeks, while more complex solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Can you help improve my website's SEO?",
    answer:
      "Absolutely! Our SEO services include keyword research, on-page optimization, technical SEO audits, content strategy, link building, and ongoing monitoring. We'll create a customized strategy to improve your search engine rankings and drive organic traffic.",
  },
  {
    question: "What social media platforms do you manage?",
    answer:
      "We manage all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube. Our services include content creation, posting schedules, community engagement, analytics reporting, and paid advertising management.",
  },
  {
    question: "What does business digitization involve?",
    answer:
      "Business digitization includes converting paper-based processes to digital systems, implementing cloud solutions, automating workflows, setting up digital payment systems, creating online presence, and training your team on new digital tools. We assess your needs and create a comprehensive transformation plan.",
  },
  {
    question: "How can AI be integrated into my existing workflow?",
    answer:
      "We analyze your current processes and identify areas where AI can add value. This may include chatbots for customer service, automated data processing, predictive analytics, intelligent document management, or workflow automation. We ensure seamless integration with your existing systems.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes! We work with startups, small businesses, mid-sized companies, and large enterprises. Our services are scalable and can be customized to fit businesses at any stage of growth, from just starting out to well-established organizations.",
  },
  {
    question: "What is included in your pricing plans?",
    answer:
      "Our pricing plans vary by service and scope. Each plan includes consultation, project management, regular updates, and support. Enterprise plans include dedicated account managers, priority support, custom integrations, and advanced features. Contact us for a customized quote based on your specific needs.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about Kunthive. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          
          
        </motion.div>
      </div>
    </section>
  )
}
