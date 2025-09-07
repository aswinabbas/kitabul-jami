import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono';
import { Inter, Roboto_Mono, Scheherazade_New } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Sans (pengganti Geist)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Monospace (pengganti Geist_Mono)
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})


// Arabic font
const scheherazadeNew = Scheherazade_New({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-scheherazade",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kitabul Jami - Bulughul Maram",
  description: "Koleksi Bulughul Maram dengan terjemahan dan catatan",
  generator: "Umaraya Lab",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kitabul Jami",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Kitabul Jami",
    title: "Kitabul Jami - Bulughul Maram",
    description: "Koleksi Bulughul Maram dengan terjemahan dan catatan",
  },
  twitter: {
    card: "summary",
    title: "Kitabul Jami - Bulughul Maram",
    description: "Koleksi Bulughul Maram dengan terjemahan dan catatan",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      // className={`dark ${inter.variable} ${robotoMono.variable} ${scheherazadeNew.variable}`}
      className={`dark ${GeistSans.variable} ${GeistMono.variable} ${scheherazadeNew.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="apple-touch-icon"
          href="/placeholder.svg?height=192&width=192"
        />
      </head>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
