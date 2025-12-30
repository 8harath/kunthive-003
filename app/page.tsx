import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnimatedFeaturesSection } from "@/components/animated-features-section"
import { FAQSection } from "@/components/faq-section"
import { HomeCTASection } from "@/components/home-cta-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <HeroSection />
          <AnimatedFeaturesSection />
          <FAQSection />
          <HomeCTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
