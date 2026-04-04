import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session')
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const isApiLogin = request.nextUrl.pathname === '/api/admin/login'

  // Laisser passer la page login et l'API login
  if (isLoginPage || isApiLogin) return NextResponse.next()

  // Protéger toutes les pages /admin
  if (isAdminPage) {
    if (!session || session.value !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}