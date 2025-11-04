import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://godrej-elaris.in'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}