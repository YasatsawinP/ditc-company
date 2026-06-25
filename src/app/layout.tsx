import type { Metadata } from "next"
import { Noto_Sans_Thai } from "next/font/google"
import "./globals.css"

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DITC — Digital Innovation and Transformation Center",
  description: "A central hub for learning & skill development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
