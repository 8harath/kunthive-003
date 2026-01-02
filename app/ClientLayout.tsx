"use client"

import type React from "react"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense
      fallback={
        <div className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-white`}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      }
    >
      <div className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>
        {children}
      </div>
    </Suspense>
  )
}
