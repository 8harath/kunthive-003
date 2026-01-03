import { Header } from "@/components/header"
import { ContactPageContent } from "@/components/contact-page-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Kunthive",
  description:
    "Contact Kunthive for digital solutions. Based in Bangalore, we help businesses with web development, SEO, social media management, digitization, and AI integration. Get in touch today!",
  keywords: [
    "contact Kunthive",
    "digital solutions Bangalore",
    "web development contact",
    "SEO services contact",
    "Bangalore tech services",
  ],
  openGraph: {
    title: "Contact Kunthive - Get in Touch",
    description: "Contact Kunthive for digital solutions. Based in Bangalore, ready to transform your business.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  )
}

