import type React from "react"
import type { Metadata, Viewport } from "next"
import { Orbitron, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import SiemLogger from "@/components/SiemLogger"   // ✅ ADD THIS

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Print & Play | Gaming Lounge + 3D Maker Studio",
  description:
    "Where digital battles meet physical creations. Esports gaming area, on-demand 3D printing, STEM workshops, and custom merch.",
  keywords: ["gaming lounge", "3D printing", "esports", "STEM workshops", "maker studio", "Bihar"],
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${poppins.variable} font-sans antialiased`}>
        
        {/* 🔥 SIEM LOGGER */}
        <SiemLogger />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
