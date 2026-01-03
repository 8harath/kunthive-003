import { LeLoLogo } from "./lelo-logo"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/Kunthive" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/Kunthive" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/Kunthive" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/Kunthive" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@Kunthive" },
  { name: "GitHub", icon: Github, url: "https://github.com/Kunthive" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  "Web Applications",
  "SEO Optimization",
  "Social Media",
  "Business Digitization",
  "AI Integration",
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <LeLoLogo className="mb-4" />
            <p className="text-sm text-muted-foreground mb-5 max-w-xs leading-relaxed">
              Empowering businesses with professional digital solutions. Based in Bangalore.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@kunthive.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@kunthive.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Bangalore, India</li>
              <li className="text-sm text-muted-foreground">Responds within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">&copy; 2026 Kunthive. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <p className="text-xs text-muted-foreground">Built with care in Bangalore</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
