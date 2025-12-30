import { LeLoLogo } from "./lelo-logo"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"
import { BackgroundPaths } from "./ui/floating-paths"
import Link from "next/link"

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
    <footer className="relative bg-black border-t border-white/10 py-6 md:py-8 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <BackgroundPaths />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="col-span-2 md:col-span-1">
            <LeLoLogo className="mb-2 md:mb-3" />
            <p className="text-xs md:text-sm text-white/70 mb-3 md:mb-4 max-w-md">
              Empowering businesses with comprehensive digital solutions.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
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
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-2 md:mb-3">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-2 md:mb-3">Services</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white/70">
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
                  Social Media
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Digitization
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

        <div className="border-t border-white/10 mt-4 md:mt-6 pt-4 md:pt-6 text-center text-xs md:text-sm text-white/50">
          <p>&copy; 2026 Kunthive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
