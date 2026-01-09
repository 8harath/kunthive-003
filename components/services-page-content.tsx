"use client"

import { motion } from "framer-motion"
import { Code, Search, Share2, Smartphone, Brain, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Application Development",
    tagline: "Custom-built for your business",
    description:
      "Scalable, responsive, and modern web applications tailored to your business needs. From landing pages to complex enterprise platforms, we create experiences that drive results.",
    benefits: [
      "Custom solutions for your specific requirements",
      "Responsive design across all devices",
      "Scalable architecture that grows with you",
      "Modern stack for performance and security",
      "User-friendly interfaces that convert",
    ],
    impact: "A well-designed web application can increase customer engagement by up to 85%, improve conversions, and reduce support overhead by automating common workflows.",
    color: "bg-blue-50",
    iconColor: "bg-blue-100 text-blue-600",
    accent: "border-blue-100",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    tagline: "Rank higher, grow faster",
    description:
      "Boost your online visibility with comprehensive SEO strategies. We optimize your website to rank higher in search results, bringing qualified leads to your business.",
    benefits: [
      "Improved rankings for target keywords",
      "Increased organic traffic and qualified leads",
      "Better user experience and site performance",
      "Long-term sustainable growth",
      "Full keyword research and content strategy",
    ],
    impact: "Effective SEO can increase organic traffic by 300–400% over time — at a fraction of paid advertising costs.",
    color: "bg-violet-50",
    iconColor: "bg-violet-100 text-violet-600",
    accent: "border-violet-100",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    tagline: "Build your brand, grow your audience",
    description:
      "Elevate your brand across all social platforms. We create and manage engaging content that connects with your audience and drives business growth.",
    benefits: [
      "Consistent brand messaging everywhere",
      "Engaging content for your audience",
      "Regular posting and community management",
      "Analytics and performance reporting",
      "Paid campaign management when needed",
    ],
    impact: "Businesses with active social media presence see 23% more revenue growth compared to those without.",
    color: "bg-pink-50",
    iconColor: "bg-pink-100 text-pink-600",
    accent: "border-pink-100",
  },
  {
    icon: Smartphone,
    title: "Business Digitization",
    tagline: "From paper to cloud",
    description:
      "Transform traditional business processes into efficient digital workflows. Move from paper-based systems to cloud solutions that streamline operations and reduce costs.",
    benefits: [
      "Automated workflows reducing manual errors",
      "Cloud-based solutions for easy access",
      "Digital payment system integration",
      "Real-time data and analytics",
      "Team training on new digital tools",
    ],
    impact: "Business digitization can reduce operational costs by up to 30% and increase productivity by 20–25%.",
    color: "bg-emerald-50",
    iconColor: "bg-emerald-100 text-emerald-600",
    accent: "border-emerald-100",
  },
  {
    icon: Brain,
    title: "AI Integration & Workflow Automation",
    tagline: "Work smarter, not harder",
    description:
      "Incorporate AI into your existing workflows to automate tasks, gain insights, and make smarter decisions. From chatbots to predictive analytics — we make AI practical.",
    benefits: [
      "Automated repetitive tasks",
      "AI-powered chatbots for 24/7 support",
      "Predictive analytics for decision-making",
      "Intelligent document processing",
      "Personalized customer experiences at scale",
    ],
    impact: "AI integration can increase efficiency by 40% and reduce operational costs by 25–30% within the first year.",
    color: "bg-amber-50",
    iconColor: "bg-amber-100 text-amber-600",
    accent: "border-amber-100",
  },
]

export function ServicesPageContent() {
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
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Services</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className={`rounded-2xl border ${service.accent} ${service.color} overflow-hidden`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8 md:p-10">
                    <div className="grid md:grid-cols-5 gap-8">
                      {/* Left 3 cols */}
                      <div className="md:col-span-3">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${service.iconColor}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          {service.tagline}
                        </p>
                        <h2
                          className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                        <h3 className="text-sm font-semibold text-foreground mb-3">Key Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right 2 cols — impact card */}
                      <div className="md:col-span-2 flex flex-col justify-between">
                        <div className="bg-white/70 rounded-xl border border-white/80 p-6 mb-4">
                          <h3 className="text-sm font-semibold text-foreground mb-2">Business Impact</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.impact}</p>
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                        >
                          Get started with this service
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gray-50 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Tell us about your project. Free consultation, no long-term contracts, results within 30 days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors group"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
