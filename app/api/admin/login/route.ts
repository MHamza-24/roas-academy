import { NextRequest, NextResponse } from 'next/server'

const SESSION_TOKEN = 'roas-admin-2026-secured'
const ADMIN_PASSWORD = 'TIMA2805tima@'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name: 'admin_session',
    value: SESSION_TOKEN,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin_session')
  return response
}