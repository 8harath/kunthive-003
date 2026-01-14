"use client"

import { motion } from "framer-motion"
import { TestimonialCard, type Testimonial } from "./testimonial-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "GreenLeaf Organics",
    content:
      "Kunthive built our entire e-commerce platform from scratch. Within 3 months of launch our online revenue exceeded our in-store revenue. The team was professional, communicative, and delivered exactly what they promised.",
    rating: 5,
    category: "Web App",
  },
  {
    name: "Rajan Mehta",
    role: "Director",
    company: "Mehta & Associates",
    content:
      "Our law firm had zero online presence. Kunthive built us a website, set up local SEO, and within 60 days we were ranking on page 1 for key search terms. Consultation enquiries have tripled.",
    rating: 5,
    category: "SEO",
  },
  {
    name: "Ananya Krishnan",
    role: "Marketing Head",
    company: "Spice Route Restaurants",
    content:
      "The social media growth Kunthive delivered was remarkable. We went from no real online presence to 15K+ engaged followers in under 5 months. Our weekend bookings increased 40% from social referrals alone.",
    rating: 5,
    category: "Social Media",
  },
  {
    name: "Vikram Patel",
    role: "Operations Manager",
    company: "Patel Fabrications",
    content:
      "We were running everything on paper. Kunthive digitized our entire operations — purchase orders, inventory, supplier communications. We cut our operational costs by nearly 30% in the first year.",
    rating: 5,
    category: "Digitization",
  },
  {
    name: "Deepa Nair",
    role: "CEO",
    company: "LearnSphere EdTech",
    content:
      "The AI chatbot Kunthive integrated handles 72% of our student support queries automatically. Our support team went from overwhelmed to strategic. Implementation was smooth and the team was incredibly responsive.",
    rating: 5,
    category: "AI Integration",
  },
  {
    name: "Suresh Kumar",
    role: "Owner",
    company: "Kumar Electronics",
    content:
      "As a traditional electronics retailer we were skeptical about going digital. Kunthive guided us through the entire process — website, inventory, social media. Our sales have never been better.",
    rating: 5,
    category: "Web App",
  },
  {
    name: "Meena Iyer",
    role: "Co-founder",
    company: "FreshBox Deliveries",
    content:
      "Kunthive improved our SEO rankings dramatically. We rank first for most of our target local keywords now. The organic traffic growth means we spend far less on paid ads than before.",
    rating: 5,
    category: "SEO",
  },
  {
    name: "Arjun Reddy",
    role: "Director",
    company: "Reddy Infrastructure",
    content:
      "What impressed me most was how young the Kunthive team is, yet how professionally they work. They delivered our project on time, within budget, and provided excellent post-launch support.",
    rating: 5,
    category: "Web App",
  },
]

export function TestimonialsPageContent() {
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
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Testimonials</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Don't take our word for it — hear from the businesses we've helped grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, index) => (
              <TestimonialCard key={t.name} testimonial={t} index={index} />
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
              Ready to Join Them?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and how we can help your business grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
