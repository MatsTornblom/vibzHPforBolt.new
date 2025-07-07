import { Inter } from "next/font/google"
import StyledComponentsRegistry from "./registry"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vibz - Spread love, not fud",
  description: "Spread love and positivity with Vibz",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vibz World</title>
        <meta
          name="description"
          content="Spread love and positivity with Vibz World!"
        />

        {/* Favicon och ikoner */}
        <link rel="icon" type="image/png" href="/flowerFav.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/flowerFav.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph (Facebook, LinkedIn m.m.) */}
        <meta property="og:title" content="Vibz World" />
        <meta
          property="og:description"
          content="Spread love and positivity with Vibz World!"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/vibz-share.png`}
        />
        <meta property="og:url" content="https://vibz.fun" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibz World" />
        <meta
          name="twitter:description"
          content="Spread love and positivity with Vibz World!"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/vibz-share.png`}
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
