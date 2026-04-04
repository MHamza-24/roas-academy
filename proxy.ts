import { NextRequest, NextResponse } from 'next/server'

const SESSION_TOKEN = 'roas-admin-2026-secured'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session')
  const { pathname } = request.nextUrl

  const isLoginPage = pathname === '/admin/login'
  const isApiLogin = pathname.startsWith('/api/admin/login')

  if (isLoginPage || isApiLogin) return NextResponse.next()

  if (pathname.startsWith('/admin')) {
    if (session?.value !== SESSION_TOKEN) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/leads/:path*'],
}