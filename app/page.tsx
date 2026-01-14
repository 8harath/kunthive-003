import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnimatedFeaturesSection } from "@/components/animated-features-section"
import { TestimonialsStrip } from "@/components/testimonials-strip"
import { HomeCTASection } from "@/components/home-cta-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <AnimatedFeaturesSection />
          <TestimonialsStrip />
          <HomeCTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
