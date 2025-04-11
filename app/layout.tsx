import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MovingBanner } from "@/components/moving-banner"
import { AIChatbot } from "@/components/ai-chatbot"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "BeyondMeasure - Empowering Educators",
  description: "Measure what matters most in student learning and growth",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col">
          <MovingBanner />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <AIChatbot />
        </div>
      </body>
    </html>
  )
}


import './globals.css'