import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — CryptoVibes',
  description: 'What CryptoVibes is, why we built it, and what makes it different.',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-4">
      <div className="card p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            ⛓ About CryptoVibes
          </h1>
          <p className="text-brand-500 font-medium text-sm">Credible Rundown of Daily Crypto News</p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          CryptoVibes is a community-powered crypto and blockchain news aggregator.
          We pull from 30+ trusted sources around the world — and let real people
          submit, vote on, and discuss what actually matters.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Every story on CryptoVibes carries a <strong className="text-gray-800 dark:text-gray-100">Credibility Score</strong> —
          a rating built from the source's reputation, community votes, and submitter history.
          No more guessing whether a headline is signal or noise.
        </p>

        <div className="border-l-4 border-brand-500 pl-4 space-y-2">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">What makes us different</p>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1.5">
            <li>🏅 <strong>Credibility Score</strong> on every story — not just engagement metrics</li>
            <li>🧵 <strong>Narrative Threading</strong> — follow a story as it develops over time</li>
            <li>🪦 <strong>Misinformation Graveyard</strong> — debunked stories don't disappear, they're archived</li>
            <li>💼 <strong>Skin-in-the-Game Disclosure</strong> — submitters declare token holdings upfront</li>
            <li>🌍 <strong>Global Signal Mining</strong> — sources from Korea, Japan, and beyond, translated</li>
            <li>🔮 <strong>Community Predictions</strong> — timestamped forecasts with public track records</li>
          </ul>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          CryptoVibes is free to use. If you want an ad-free experience and early access
          to alpha stories, <Link href="/pro" className="text-brand-500 hover:underline font-medium">go Pro for $7/mo</Link>.
        </p>

        <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-sm">
          <a href="https://x.com/cryptovibesapp" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-sky-500 transition-colors">𝕏 @cryptovibesapp</a>
          <a href="https://bsky.app/profile/cryptovibes.bsky.social" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors">🦋 cryptovibes.bsky.social</a>
          <Link href="/submit" className="text-brand-500 hover:underline">Submit a story →</Link>
        </div>
      </div>
    </div>
  )
}
