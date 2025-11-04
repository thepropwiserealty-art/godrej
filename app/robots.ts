import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/'
        ],
      },
      // Optional: Specific rules for different bots
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: 'https://godrej-elaris.in//sitemap.xml',
  }
}