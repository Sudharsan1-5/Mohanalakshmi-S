console.log("LAYOUT LOADED");

import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohanalakshmi S - Data Scientist & Analyst Portfolio",
  description:
    "Entry-Level Data Scientist | Data Analyst - Applying machine learning, data analysis, and visualization to deliver actionable business insights.",
  keywords: ["Data Scientist", "Data Analyst", "Machine Learning", "Python", "SQL", "Power BI"],
  authors: [{ name: "Mohanalakshmi S" }],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
