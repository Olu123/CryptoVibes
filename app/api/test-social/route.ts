import { NextResponse } from 'next/server'
import { announceStory } from '@/lib/social'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== process.env.AGGREGATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Check env vars are present
  const envCheck = {
    BLUESKY_IDENTIFIER: !!process.env.BLUESKY_IDENTIFIER,
    BLUESKY_APP_PASSWORD: !!process.env.BLUESKY_APP_PASSWORD,
    TWITTER_API_KEY: !!process.env.TWITTER_API_KEY,
    TWITTER_API_SECRET: !!process.env.TWITTER_API_SECRET,
    TWITTER_ACCESS_TOKEN: !!process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_TOKEN_SECRET: !!process.env.TWITTER_ACCESS_TOKEN_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'NOT SET',
  }

  let postResult = 'not attempted'
  try {
    await announceStory(
      'CryptoVibes test post — ignore this',
      'https://cryptovibes.vercel.app',
      'test-story-id'
    )
    postResult = 'success'
  } catch (e: any) {
    postResult = `error: ${e.message}`
  }

  return NextResponse.json({ envCheck, postResult })
}
