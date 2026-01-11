"use client"

import { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@kunthive.com",
    href: "mailto:contact@kunthive.com",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    color: "bg-amber-50 text-amber-600",
  },
]

export function ContactPageContent() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id"
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id"
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (err) {
      console.error("EmailJS error:", err)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50 border-b border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Contact</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? Tell us about it and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to build a web application, improve your SEO, manage social media,
                digitize your business, or integrate AI — we're here to help. Reach out and let's discuss
                how we can make an impact on your business.
              </p>

              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="cp-name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input
                      id="cp-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      id="cp-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      id="cp-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Message sent! We'll respond within 24 hours.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      Something went wrong. Please email us at contact@kunthive.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
