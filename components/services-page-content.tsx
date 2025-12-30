"use client"

import { motion } from "framer-motion"
import { Code, Search, Share2, Smartphone, Brain, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Application Development",
    description:
      "Build scalable, responsive, and modern web applications tailored to your business needs. From simple landing pages to complex enterprise solutions, we create digital experiences that drive results.",
    benefits: [
      "Custom solutions designed for your specific business requirements",
      "Responsive design ensuring perfect functionality across all devices",
      "Scalable architecture that grows with your business",
      "Modern tech stack for optimal performance and security",
      "User-friendly interfaces that enhance customer experience",
    ],
    impact:
      "A well-designed web application can increase customer engagement by up to 85% and improve conversion rates significantly. It provides a professional online presence, enables 24/7 accessibility for your customers, and automates business processes, reducing operational costs while increasing efficiency.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with comprehensive SEO strategies. We optimize your website to rank higher in search engine results, bringing more qualified leads to your business.",
    benefits: [
      "Improved search engine rankings for relevant keywords",
      "Increased organic traffic and qualified leads",
      "Better user experience and website performance",
      "Long-term sustainable growth in online presence",
      "Comprehensive keyword research and content optimization",
    ],
    impact:
      "Effective SEO can increase organic traffic by 300-400% over time. It's a cost-effective marketing strategy that brings in high-intent customers actively searching for your products or services. Better rankings also build brand credibility and trust, leading to higher conversion rates and increased revenue.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Elevate your brand presence across all social media platforms. We create, curate, and manage engaging content that connects with your audience, builds community, and drives business growth.",
    benefits: [
      "Consistent brand messaging across all platforms",
      "Engaging content that resonates with your target audience",
      "Regular posting schedules to maintain visibility",
      "Community engagement and customer relationship management",
      "Analytics and insights to track performance and ROI",
    ],
    impact:
      "Businesses with active social media presence see 23% more revenue growth. Social media management helps build brand awareness, foster customer loyalty, and provides a direct channel for customer service. It also drives website traffic, generates leads, and creates opportunities for viral marketing, expanding your reach exponentially.",
  },
  {
    icon: Smartphone,
    title: "Business Digitization",
    description:
      "Transform traditional business processes into efficient digital workflows. We help you move from paper-based systems to cloud solutions, streamlining operations and reducing costs while improving productivity.",
    benefits: [
      "Automated workflows reducing manual tasks and errors",
      "Cloud-based solutions for easy access and collaboration",
      "Digital payment systems for faster transactions",
      "Paperless operations saving time and resources",
      "Real-time data access and analytics for better decision-making",
    ],
    impact:
      "Business digitization can reduce operational costs by up to 30% and increase productivity by 20-25%. It enables remote work capabilities, improves data security, and provides valuable insights through analytics. Digitized businesses respond faster to market changes, serve customers more efficiently, and have a competitive edge in today's digital marketplace.",
  },
  {
    icon: Brain,
    title: "AI Integration & Workflow Automation",
    description:
      "Incorporate artificial intelligence into your existing workflows to automate tasks, gain insights, and make smarter business decisions. From chatbots to predictive analytics, we help you leverage AI to work smarter, not harder.",
    benefits: [
      "Automated repetitive tasks saving time and resources",
      "AI-powered chatbots for 24/7 customer support",
      "Predictive analytics for data-driven decision making",
      "Intelligent document processing and data extraction",
      "Personalized customer experiences at scale",
    ],
    impact:
      "AI integration can increase efficiency by 40% and reduce operational costs by 25-30%. AI-powered automation handles routine tasks, freeing up your team for strategic work. Intelligent systems provide actionable insights, predict trends, and enable personalized customer experiences that drive loyalty and revenue. Businesses using AI see improved customer satisfaction and faster problem resolution.",
  },
]

export function ServicesPageContent() {
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="grid md:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-4 mb-8">
                      <h3 className="text-xl font-semibold text-white">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <ArrowRight className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Business Impact</h3>
                      <p className="text-gray-300 leading-relaxed">{service.impact}</p>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-border/20 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-white/20" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

