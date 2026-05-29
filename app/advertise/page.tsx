import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Advertise — CryptoVibes',
  description: 'Reach a highly engaged crypto audience. Advertise on CryptoVibes.',
}

export default function AdvertisePage() {
  return (
    <div className="max-w-2xl mx-auto py-4">
      <div className="card p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">📢 Advertise on CryptoVibes</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Reach a highly engaged, crypto-native audience.</p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          CryptoVibes serves community-ranked crypto and blockchain news to readers who are actively
          following the market. Our audience submits stories, votes on headlines, and makes public
          predictions — these are engaged participants, not passive scrollers.
        </p>

        {/* Ad options */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 dark:text-gray-200">Advertising Options</h2>

          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">📌 Pinned Story</h3>
              <span className="badge bg-brand-100 text-brand-700">$50–$200</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your story pinned to the top of the feed for 24–72 hours. Clearly labelled as sponsored.
              Best for project launches, protocol announcements, and token news.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">🏷 Banner Ad</h3>
              <span className="badge bg-brand-100 text-brand-700">Self-serve via A-ADS</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Display banner at the top of the homepage feed. Book directly via{' '}
              <a href="https://a-ads.com" target="_blank" rel="noopener noreferrer"
                className="text-brand-500 hover:underline">a-ads.com</a> — instant setup, pay in crypto.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">🧵 Narrative Sponsorship</h3>
              <span className="badge bg-brand-100 text-brand-700">$100–$500</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sponsor a Narrative thread relevant to your project. Your brand appears alongside all
              stories in that thread for the duration of the sponsorship.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-xl p-5">
          <h3 className="font-bold text-brand-700 dark:text-brand-300 mb-1">Get in touch</h3>
          <p className="text-sm text-brand-600 dark:text-brand-400 mb-3">
            Email us with your campaign goals and we'll put together a custom package.
          </p>
          <a href="mailto:advertise@cryptovibes.app"
            className="btn-primary inline-block text-sm">
            ✉️ advertise@cryptovibes.app
          </a>
        </div>

        <p className="text-xs text-gray-400 text-center">
          All sponsored content is clearly labelled. We do not publish misleading or unverified claims.
          <Link href="/about" className="text-brand-500 hover:underline ml-1">Learn more about CryptoVibes →</Link>
        </p>
      </div>
    </div>
  )
}
