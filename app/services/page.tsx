import { Header } from "@/components/header"
import { ServicesPageContent } from "@/components/services-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Web Development, SEO, Social Media, AI Integration | Kunthive",
  description:
    "Comprehensive digital services including web application development, SEO optimization, social media management, business digitization, and AI integration. Transform your business with Kunthive's expert solutions in Bangalore.",
  keywords: [
    "web development services",
    "SEO services Bangalore",
    "social media management",
    "business digitization services",
    "AI integration services",
    "web application development Bangalore",
    "digital transformation services",
    "workflow automation",
    "custom web applications",
    "SEO optimization services",
  ],
  openGraph: {
    title: "Services - Digital Solutions by Kunthive",
    description:
      "Comprehensive digital services including web development, SEO, social media management, business digitization, and AI integration.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  )
}

