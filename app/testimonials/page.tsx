import { Header } from "@/components/header"
import { TestimonialsPageContent } from "@/components/testimonials-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what our clients say about Kunthive's digital solutions. Real results from real businesses in Bangalore — web apps, SEO, social media, and AI integration.",
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
