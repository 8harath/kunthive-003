import { Header } from "@/components/header"
import { AboutPageContent } from "@/components/about-page-content"
import { Footer } from "@/components/footer"
import { metadata as aboutMetadata } from "./metadata"

export const metadata = aboutMetadata

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  )
}

