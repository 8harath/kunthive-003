"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic web app consultation",
      "SEO audit & report",
      "Social media management (2 platforms)",
      "Digital transformation plan",
      "AI workflow assessment",
    ],
    cta: "Get Started",
    popular: false,
    bg: "bg-white",
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Best for growing businesses",
    features: [
      "Custom web application development",
      "Comprehensive SEO optimization",
      "Social media management (all platforms)",
      "Full business digitization",
      "AI integration & automation",
      "Priority support",
      "Monthly strategy reviews",
    ],
    cta: "Get Started",
    popular: true,
    bg: "bg-primary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Enterprise web solutions",
      "Advanced SEO & content strategy",
      "Dedicated social media team",
      "Complete digital transformation",
      "Custom AI solutions",
      "24/7 dedicated support",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
    bg: "bg-white",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-white border-t border-border">
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
            Pricing
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Flexible plans tailored to your business. All plans include consultation and support.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white border-border"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    <Zap className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.popular ? "text-blue-200" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.popular ? "text-blue-100" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-blue-200" : "text-primary"}`}
                    />
                    <span className={plan.popular ? "text-blue-50" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors group ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-blue-50"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-10 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial · No credit card required
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Talk to our team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
