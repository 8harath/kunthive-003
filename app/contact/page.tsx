import { Header } from "@/components/header"
import { ContactPageContent } from "@/components/contact-page-content"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  )
}

