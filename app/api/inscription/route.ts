import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

const MAKE_WEBHOOK = process.env.MAKE_WEBHOOK_URL!
const ALLOWED_OFFRES = ['early-bird', 'vip'] as const

export async function POST(request: NextRequest) {
  let body: unknown
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { prenom, nom, email, whatsapp, activite, offre, message } = body as Record<string, unknown>

  if (typeof prenom !== 'string' || prenom.trim().length < 1 || prenom.length > 100)
    return NextResponse.json({ error: 'Prénom invalide' }, { status: 400 })
  if (typeof nom !== 'string' || nom.trim().length < 1 || nom.length > 100)
    return NextResponse.json({ error: 'Nom invalide' }, { status: 400 })
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  if (typeof whatsapp !== 'string' || !/^\+?[\d\s\-()]{8,20}$/.test(whatsapp))
    return NextResponse.json({ error: 'Numéro WhatsApp invalide' }, { status: 400 })
  if (!ALLOWED_OFFRES.includes(offre as typeof ALLOWED_OFFRES[number]))
    return NextResponse.json({ error: 'Offre invalide' }, { status: 400 })
  if (activite !== undefined && (typeof activite !== 'string' || activite.length > 200))
    return NextResponse.json({ error: 'Activité invalide' }, { status: 400 })
  if (message !== undefined && (typeof message !== 'string' || message.length > 2000))
    return NextResponse.json({ error: 'Message trop long' }, { status: 400 })

  const safeActivite = typeof activite === 'string' ? activite.trim() : null
  const safeMessage = typeof message === 'string' ? message.trim() : null

  // 1. Insérer dans Supabase
  const { data, error } = await supabaseAdmin
    .from('leads')
    .insert([{
      prenom: prenom.trim(),
      nom: nom.trim(),
      email: email.toLowerCase().trim(),
      whatsapp: whatsapp.trim(),
      activite: safeActivite,
      offre,
      message: safeMessage,
      statut: 'nouveau',
    }])
    .select()

  if (error) {
    return NextResponse.json({ error: 'Erreur lors de l\'inscription' }, { status: 500 })
  }

  // 2. Envoyer vers Make → Airtable
  if (MAKE_WEBHOOK) {
    try {
      await fetch(MAKE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: prenom.trim(),
          nom: nom.trim(),
          email: email.toLowerCase().trim(),
          whatsapp: whatsapp.trim(),
          activite: safeActivite ?? 'Non précisé',
          offre: offre === 'vip' ? 'VIP' : 'Early Bird',
          message: safeMessage ?? '',
          statut: 'Nouveau',
          date_inscription: new Date().toISOString(),
        }),
      })
    } catch (err) {
      console.warn('Make webhook error:', err)
    }
  }

  return NextResponse.json({ success: true, data })
}