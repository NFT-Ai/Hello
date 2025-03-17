import type React from "react"
export const metadata = {
  title: "Sanity Studio",
  description: "Content management for your website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

