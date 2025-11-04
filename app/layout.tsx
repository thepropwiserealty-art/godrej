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
    default: 'Godrej Properties : Magarpatta City',
    template: '%s | Godrej Properties',
  },  
  
  description: 'Discover the Godrej Properties. Explore luxury 3BHK & 4BHK apartments with world-class amenities in prime locations.',
  
  keywords: [
    'Mantra Realty',
    'Godrej Properties',
    'Burgundy Series',
    'Marvilla Villas',
    'Mayfair Residences',
    'One Residences',
    'luxury apartments',
    'premium properties',
    '3BHK apartments',
    '4BHK apartments',
    'luxury villas',
    'real estate',
    'premium amenities',
    'swimming pool',
    'fitness center',
    'luxury living'
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
    siteName: 'Mantra Realty - Burgundy Series',
    title: 'Burgundy Series - Luxury Properties by Mantra Realty',
    description: 'Explore luxury living with Marvilla Villas, Mayfair River Residences, and One Residences. Premium properties with exceptional amenities and thoughtfully designed floor plans.',
    images: [
      {
        url: '/godrejlogo.png',
        width: 1200,
        height: 630,
        alt: 'Godrej Properties Logo',
      },
    ],
  },
  // verification: {
  //   google: 'your-google-verification-code',
  //   // yandex: 'your-yandex-verification-code',
  //   // bing: 'your-bing-verification-code',
  // },
  
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
