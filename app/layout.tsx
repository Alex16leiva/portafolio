import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Alexander Castellanos – Full Stack Developer",
    template: "%s | Alexander Castellanos",
  },
  description:
    "Full Stack Developer specialized in ASP.NET Core, React, SQL Server, and Clean Architecture. Building scalable and maintainable software solutions.",
  metadataBase: new URL("https://alex16leiva.github.io/portafolio"),
  keywords: [
    "Full Stack Developer",
    "ASP.NET Core",
    "React",
    "SQL Server",
    "Clean Architecture",
    "Software Engineer",
  ],
  authors: [{ name: "Alexander Castellanos" }],
  creator: "Alexander Castellanos",
  openGraph: {
    title: "Alexander Castellanos – Full Stack Developer",
    description:
      "Portfolio of Alexander Castellanos, Full Stack Developer specialized in ASP.NET Core, React, and scalable architectures.",
    url: "https://alex16leiva.github.io/portafolio",
    siteName: "Alexander Castellanos Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alexander Castellanos – Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Castellanos – Full Stack Developer",
    description:
      "ASP.NET Core & React developer focused on clean, scalable solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0NNLC0WMBR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NNLC0WMBR');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
