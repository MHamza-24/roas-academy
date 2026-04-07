import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const MAKE_WEBHOOK = 'https://hook.eu1.make.com/xz8asilm4l145hgbpg9pyrcjxpirqoq2'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { prenom, nom, email, whatsapp, activite, offre, message } = body

  // 1. Insérer dans Supabase
  const { data, error } = await supabase
    .from('leads')
    .insert([{ prenom, nom, email, whatsapp, activite, offre, message, statut: 'nouveau' }])
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // 2. Envoyer vers Make → Airtable
  try {
    await fetch(MAKE_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prenom,
        nom,
        email,
        whatsapp,
        activite: activite || 'Non précisé',
        offre: offre === 'vip' ? 'VIP' : 'Early Bird',
        message: message || '',
        statut: 'Nouveau',
        date_inscription: new Date().toISOString(),
      }),
    })
  } catch (err) {
    console.warn('Make webhook error:', err)
  }

  return NextResponse.json({ success: true, data })
}