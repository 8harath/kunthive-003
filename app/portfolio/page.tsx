import { Header } from "@/components/header"
import { PortfolioPageContent } from "@/components/portfolio-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore Kunthive's portfolio of web applications, SEO campaigns, and digital transformation projects. Real results for real businesses.",
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
