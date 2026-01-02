import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: {
    default: "Kunthive — Digital Solutions for Modern Businesses",
    template: "%s | Kunthive",
  },
  description: "Kunthive delivers professional digital solutions — web applications, SEO, social media management, business digitization, and AI workflow automation. Based in Bangalore.",
  keywords: [
    "Kunthive",
    "digital solutions",
    "web applications",
    "web app development",
    "SEO optimization",
    "SEO services",
    "social media management",
    "business digitization",
    "AI integration",
    "workflow automation",
    "Bangalore",
    "digital transformation",
    "local business solutions",
    "web development Bangalore",
    "SEO services Bangalore",
    "social media marketing",
    "business automation",
    "AI-powered solutions",
    "digital marketing",
    "website development",
  ],
  authors: [{ name: "Kunthive" }],
  creator: "Kunthive",
  publisher: "Kunthive",
  generator: "Next.js",
  applicationName: "Kunthive",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kunthive.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Kunthive",
    title: "Kunthive - Digital Solutions for Modern Businesses",
    description: "Transform your business with web applications, SEO optimization, social media management, business digitization, and AI-powered workflow automation. Based in Bangalore.",
    images: [
      {
        url: "/Logo/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Kunthive Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunthive - Digital Solutions for Modern Businesses",
    description: "Transform your business with web applications, SEO optimization, social media management, business digitization, and AI-powered workflow automation.",
    images: ["/Logo/android-chrome-512x512.png"],
    creator: "@Kunthive",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/Logo/favicon.ico", sizes: "any" },
      { url: "/Logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/Logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
