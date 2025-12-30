import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Kunthive - Digital Solutions for Modern Businesses",
  description: "Transform your business with web applications, SEO optimization, social media management, business digitization, and AI-powered workflow automation.",
  generator: "v0.app",
  manifest: "/manifest.json",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
