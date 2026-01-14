"use client"

import { motion } from "framer-motion"
import { PortfolioCard, type PortfolioProject } from "./portfolio-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects: PortfolioProject[] = [
  {
    title: "E-commerce Platform Revamp",
    client: "Local Retail Chain, Bangalore",
    category: "Web Application",
    description:
      "Built a modern e-commerce platform for a local retail chain transitioning from in-store to online sales. Included inventory management, payment integration, and order tracking.",
    results: ["220% increase in online sales in 3 months", "Reduced cart abandonment by 35%", "Mobile conversion rate improved by 60%"],
    tags: ["Next.js", "Stripe", "Inventory Management", "Mobile-first"],
    color: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "SEO & Content Strategy",
    client: "B2B Services Company, Bangalore",
    category: "SEO Optimization",
    description:
      "Comprehensive SEO overhaul for a B2B services company struggling with low organic visibility. Included technical audit, content strategy, and link-building campaign.",
    results: ["380% increase in organic traffic in 6 months", "First page rankings for 18 target keywords", "45% reduction in cost-per-lead"],
    tags: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
    color: "bg-violet-50",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    title: "Social Media Growth Campaign",
    client: "Restaurant Group, Bangalore",
    category: "Social Media",
    description:
      "Built a complete social media presence for a restaurant group from scratch — content creation, influencer partnerships, and community management across all platforms.",
    results: ["0 to 15K followers in 4 months", "40% increase in foot traffic from social referrals", "3.2% average engagement rate (vs 0.7% industry avg)"],
    tags: ["Instagram", "Content Creation", "Influencer Outreach", "Community"],
    color: "bg-pink-50",
    iconBg: "bg-pink-100 text-pink-600",
  },
  {
    title: "Operations Digitization",
    client: "Manufacturing SME, Bangalore",
    category: "Business Digitization",
    description:
      "Converted a fully paper-based manufacturing operation to a cloud-based system with real-time inventory tracking, digital purchase orders, and automated supplier communications.",
    results: ["28% reduction in operational costs", "Eliminated manual data entry errors (was 12% error rate)", "Real-time visibility into inventory levels"],
    tags: ["Cloud Migration", "Process Automation", "ERP Integration", "Training"],
    color: "bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "AI Customer Support Bot",
    client: "EdTech Startup, Bangalore",
    category: "AI Integration",
    description:
      "Integrated an AI-powered support chatbot into an EdTech platform to handle common student queries, reducing support ticket volume and improving response times.",
    results: ["72% of support tickets resolved without human intervention", "Response time reduced from 4 hours to under 2 minutes", "Support team now focuses on complex issues only"],
    tags: ["Chatbot", "NLP", "Support Automation", "EdTech"],
    color: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Full Digital Presence Build",
    client: "Local Law Firm, Bangalore",
    category: "Web Application + SEO",
    description:
      "End-to-end digital presence build for a traditional law firm — new website, local SEO, Google Business optimization, and a client portal for document sharing.",
    results: ["First page Google for 8 local search terms in 60 days", "300% increase in consultation enquiries", "Client portal reduced document exchange time by 80%"],
    tags: ["Web Development", "Local SEO", "Client Portal", "Google Business"],
    color: "bg-gray-50",
    iconBg: "bg-gray-100 text-gray-600",
  },
]

export function PortfolioPageContent() {
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
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Portfolio</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real projects, real results. Here's how we've helped businesses across Bangalore grow, scale, and compete digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50 border-t border-border">
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
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's talk about your project and how we can help you achieve similar outcomes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors group"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
