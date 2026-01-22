import { Header } from "@/components/header"
import { PortfolioPageContent } from "@/components/portfolio-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore Kunthive's portfolio — web apps, SEO campaigns, social media growth, business digitization, and AI integration projects. Real results for businesses across Bangalore.",
  keywords: [
    "Kunthive portfolio",
    "web development case studies",
    "SEO success stories",
    "digital transformation Bangalore",
    "client projects",
  ],
  openGraph: {
    title: "Portfolio & Case Studies | Kunthive",
    description: "Real projects, real results. Explore how Kunthive has helped businesses grow digitally.",
    url: "/portfolio",
  },
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <PortfolioPageContent />
      </main>
      <Footer />
    </div>
  )
}
