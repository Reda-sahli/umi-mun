import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })



export const metadata: Metadata = {
  title: "UMI-MUN | Model United Nations – Moulay Ismail University",
  description: "Experience Diplomacy. Shape the Future. Join UMI-MUN.",
  generator: 'Sahli Reda ',
  icons: {
    icon: [
      { url: '/mun.png', sizes: 'any' },
      { url: '/mun.png', type: 'image/svg+xml' }
    ],
    apple: '/mun.png',
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
