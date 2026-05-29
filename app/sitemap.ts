import { MetadataRoute } from 'next'

const appUrl = 'https://cryptovibes.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${appUrl}`,             lastModified: new Date(), changeFrequency: 'hourly',  priority: 1.0 },
    { url: `${appUrl}/about`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${appUrl}/submit`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${appUrl}/narratives`,  lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${appUrl}/predictions`, lastModified: new Date(), changeFrequency: 'daily',   priority: 0.7 },
    { url: `${appUrl}/graveyard`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${appUrl}/regulation`,  lastModified: new Date(), changeFrequency: 'daily',   priority: 0.7 },
    { url: `${appUrl}/pro`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${appUrl}/advertise`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Fetch stories from public API (no service role key needed)
  try {
    const res = await fetch(
      `${appUrl}/api/stories?sort=new&limit=100`,
      { next: { revalidate: 3600 } }
    )
    if (res.ok) {
      const { data: stories } = await res.json()
      const storyPages: MetadataRoute.Sitemap = (stories ?? []).map((s: { id: string; published_at: string }) => ({
        url: `${appUrl}/story/${s.id}`,
        lastModified: new Date(s.published_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
      return [...staticPages, ...storyPages]
    }
  } catch { /* fall through to static only */ }

  return staticPages
}
