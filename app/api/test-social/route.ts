import { NextResponse } from 'next/server'
import crypto from 'crypto'

function oauthSign(method: string, url: string, params: Record<string, string>, consumerSecret: string, tokenSecret: string): string {
  const sorted = Object.keys(params).sort()
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')
  const base = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(sorted)}`
  const key = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`
  return crypto.createHmac('sha1', key).update(base).digest('base64')
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== process.env.AGGREGATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const envCheck = {
    BLUESKY_IDENTIFIER: !!process.env.BLUESKY_IDENTIFIER,
    BLUESKY_APP_PASSWORD: !!process.env.BLUESKY_APP_PASSWORD,
    TWITTER_API_KEY: !!process.env.TWITTER_API_KEY,
    TWITTER_API_SECRET: !!process.env.TWITTER_API_SECRET,
    TWITTER_ACCESS_TOKEN: !!process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_TOKEN_SECRET: !!process.env.TWITTER_ACCESS_TOKEN_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'NOT SET',
  }

  // Test Twitter directly and return raw response
  let twitterResult: any = 'skipped'
  if (process.env.TWITTER_API_KEY && process.env.TWITTER_API_SECRET &&
      process.env.TWITTER_ACCESS_TOKEN && process.env.TWITTER_ACCESS_TOKEN_SECRET) {
    const tweetUrl = 'https://api.twitter.com/2/tweets'
    const text = `CryptoVibes test post — ignore this ${Date.now()}`
    const oauthParams: Record<string, string> = {
      oauth_consumer_key:     process.env.TWITTER_API_KEY,
      oauth_nonce:            crypto.randomBytes(16).toString('hex'),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp:        Math.floor(Date.now() / 1000).toString(),
      oauth_token:            process.env.TWITTER_ACCESS_TOKEN,
      oauth_version:          '1.0',
    }
    const sig = oauthSign('POST', tweetUrl, oauthParams,
      process.env.TWITTER_API_SECRET,
      process.env.TWITTER_ACCESS_TOKEN_SECRET)
    const authHeader = 'OAuth ' + Object.entries({ ...oauthParams, oauth_signature: sig })
      .map(([k, v]) => `${encodeURIComponent(k)}="${encodeURIComponent(v)}"`)
      .join(', ')
    try {
      const res = await fetch(tweetUrl, {
        method: 'POST',
        headers: { Authorization: authHeader, 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const body = await res.json()
      twitterResult = { status: res.status, body }
    } catch (e: any) {
      twitterResult = { error: e.message }
    }
  }

  return NextResponse.json({ envCheck, twitterResult })
}
