import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ContextProvider from "@/components/contextProvider";
import './globals.css'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://godrej-elaris.in'),

  title: {
    default: 'Godrej Elaris – Luxury Residences in Magarpatta, Hadapsar, Pune',
    template: '%s | Godrej Elaris – Luxury Residences in Magarpatta, Hadapsar, Pune',
  },

  description: 'Discover Godrej Elaris in Magarpatta, Hadapsar, Pune. Exclusive 12-acre luxury community offering premium 2, 3 & 4 BHK residences with world-class amenities and green views',

  keywords: [
    "Godrej Properties Pune new launch",
    "Godrej Properties Pune",
    "Godrej Elaris",
    "Godrej Mundhwa",
    "Godrej Magarpatta",
    "Godrej Hadapsar",
    "Godrej New launch in Pune",
    "Godrej new launch in Magarpatta",
    "Godrej new launch in Hadapsar",
    "Godrej new launch in Mundhwa",
    "Godrej New Project in Mundhwa",
    "Godrej New Project In Magarpatta",
    "Godrej New Project In Hadapsar"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://godrej-elaris.in/',
    siteName: 'Godrej Elaris – Luxury Residences in Magarpatta, Hadapsar, Pune',
    title: 'Godrej Elaris – Luxury Residences in Magarpatta, Hadapsar, Pune',
    description: 'Discover Godrej Elaris in Magarpatta, Hadapsar, Pune. Exclusive 12-acre luxury community offering premium 2, 3 & 4 BHK residences with world-class amenities and green views',
    images: [
      {
        url: '/godrejlogo.png',
        width: 1200,
        height: 630,
        alt: 'Godrej Properties Logo',
      },
    ],
  },
  verification: {
    google: 'g1vSw49Ki5K1E3YemDfKItEI7GkktB9c-tpgQHmDJ-g',
  },

  alternates: {
    canonical: 'https://godrej-elaris.in/',
  },

  category: 'Real Estate',

  // Additional metadata for single-page site
  other: {
    'article:section': 'Real Estate',
    'og:type': 'website',
  },

}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
