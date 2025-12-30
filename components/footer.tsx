import { LeLoLogo } from "./lelo-logo"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/Kunthive" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/Kunthive" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/Kunthive" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/Kunthive" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@Kunthive" },
    { name: "GitHub", icon: Github, url: "https://github.com/Kunthive" },
  ]

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <LeLoLogo className="mb-4" />
            <p className="text-white/70 mb-6 max-w-md">
              Empowering businesses with comprehensive digital solutions. From web applications to AI integration, we help transform your business for the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Web Applications
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  SEO Optimization
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Social Media Management
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Business Digitization
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  AI Integration
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2026 Kunthive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
