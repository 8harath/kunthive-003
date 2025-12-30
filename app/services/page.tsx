import { Header } from "@/components/header"
import { ServicesPageContent } from "@/components/services-page-content"
import { Footer } from "@/components/footer"
import { metadata as servicesMetadata } from "./metadata"

export const metadata = servicesMetadata

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  )
}

