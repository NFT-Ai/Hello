import type React from "react"
import "./globals.css"
import SiteHeader from "@/components/site-header"

export const metadata = {
  title: "Moja Strona",
  description: "Strona stworzona z Next.js i Sanity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}

