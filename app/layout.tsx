import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Stripe Invoice Auto-Chaser — Stop chasing invoices manually",
  description: "Automatically follow up on overdue Stripe invoices with smart escalation sequences. Built for freelancers, consultants, and small agencies."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="81b64b54-bdf1-419f-80f6-e4b6e85a6e0b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
