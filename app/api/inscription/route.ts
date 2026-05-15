import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

const BREVO_API_KEY = process.env.BREVO_API_KEY!
const MAKE_WEBHOOK = process.env.MAKE_WEBHOOK_URL!
const ALLOWED_OFFRES = ['early', 'vip'] as const

async function brevoSendEmail(payload: object) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Brevo email error: ${err}`)
  }
}

async function brevoAddContact(email: string, prenom: string, nom: string, whatsapp: string, offre: string) {
  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      attributes: {
        PRENOM: prenom,
        NOM: nom,
        TELEPHONE: whatsapp,
        OFFRE: offre,
        DATE_INSCRIPTION: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      },
      listIds: [Number(process.env.BREVO_LIST_ID ?? '2')],
      updateEnabled: true,
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Brevo contact error: ${err}`)
  }
}

export async function POST(request: NextRequest) {
  let body: unknown
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { prenom, nom, email, whatsapp, activite, offre, message } = body as Record<string, unknown>

  if (typeof prenom !== 'string' || prenom.trim().length < 1 || prenom.length > 100)
    return NextResponse.json({ error: 'Prénom invalide.' }, { status: 400 })
  if (typeof nom !== 'string' || nom.trim().length < 1 || nom.length > 100)
    return NextResponse.json({ error: 'Nom invalide.' }, { status: 400 })
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
  if (typeof whatsapp !== 'string' || !/^\+?[\d\s\-()]{8,20}$/.test(whatsapp))
    return NextResponse.json({ error: 'Numéro WhatsApp invalide. Exemple : +212 6XX XXX XXX' }, { status: 400 })
  if (!ALLOWED_OFFRES.includes(offre as typeof ALLOWED_OFFRES[number]))
    return NextResponse.json({ error: 'Offre invalide.' }, { status: 400 })
  if (activite !== undefined && (typeof activite !== 'string' || activite.length > 200))
    return NextResponse.json({ error: 'Activité invalide.' }, { status: 400 })
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
      date_inscription: new Date().toISOString().split('T')[0],
    }])
    .select()

  if (error) {
    return NextResponse.json({ error: 'Erreur lors de l\'inscription' }, { status: 500 })
  }

  // 2. Email de confirmation + ajout contact Brevo
  const emailHtml = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #060b14; color: #ffffff; padding: 40px 32px; border-radius: 16px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h1 style="font-size: 2rem; font-weight: 900; margin: 0;">
          ROAS<span style="color: #10b981;">.ma</span>
        </h1>
      </div>

      <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">
        Salam ${prenom.trim()} ! 👋
      </h2>
      <p style="color: rgba(255,255,255,0.75); line-height: 1.6; margin-bottom: 24px;">
        Votre inscription à <strong>ROAS Academy</strong> a bien été reçue.
        Notre équipe va vous contacter sous <strong>24h</strong> sur WhatsApp pour confirmer votre place.
      </p>

      <div style="background: #111c30; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
        <p style="margin: 0 0 8px; font-size: 0.85rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em;">Récapitulatif</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: rgba(255,255,255,0.5); font-size: 0.9rem;">Offre</td><td style="padding: 6px 0; font-weight: 600; text-align: right;">${offre === 'vip' ? '👑 VIP' : '🔥 Early Bird'}</td></tr>
          <tr><td style="padding: 6px 0; color: rgba(255,255,255,0.5); font-size: 0.9rem;">WhatsApp</td><td style="padding: 6px 0; font-weight: 600; text-align: right;">${whatsapp.trim()}</td></tr>
          ${safeActivite ? `<tr><td style="padding: 6px 0; color: rgba(255,255,255,0.5); font-size: 0.9rem;">Activité</td><td style="padding: 6px 0; font-weight: 600; text-align: right;">${safeActivite}</td></tr>` : ''}
        </table>
      </div>

      <div style="text-align: center; margin-bottom: 32px;">
        <a href="https://www.roas.ma" style="display: inline-block; background: #10b981; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 0.95rem;">
          Visiter ROAS.ma →
        </a>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin-bottom: 20px;" />
      <p style="color: rgba(255,255,255,0.35); font-size: 0.78rem; text-align: center; margin: 0;">
        ROAS Academy · Casablanca, Maroc · contact@roas.ma
      </p>
    </div>
  `

  try {
    await brevoSendEmail({
      sender: { name: 'ROAS Academy', email: 'contact@roas.ma' },
      to: [{ email: email.toLowerCase().trim(), name: `${prenom.trim()} ${nom.trim()}` }],
      subject: 'Votre inscription ROAS Academy est confirmée ✅',
      htmlContent: emailHtml,
    })
  } catch (err) {
    console.warn('Brevo email error:', err)
  }

  // 3. Ajouter le contact à la liste Brevo (marketing)
  try {
    await brevoAddContact(
      email.toLowerCase().trim(),
      prenom.trim(),
      nom.trim(),
      whatsapp.trim(),
      offre === 'vip' ? 'VIP' : 'Early Bird',
    )
  } catch (err) {
    console.warn('Brevo contact error:', err)
  }

  // 4. Envoyer vers Make → Airtable
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