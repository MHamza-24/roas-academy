import { NextRequest, NextResponse } from 'next/server'

// Token fixe pour la session — indépendant de l'env
const SESSION_TOKEN = 'roas-admin-2026-secured'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const isApiLogin = request.nextUrl.pathname.startsWith('/api/admin/login')

  if (isLoginPage || isApiLogin) return NextResponse.next()

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (session?.value !== SESSION_TOKEN) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}