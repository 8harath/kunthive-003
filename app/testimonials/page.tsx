import { Header } from "@/components/header"
import { TestimonialsPageContent } from "@/components/testimonials-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Client reviews and testimonials for Kunthive's digital solutions. Hear from businesses in Bangalore who've grown with our web apps, SEO, social media management, and AI integration services.",
  keywords: [
    "Kunthive reviews",
    "client testimonials",
    "digital agency reviews Bangalore",
    "web development reviews",
    "SEO success stories",
  ],
  openGraph: {
    title: "Client Testimonials | Kunthive",
    description: "Hear from the businesses we've helped grow with digital solutions.",
    url: "/testimonials",
  },
  alternates: {
    canonical: "/testimonials",
  },
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <TestimonialsPageContent />
      </main>
      <Footer />
    </div>
  )
}
