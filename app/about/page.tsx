import { Header } from "@/components/header"
import { AboutPageContent } from "@/components/about-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Student Team in Bangalore | Kunthive",
  description:
    "Kunthive is managed by passionate undergraduate students in Bangalore dedicated to helping local businesses thrive through digital transformation. Learn about our mission and commitment to making a meaningful impact.",
  keywords: [
    "Kunthive about",
    "digital solutions Bangalore",
    "student entrepreneurs",
    "Bangalore tech startup",
    "local business support",
    "digital transformation team",
  ],
  openGraph: {
    title: "About Kunthive - Student Team in Bangalore",
    description:
      "Passionate undergraduate students in Bangalore helping local businesses thrive through digital transformation.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  )
}

