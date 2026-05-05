import { NextRequest, NextResponse } from 'next/server'

type RateEntry = { count: number; resetAt: number }
const ipMap = new Map<string, RateEntry>()

const LIMITS: Record<string, { max: number; windowMs: number }> = {
  '/api/inscription':  { max: 5,  windowMs: 60_000 },
  '/api/admin/login':  { max: 10, windowMs: 60_000 },
}

function getIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

export function proxy(request: NextRequest) {
  const limit = LIMITS[request.nextUrl.pathname]
  if (!limit) return NextResponse.next()

  const ip = getIp(request)
  const key = `${ip}:${request.nextUrl.pathname}`
  const now = Date.now()
  const entry = ipMap.get(key)

  if (!entry || now > entry.resetAt) {
    ipMap.set(key, { count: 1, resetAt: now + limit.windowMs })
  } else if (entry.count >= limit.max) {
    return NextResponse.json(
      { error: 'Trop de requêtes, réessayez dans une minute.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    )
  } else {
    entry.count++
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/inscription', '/api/admin/login'],
}