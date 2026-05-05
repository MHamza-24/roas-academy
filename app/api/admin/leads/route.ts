import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN!

const ALLOWED_STATUTS = ['nouveau', 'contacté', 'payé', 'annulé'] as const

function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get('admin_session')
  return cookie?.value === SESSION_TOKEN
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  const { data, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: 'Erreur base de données' }, { status: 500 })
  return NextResponse.json({ leads: data })
}

export async function PATCH(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  let body: unknown
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }
  const { id, statut } = body as Record<string, unknown>
  if (typeof id !== 'string' || !id.trim())
    return NextResponse.json({ error: 'ID invalide' }, { status: 400 })
  if (!ALLOWED_STATUTS.includes(statut as typeof ALLOWED_STATUTS[number]))
    return NextResponse.json({ error: 'Statut invalide' }, { status: 400 })
  const { error } = await supabaseAdmin.from('leads').update({ statut }).eq('id', id)
  if (error) return NextResponse.json({ error: 'Erreur base de données' }, { status: 500 })
  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  let body: unknown
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }
  const { id } = body as Record<string, unknown>
  if (typeof id !== 'string' || !id.trim())
    return NextResponse.json({ error: 'ID invalide' }, { status: 400 })
  const { error } = await supabaseAdmin.from('leads').delete().eq('id', id)
  if (error) return NextResponse.json({ error: 'Erreur base de données' }, { status: 500 })
  return NextResponse.json({ success: true })
}
