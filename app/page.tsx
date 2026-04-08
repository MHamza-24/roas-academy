'use client';

import { useEffect, useState } from 'react';

type Offre = 'early' | 'vip';

/* ── TOPBAR ── */
function TopBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="topbar">
      <span>🔥 <strong>Places limitées</strong> · Rejoins maintenant et sécurise le tarif Early Bird</span>
      <a href="#inscription" className="topbar-cta">Réserver →</a>
      <button className="topbar-close" onClick={() => setVisible(false)}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

/* ── NAVBAR ── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const close = () => setOpen(false);
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="brand">ROAS<span>.ma</span></a>
        <div className="nav-links">
          <a href="#pour-qui" onClick={close}>Pour qui ?</a>
          <a href="#programme" onClick={close}>Programme</a>
          <a href="#resultats" onClick={close}>Résultats</a>
          <a href="#pricing" onClick={close}>Tarifs</a>
          <a href="#faq" onClick={close}>FAQ</a>
        </div>
        <a href="#inscription" className="btn-nav">S'inscrire →</a>
        <button className="nav-burger" onClick={() => setOpen(!open)}>
          <i className={`fas fa-${open ? 'times' : 'bars'}`} />
        </button>
      </div>
      {open && (
        <div className="nav-drawer open">
          <a href="#pour-qui" onClick={close}>Pour qui ?</a>
          <a href="#programme" onClick={close}>Programme</a>
          <a href="#resultats" onClick={close}>Résultats</a>
          <a href="#pricing" onClick={close}>Tarifs</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#inscription" className="btn-nav" onClick={close}>S'inscrire →</a>
        </div>
      )}
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag">🌐 Méthode internationale · Lancée au Maroc pour la 1ère fois 🇲🇦</div>
          <h1>Maximisez vos résultats Meta Ads<br /><span className="h1-accent">Apprenez la méthode rentable.</span></h1>
          <p className="hero-desc">Une formation live de <strong>5 semaines</strong> pour maîtriser Meta Ads de A à Z — stratégie, setup technique, créatifs, ciblage, et scale. Avec des <strong>cas réels marocains</strong> et une méthode testée sur des marchés internationaux.</p>
          <div className="hero-stats">
            <div className="hstat"><span className="hstat-n">8.1<span className="hstat-x">x</span></span><span className="hstat-l">ROAS max obtenu</span></div>
            <div className="hstat-sep" />
            <div className="hstat"><span className="hstat-n">22<span className="hstat-x">dhs</span></span><span className="hstat-l">CPL record Maroc</span></div>
            <div className="hstat-sep" />
            <div className="hstat"><span className="hstat-n">40</span><span className="hstat-l">Places · Cohorte 1</span></div>
          </div>
          <div className="hero-actions">
            <a href="#inscription" className="btn-primary btn-lg">Rejoindre la prochaine Cohorte<i className="fas fa-arrow-right" /></a>
            <a href="#programme" className="btn-ghost-hero"><i className="fas fa-play-circle" /> <span>Voir le programme</span></a>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars">
              <div className="ta ta1" /><div className="ta ta2" /><div className="ta ta3" /><div className="ta ta4" /><div className="ta ta5" />
            </div>
            <div className="trust-text">
              <div className="stars-row">★★★★★</div>
              <p><strong>500+</strong> marketeurs formés · Méthode validée sur 4 marchés</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrap">
            <img src="/images/instructor2.jpeg" alt="Équipe ROAS Academy" className="hero-photo" />
            <div className="hero-photo-bg" />
            <div className="hcard hcard-1">
              <div className="hcard-icon" style={{ background: '#10b981' }}><i className="fas fa-arrow-trend-up" /></div>
              <div><div className="hcard-val">ROAS 8.1x</div><div className="hcard-sub">E-commerce mode · Casablanca</div></div>
            </div>
            <div className="hcard hcard-2">
              <div className="hcard-icon" style={{ background: '#6366f1' }}><i className="fas fa-bolt" /></div>
              <div><div className="hcard-val">CPL 22 DHS</div><div className="hcard-sub">Immobilier · Rabat</div></div>
            </div>
            <div className="hcard hcard-3">
              <div className="hcard-icon live-icon"><i className="fas fa-circle" /></div>
              <div><div className="hcard-val">Session Live</div><div className="hcard-sub">Chaque dimanche matin</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#0a0f1a" />
        </svg>
      </div>
    </section>
  );
}

/* ── PROOF GALLERY ── */
function ProofGallery() {
  const proofs = [
    { src: '/images/proof1.jpg', label: 'Commandes Shopify · E-commerce' },
    { src: '/images/proof2.jpg', label: 'Créatif viral · TikTok Ads' },
    { src: '/images/proof3.jpg', label: 'Ventes produit · Shopify' },
    { src: '/images/proof4.jpg', label: 'Total Sales $3,503 · +150%' },
    { src: '/images/proof5.jpg', label: 'CTR 7.85% · Meta Ads Manager' },
    { src: '/images/proof6.jpg', label: '$16,998 en 7 jours · Shopify' },
    { src: '/images/proof7.jpg', label: '124K followers · +130% croissance' },
  ];
  return (
    <section className="proof-gallery">
      <div className="proof-gallery-header">
        <span className="proof-gallery-label">Optimisez et scalez vos Meta Ads sans gaspiller votre budget.</span>
      </div>
      <div className="proof-track-wrapper">
        <div className="proof-track">
          {[...proofs, ...proofs].map((p, i) => (
            <div key={i} className="proof-card">
              <img src={p.src} alt={p.label} />
              <div className="proof-card-overlay"><span>{p.label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LOGOS BAR ── */
function LogosBar() {
  return (
    <section className="logos-bar">
      <p className="logos-label">Méthode appliquée sur des campagnes pour des marques reconnues</p>
      <div className="logos-track">
        <div className="logo-item"><i className="fab fa-shopify" /> Shopify</div>
        <div className="logo-sep">·</div>
        <div className="logo-item"><i className="fab fa-amazon" /> Amazon</div>
        <div className="logo-sep">·</div>
        <div className="logo-item"><span className="logo-text-bold">Jumia</span></div>
        <div className="logo-sep">·</div>
        <div className="logo-item"><span className="logo-text-bold">Jumia Food</span></div>
        <div className="logo-sep">·</div>
        <div className="logo-item"><i className="fab fa-meta" /> Meta Partner</div>
        <div className="logo-sep">·</div>
        <div className="logo-item"><span className="logo-text-bold">Avito.ma</span></div>
        <div className="logo-sep">·</div>
        <div className="logo-item"><span className="logo-text-bold">Barid Al-Maghrib</span></div>
      </div>
    </section>
  );
}

/* ── PROBLEM ── */
function Problem() {
  const problems = [
    { icon: 'fa-fire', title: 'Tu dépenses mais tu ne vends pas', desc: "Tu as lancé des campagnes, le budget part, mais les ventes ne suivent pas. L'algorithme Meta optimise dans le vide faute de signaux clairs." },
    { icon: 'fa-crosshairs', title: 'Ton ciblage est vague, tes leads ne valent rien', desc: "Des centaines de contacts inutiles. Ton ciblage est trop large ou mal structuré. Tu n'as pas de système d'audiences en couches." },
    { icon: 'fa-image', title: 'Tes créatifs "beau mais pas vendeur"', desc: "Tu produis du contenu pro, bien designé, mais il ne convertit pas. En 2026, ce sont les créatifs style UGC organique qui gagnent." },
    { icon: 'fa-chart-bar', title: 'Tu ne comprends pas tes stats', desc: "CPM, ROAS, CPL, CTR... tu regardes des chiffres sans savoir quoi optimiser. Résultat : tu continues à faire les mêmes erreurs." },
    { icon: 'fa-bug', title: 'Ton Pixel perd des données sans que tu le saches', desc: "Sans la Conversions API (CAPI) bien configurée, tu perds jusqu'à 40% de tes événements de conversion. Meta optimise à l'aveugle." },
  ];
  return (
    <section className="problem-sec" id="probleme">
      <div className="container">
        <div className="section-label">Le vrai problème</div>
        <h2 className="section-h2">La plupart des gens dépensent leur budget <span className="accent">sans système.</span></h2>
        <p className="section-p">Si tu te reconnais dans l'une de ces situations, cette formation est faite pour toi.</p>
        <div className="problems-split">
          <div className="problems-list">
            {problems.map((p, i) => (
              <div key={i} className="prob-item">
                <div className="prob-icon bad"><i className={`fas ${p.icon}`} /></div>
                <div><h4>{p.title}</h4><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="problems-img">
            <img src="/images/ads-dashboard.png" alt="Dashboard Meta Ads" />
            <div className="prob-img-card">
              <div className="prob-img-icon"><i className="fas fa-circle-xmark" /></div>
              <div><strong>Avant ROAS Academy</strong><p>Budget brûlé · Leads inutiles · Zéro système</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SOLUTION ── */
function Solution() {
  return (
    <section className="solution-sec">
      <div className="container">
        <div className="solution-inner">
          <div className="solution-img-col">
            <img src="/images/live-class.png" alt="Session live Meta Ads Bootcamp" />
            <div className="sol-badge"><i className="fas fa-globe" /> Campagnes rentables · Créatifs qui convertissent · Scale sans perdre de ROAS</div>
          </div>
          <div className="solution-text-col">
            <div className="section-label">La solution</div>
            <h2 className="section-h2">Bienvenue dans <span className="accent">ROAS Academy</span></h2>
            <p className="solution-desc">Le premier bootcamp Meta Ads au Maroc qui combine <strong>méthode internationale prouvée</strong> et <strong>cas réels du marché local</strong>. 5 semaines pour passer de zéro à des campagnes qui financent elles-mêmes leur propre croissance.</p>
            <div className="sol-features">
              {['5 sessions live hebdomadaires de 2h30 chacune', 'Exercices pratiques sur ton propre compte Meta', 'Benchmarks & cas réels 🇲🇦 Maroc + 🌍 International', 'Communauté WhatsApp + replays 3 mois', 'Audit de ton compte offert avant le démarrage'].map((f, i) => (
                <div key={i} className="sol-feat"><i className="fas fa-check-circle" /> {f}</div>
              ))}
            </div>
            <div className="sol-quote">
              <i className="fas fa-quote-left" />
              <p>"Après 3 semaines de bootcamp, j'ai lancé ma première campagne à 4.8x ROAS — par moi-même. Sans agence, sans budget énorme."</p>
              <span>Mehdi B. · E-commerce mode · Casablanca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── POUR QUI ── */
function PourQui() {
  const profiles = [
    { emoji: '🚀', title: 'Fondateurs & Entrepreneurs', desc: "Tu as lancé quelque chose et tu veux le vendre avec Meta Ads sans dépendre d'une agence.", items: ['Tu veux maîtriser ton acquisition', 'Tu as un produit ou service à vendre', 'Tu veux internaliser tes campagnes'] },
    { emoji: '🛒', title: 'E-commerçants', desc: 'Tu vends en ligne au Maroc et tu veux atteindre un ROAS de 3x minimum.', items: ['Mode, beauté, maison, high-tech', 'Shopify, WooCommerce ou site custom', 'Budget dès 1 500 DHS/mois'] },
    { emoji: '📊', title: 'Freelances & Consultants', desc: 'Tu veux ajouter les Meta Ads à tes services, facturer plus cher.', items: ['Social media managers', 'Community managers en reconversion', 'Consultants marketing freelance'] },
    { emoji: '🏢', title: 'Responsables Marketing', desc: 'Tu gères une PME ou startup et tu veux internaliser tes campagnes Meta.', items: ['Tu délègues trop à des prestataires', 'Tu veux comprendre et contrôler', 'Tu veux des résultats mesurables'] },
  ];
  return (
    <section className="forwhom-sec" id="pour-qui">
      <div className="container">
        <div className="section-label">Pour qui ?</div>
        <h2 className="section-h2">Ce bootcamp est fait pour <span className="accent">4 profils précis</span></h2>
        <p className="section-p">Si tu te reconnais dans l'un d'eux, tu es exactement là où tu dois être.</p>
        <div className="forwhom-grid">
          {profiles.map((p, i) => (
            <div key={i} className="fw-card">
              <div className="fw-emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="fw-list">{p.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="not-right">
          <i className="fas fa-triangle-exclamation" />
          <p><strong>Ce n'est pas pour toi si :</strong> tu cherches une certification académique théorique, tu n'as aucune activité ou projet concret, ou tu n'es pas prêt à consacrer 3h/semaine à la pratique.</p>
        </div>
      </div>
    </section>
  );
}

/* ── PROGRAMME ── */
function Programme() {
  const [activeWeek, setActiveWeek] = useState(1);
  const weeks = [
    { num: '01', tag: 'Stratégie & Mindset', ai: false, title: "Pourquoi 90% des Meta Ads floppent — et comment l'éviter", items: ['Logique du funnel TOFU/MOFU/BOFU appliquée au Maroc', 'Les 3 erreurs qui brûlent ton budget dès le 1er jour', 'Analyser tes concurrents avec Meta Ads Library', 'Construire tes 2 personas avec des vraies données'], livrable: 'Ton funnel personnalisé + 2 fiches personas validées', caseFlag: '🇲🇦', caseText: 'Boutique cosmétiques Casablanca passée de ROAS 0.8x à ROAS 4.2x en 3 semaines.' },
    { num: '02', tag: 'Setup Technique', ai: false, title: 'Le setup que 95% des gens ratent — Pixel + CAPI + Business Manager', items: ['Configuration complète du Meta Business Manager', 'Installation du Pixel sur Shopify, WordPress, custom', 'Setup de la Conversions API (CAPI) — la vraie méthode 2026', 'Les 8 événements standards à configurer absolument'], livrable: 'Ton compte configuré à 100% · Event Match Quality ≥ 7/10', caseFlag: '🌍', caseText: 'Coach à Dublin — +38% de conversions trackées après activation correcte de la CAPI.' },
    { num: '03', tag: 'Ciblage & Audiences', ai: false, title: 'Atteindre les bonnes personnes — La méthode des 3 couches', items: ['Audience froide : intérêts + Advantage+ Maroc', 'Audiences Lookalike basées sur tes meilleurs clients', 'Retargeting vidéo / site / abandon panier / fans', 'Ciblage géo : Casablanca, Rabat, Marrakech + régions'], livrable: "3 ensembles d'audiences live dans ton compte", caseFlag: '🇲🇦', caseText: 'Agence immobilière Rabat — CPL passé de 320 DHS à 22 DHS avec la méthode 3 couches.' },
    { num: '04', tag: 'Créatifs, Copy & Scale', ai: false, title: 'Le créatif qui vend + Lancer, optimiser et scaler sans perdre', items: ['La règle des 3 secondes : stopper le scroll', 'Les 5 formats créatifs qui surperforment en 2026', 'Framework AIDA adapté aux ads marocaines', 'Tester 3 créatifs pour identifier le winner en 72h'], livrable: '2 publicités live + campagne scalée + 3 règles automatiques', caseFlag: '🇲🇦', caseText: 'Clinique Marrakech — CTR 0.8% → 4.3% après passage aux selfie vidéos UGC.' },
    { num: '05', tag: '🤖 IA & Nouveautés Meta 2026', ai: true, title: "Maîtriser l'IA de Meta — Andromeda, Manus AI & automatisation avancée", items: ['Meta Andromeda : comprendre le nouveau moteur de recommandation', 'Manus AI × Meta Ads : automatiser la création de briefs créatifs', 'Advantage+ Shopping & Audience — campagnes full IA 2026', 'Automatiser ton reporting avec Make + ChatGPT'], livrable: '1 workflow IA opérationnel + campagne Advantage+ live', caseFlag: '🌍', caseText: 'E-commerce Casablanca — -52% de temps de gestion. ROAS maintenu à 5.8x.' },
  ];
  return (
    <section className="programme-sec" id="programme">
      <div className="container">
        <div className="section-label">Le programme</div>
        <h2 className="section-h2">5 semaines. <span className="accent">1 campagne rentable.</span> <span className="ai-badge-title">+ IA 2026</span></h2>
        <p className="section-p">Chaque semaine se termine par un livrable concret — incluant une semaine dédiée à l'IA Meta.</p>
        <div className="prog-layout">
          <div className="prog-weeks">
            {weeks.map((w, i) => {
              const n = i + 1;
              const isActive = activeWeek === n;
              return (
                <div key={i} className={`prog-week${isActive ? ' active' : ''}`}>
                  <div className="pw-head" onClick={() => setActiveWeek(isActive ? 0 : n)}>
                    <div className="pw-num">{w.num}</div>
                    <div className="pw-meta">
                      <span className={`pw-tag${w.ai ? ' pw-tag-ai' : ''}`}>{w.tag}</span>
                      <h4>{w.title}</h4>
                    </div>
                    <div className="pw-arrow"><i className="fas fa-chevron-down" /></div>
                  </div>
                  {isActive && (
                    <div className="pw-body" style={{ maxHeight: '1200px' }}>
                      <div className="pw-grid">
                        <div className="pw-content">
                          <ul>{w.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                          <div className="pw-livrable"><i className="fas fa-flag-checkered" /><div><strong>Livrable :</strong> {w.livrable}</div></div>
                        </div>
                        <div className="pw-case">
                          <div className="case-flag">{w.caseFlag}</div>
                          <div className="case-body">{w.caseText}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="prog-sidebar">
            <div className="ps-card">
              <div className="ps-title">Ce que tu obtiens</div>
              <div className="ps-items">
                {[['fa-video', '5 sessions live · 2h30 chacune'], ['fa-laptop-code', 'Exercices pratiques sur ton compte'], ['fa-users', 'Communauté WhatsApp active'], ['fa-film', 'Replays pendant 3 mois'], ['fa-search', 'Audit Meta offert avant start'], ['fa-table', 'Template Google Sheets inclus']].map(([icon, text], i) => (
                  <div key={i} className="ps-item"><i className={`fas ${icon}`} /><span>{text}</span></div>
                ))}
                <div className="ps-item ps-item-ai"><i className="fas fa-robot" /><span><strong>Semaine IA :</strong> Andromeda · Manus AI · Advantage+</span></div>
              </div>
              <a href="#inscription" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>S'inscrire maintenant →</a>
              <p className="ps-price">À partir de <strong>890 DHS</strong> · Paiement en 2x</p>
            </div>
            <div className="ps-card ps-img-card">
              <img src="/images/live-class.png" alt="Session live" style={{ width: '100%', borderRadius: '12px', marginBottom: '12px' }} />
              <div className="ps-live-badge"><span className="live-pulse" /> Sessions chaque samedi ou dimanche matin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── RÉSULTATS ── */
function Resultats() {
  const [tab, setTab] = useState<'maroc' | 'intl' | 'bench'>('maroc');
  const marocCards = [
    { flag: '🇲🇦', sector: 'E-Commerce · Mode · Casablanca', metric: '6.2x', unit: 'ROAS', desc: 'Boutique mode féminine. Budget 1 500 DHS/mois.', from: '1.1x', to: '6.2x' },
    { flag: '🇲🇦', sector: 'Immobilier · Lead Gen · Rabat', metric: '22', unit: 'DHS CPL', desc: 'Agence immobilière. Formulaires natifs Meta.', from: '320 DHS', to: '22 DHS' },
    { flag: '🇲🇦', sector: 'Coaching · Formation · Casablanca', metric: '-68', unit: '% CPL', desc: 'Coach business. CPL divisé par 3 après CAPI.', from: '180 DHS', to: '57 DHS' },
    { flag: '🇲🇦', sector: 'Santé · Clinique · Marrakech', metric: '+437', unit: '% CTR', desc: 'Passage aux selfie vidéos UGC du médecin.', from: '0.8%', to: '4.3%' },
    { flag: '🇲🇦', sector: 'E-Commerce · Artisan · Fès', metric: '5.2x', unit: 'ROAS', desc: '18 000 DHS/mois générés. Budget : 3 500 DHS/mois.', from: 'Mois 1 : 0.9x', to: 'Mois 3 : 5.2x' },
  ];
  const intlCards = [
    { flag: '🇺🇸', sector: 'E-Commerce · Mode · USA', metric: '8.1x', unit: 'ROAS', desc: '$321K dépensés → $2.6M générés sur 1 an.', from: '$321K spend', to: '$2.6M revenus' },
    { flag: '🇮🇪', sector: 'E-Commerce · Mode · Irlande', metric: '5.5x', unit: 'ROAS', desc: '€2 620 dépensés → €14 474 générés en 30 jours.', from: '€2 620', to: '€14 474' },
    { flag: '🇵🇰', sector: 'Cosmétiques · Pakistan', metric: '6.4x', unit: 'ROAS', desc: '12.2M PKR générés avec 1.9M PKR investis.', from: '1.9M PKR', to: '12.2M PKR' },
    { flag: '🇰🇼', sector: 'E-Commerce · Kuwait', metric: '5.8x', unit: 'ROAS', desc: '$6 800 investis → $39 843 générés en 40 jours.', from: '$6 800', to: '$39 843' },
    { flag: '🌍', sector: 'Food Delivery · MENA', metric: '-41', unit: '% coût/cde', desc: 'Réduction coût par commande avec Advantage+.', from: '', to: '' },
    { flag: '🌍', sector: 'Meta Global Study · CAPI', metric: '+19', unit: '% conversions', desc: 'Activation correcte de CAPI = +19% conversions.', from: '', to: '' },
  ];
  return (
    <section className="results-sec" id="resultats">
      <div className="container">
        <div className="section-label">Résultats réels</div>
        <h2 className="section-h2">Des chiffres. <span className="accent">Pas des promesses.</span></h2>
        <p className="section-p">Voici ce que la méthode ROAS Academy a produit sur des marchés similaires au Maroc.</p>
        <div className="results-dashboard">
          <img src="/images/ads-dashboard.png" alt="Résultats campagnes Meta Ads" />
          <div className="rd-overlay">
            <div className="rd-stats">
              {[['8.1x', 'ROAS max'], ['-68%', 'CPL moyen'], ['+437%', 'CTR après UGC'], ['5.5x', 'ROAS Irlande']].map(([v, l], i) => (
                <div key={i} className="rd-stat"><span className="rd-val">{v}</span><span className="rd-lbl">{l}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="results-tabs">
          {(['maroc', 'intl', 'bench'] as const).map(t => (
            <button key={t} className={`rtab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
              {t === 'maroc' ? '🇲🇦 Cas Maroc' : t === 'intl' ? '🌍 Cas Internationaux' : '📊 Benchmarks 2026'}
            </button>
          ))}
        </div>
        {tab === 'maroc' && (
          <div className="results-grid">
            {marocCards.map((c, i) => (
              <div key={i} className="rcard">
                <div className="rcard-top"><span className="rcard-flag">{c.flag}</span><span className="rcard-sector">{c.sector}</span></div>
                <div className="rcard-metric">{c.metric}<span> {c.unit}</span></div>
                <p>{c.desc}</p>
                {c.from && <div className="rcard-arrow"><span>{c.from}</span><i className="fas fa-long-arrow-right" /><span className="g">{c.to}</span></div>}
              </div>
            ))}
            <div className="rcard rcard-join">
              <div className="rcard-join-inner">
                <i className="fas fa-rocket" /><h4>Ton résultat sera ici.</h4>
                <p>Cohorte 1 · Démarre le 03 Mai</p>
                <a href="#inscription" className="btn-primary">Rejoindre →</a>
              </div>
            </div>
          </div>
        )}
        {tab === 'intl' && (
          <div className="results-grid">
            {intlCards.map((c, i) => (
              <div key={i} className="rcard">
                <div className="rcard-top"><span className="rcard-flag">{c.flag}</span><span className="rcard-sector">{c.sector}</span></div>
                <div className="rcard-metric">{c.metric}<span> {c.unit}</span></div>
                <p>{c.desc}</p>
                {c.from && <div className="rcard-arrow"><span>{c.from}</span><i className="fas fa-long-arrow-right" /><span className="g">{c.to}</span></div>}
              </div>
            ))}
          </div>
        )}
        {tab === 'bench' && (
          <div className="bench-layout">
            <div className="bench-intro-text">
              <h3>Les benchmarks Meta Ads au Maroc en 2026</h3>
              <p>Ces chiffres serviront de référence pendant ta formation pour évaluer tes campagnes.</p>
              <img src="/images/phone-results.jpg" alt="Résultats sur mobile" className="bench-phone-img" />
            </div>
            <div className="bench-tables">
              {[
                { header: '📊 Métriques générales Maroc 2026', rows: [['CPM moyen', '5 – 12 MAD'], ['CPC moyen', '2 – 5 MAD'], ['CTR moyen', '~1.5%'], ['CPL moyen', '15 – 50 MAD']] },
                { header: '🏠 Immobilier', rows: [['ROAS moyen', '8:1'], ['CPL qualifié', '15 – 30 MAD'], ['Taux conversion', '12 – 15%']] },
                { header: '🛒 E-Commerce', rows: [['ROAS cible', '5:1 – 10:1'], ['Conv. mobile', '6 – 8%'], ['Budget min.', '1 500 MAD/mois']] },
                { header: '🎓 Formation / Services', rows: [['CPL cible', '25 – 50 MAD'], ['Engagement', '8 – 12%'], ['Conv. webinaire', '25%']] },
              ].map((t, i) => (
                <div key={i} className="btable">
                  <div className="btable-header">{t.header}</div>
                  {t.rows.map(([k, v], j) => (
                    <div key={j} className="brow"><span>{k}</span><span className="bval">{v}</span></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── TÉMOIGNAGES ── */
function Temoignages() {
  const testis = [
    { initiale: 'M', bg: 'linear-gradient(135deg,#059669,#34d399)', name: 'Mehdi B.', role: 'E-commerce mode · Casablanca', quote: "J'avais dépensé 15 000 DHS avec une agence sans résultats. Après 3 semaines de bootcamp, j'ai lancé ma propre campagne à 4.8x ROAS.", result: 'ROAS 4.8x atteint', featured: true },
    { initiale: 'S', bg: 'linear-gradient(135deg,#7c3aed,#a78bfa)', name: 'Sara A.', role: 'Freelance Media Buyer · Rabat', quote: "Le setup technique de la semaine 2 a tout changé. Mon Pixel était mal configuré depuis 6 mois. Le CAPI workshop vaut à lui seul le prix du bootcamp." },
    { initiale: 'K', bg: 'linear-gradient(135deg,#d97706,#fbbf24)', name: 'Karim E.', role: 'Consultant B2B · Casablanca', quote: "Je pensais que ma niche B2B ne marchait pas sur Meta. La méthode des 3 couches m'a prouvé le contraire. 12 leads qualifiés en une semaine pour 500 MAD." },
    { initiale: 'N', bg: 'linear-gradient(135deg,#dc2626,#f87171)', name: 'Nadia M.', role: 'Clinique esthétique · Marrakech', quote: "La partie créatifs de la semaine 4 était une révélation. Depuis que j'ai switché aux selfie vidéos, mon CTR a triplé." },
    { initiale: 'Y', bg: 'linear-gradient(135deg,#0891b2,#38bdf8)', name: 'Youssef T.', role: 'Fondateur startup · Casablanca', quote: "Ce qui m'a convaincu c'est la transparence sur les benchmarks marocains. On sait exactement où on est par rapport au marché." },
  ];
  return (
    <section className="testimonials-sec">
      <div className="container">
        <div className="section-label">Témoignages</div>
        <h2 className="section-h2">Ils ont utilisé la méthode. <span className="accent">Voici ce qu'ils disent.</span></h2>
        <div className="testi-grid">
          {testis.map((t, i) => (
            <div key={i} className={`testi-card${t.featured ? ' testi-featured' : ''}`}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-av" style={{ background: t.bg }}>{t.initiale}</div>
                <div><strong>{t.name}</strong><span>{t.role}</span></div>
              </div>
              {t.result && <div className="testi-result">{t.result}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRICING ── */
function Pricing() {
  const [spots, setSpots] = useState(35);
  const [countdown, setCountdown] = useState('⏱️ Calcul en cours...');
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 7);
    target.setHours(23, 59, 59, 0);
    const interval = setInterval(() => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setCountdown('Early Bird expiré'); clearInterval(interval); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const p = (n: number) => String(n).padStart(2, '0');
      setCountdown(`⏱️ Expire dans : ${d}j ${p(h)}h ${p(m)}m ${p(s)}s`);
    }, 1000);
    const spotsI = setInterval(() => { if (Math.random() < 0.25) setSpots(s => s > 25 ? s - 1 : s); }, 50000);
    return () => { clearInterval(interval); clearInterval(spotsI); };
  }, []);
  return (
    <section className="pricing-sec" id="pricing">
      <div className="container">
        <div className="section-label">Tarifs</div>
        <h2 className="section-h2">Un investissement qui se <span className="accent">rembourse lui-même.</span></h2>
        <p className="section-p">Ton budget de test Meta Ads : 1 000 DHS. Si ROAS = 3x, tu génères 3 000 DHS. Le bootcamp est remboursé en une campagne.</p>
        <div className="urgency-strip">
          <i className="fas fa-clock" />
          <span>{countdown}</span>
          <span className="urg-spots">⚡ <strong>{spots}</strong> places sur 40 restantes</span>
        </div>
        <div className="pricing-grid">
          <div className="price-card price-popular">
            <div className="pc-badge">🔥 Early Bird — Recommandé</div>
            <div className="pc-head">
              <h3>Cohorte 1</h3>
              <div className="pc-price"><span className="pc-old">1 190 DHS</span><span className="pc-now">890 DHS</span></div>
              <p className="pc-terms">ou 2 × 450 DHS · Paiement en 2 fois</p>
            </div>
            <div className="pc-features">
              {['5 sessions live (2h30 chacune · samedi ou dimanche)', 'Exercices sur ton propre compte Meta', 'Template Google Sheets de suivi', 'Audit Meta offert avant démarrage', 'Communauté WhatsApp / Discord', 'Replays pendant 3 mois', "Benchmarks + cas d'études complets"].map((f, i) => (
                <div key={i} className="pc-feat"><i className="fas fa-check" /> {f}</div>
              ))}
            </div>
            <a href="#inscription" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Réserver ma place Early Bird →</a>
            <p className="pc-note">⚡ Valable jusqu'à épuisement des places</p>
          </div>
          <div className="price-card price-vip">
            <div className="pc-badge vip">👑 VIP — 10 places max</div>
            <div className="pc-head">
              <h3>Cohorte 1 · VIP</h3>
              <div className="pc-price"><span className="pc-now gold">1 990 DHS</span></div>
              <p className="pc-terms">ou 2 × 995 DHS · Paiement en 2 fois</p>
            </div>
            <div className="pc-features">
              <div className="pc-feat"><i className="fas fa-check" /> Tout ce qui est dans Early Bird</div>
              {['2 sessions 1-to-1 de coaching privé', 'Audit avancé de tes campagnes', 'Accès WhatsApp direct au formateur', 'Replays pendant 6 mois', 'Priorité cohortes futures'].map((f, i) => (
                <div key={i} className="pc-feat vip-feat"><i className="fas fa-star" /> <strong>{f}</strong></div>
              ))}
            </div>
            <a href="#inscription" className="btn-vip" style={{ width: '100%', justifyContent: 'center' }}>Rejoindre en VIP →</a>
            <p className="pc-note">👑 Idéal pour un accompagnement personnalisé</p>
          </div>
        </div>
        <div className="guarantee">
          <div className="guar-icon"><i className="fas fa-shield-halved" /></div>
          <div className="guar-text">
            <strong>Garantie satisfaction 7 jours</strong>
            <p>Si après la 1ère session tu n'es pas satisfait(e), on te rembourse intégralement. Sans question. Sans justification.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── INSCRIPTION ── */
function Inscription() {
  const [offre, setOffre] = useState<Offre>('early');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', whatsapp: '', activite: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setSuccess(false);
    setForm({ prenom: '', nom: '', email: '', whatsapp: '', activite: '', message: '' });
    setOffre('early');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, offre }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        alert('Une erreur est survenue. Réessaie ou contacte-nous sur WhatsApp.');
      }
    } catch {
      alert('Erreur de connexion. Vérifie ta connexion internet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="inscription-sec" id="inscription">
      <div className="container">
        <div className="insc-top">
          <div className="section-label light">Inscription</div>
          <h2 className="section-h2">Prêt à lancer tes<br /><span className="accent">premières campagnes rentables ?</span></h2>
          <p className="insc-top-sub">Remplis le formulaire. On te contacte sous <strong>24h</strong> pour confirmer ta place.</p>
          <div className="insc-checklist">
            {[['fa-lock', 'Données sécurisées'], ['fa-reply', 'Réponse sous 24h'], ['fa-credit-card', 'Paiement en 2 fois'], ['fa-shield-halved', 'Garantie 7 jours']].map(([icon, text], i) => (
              <div key={i}><i className={`fas ${icon}`} /> {text}</div>
            ))}
          </div>
        </div>
        <div className="insc-split">
          <div className="insc-right insc-right--centered">
            {success ? (
              <div className="form-success" style={{ display: 'flex' }}>
                <div className="fs-icon"><i className="fas fa-circle-check" /></div>
                <h3>🎉 Demande enregistrée !</h3>
                <p>On te contacte sous <strong>24h</strong> sur WhatsApp pour confirmer ta place.</p>
                <p style={{ marginTop: '8px', fontSize: '.85rem', opacity: .6 }}>
                  En attendant, suis-nous sur <a href="https://www.instagram.com/roas.maroc" target="_blank" rel="noopener" style={{ color: 'var(--green)', fontWeight: 700 }}>@roas.ma</a> sur Instagram.
                </p>
                <button className="btn-primary" style={{ marginTop: '20px' }} onClick={reset}>
                  Nouvelle inscription
                </button>
              </div>
            ) : (
              <form className="insc-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Prénom *</label>
                    <input type="text" name="prenom" placeholder="Votre prénom" required value={form.prenom} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label>Nom *</label>
                    <input type="text" name="nom" placeholder="Votre nom" required value={form.nom} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-field">
                  <label>Email *</label>
                  <input type="email" name="email" placeholder="votre@email.com" required value={form.email} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label>WhatsApp *</label>
                  <input type="tel" name="whatsapp" placeholder="+212 6XX XXX XXX" required value={form.whatsapp} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label>Votre activité</label>
                  <select name="activite" value={form.activite} onChange={handleChange}>
                    <option value="">Sélectionner...</option>
                    {['E-commerce', 'Service / Consulting', 'Immobilier', 'Formation / Coaching', 'Restauration / Local', 'Santé & Bien-être', 'Freelance / Agence', 'Autre'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label>Offre choisie</label>
                  <div className="offer-pills">
                    <label className={`offer-pill${offre === 'early' ? ' selected' : ''}`}>
                      <input type="radio" name="offer" value="early" checked={offre === 'early'} onChange={() => setOffre('early')} />
                      <span>🔥 Early Bird — 890 DHS</span>
                    </label>
                    <label className={`offer-pill${offre === 'vip' ? ' selected' : ''}`}>
                      <input type="radio" name="offer" value="vip" checked={offre === 'vip'} onChange={() => setOffre('vip')} />
                      <span>👑 VIP — 1 990 DHS</span>
                    </label>
                  </div>
                </div>
                <div className="form-field">
                  <label>Message / Question (optionnel)</label>
                  <textarea name="message" placeholder="Décris ton projet en quelques mots..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary btn-lg btn-full" disabled={loading}>
                  {loading ? 'Envoi en cours...' : 'Réserver ma place →'}
                </button>
                <p className="form-note">En soumettant, vous acceptez d'être contacté(e) par WhatsApp ou email.</p>
              </form>
            )}
            <div className="insc-photo">
              <img src="/images/instructor2.jpeg" alt="Session live ROAS Academy" />
              <div className="insc-photo-caption"><strong>Ton expert·e t'attend.</strong><p>40 places max. Ne rate pas la cohorte 1.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const faqs = [
    { q: "Est-ce que j'ai besoin d'un site web pour participer ?", a: "Non. Tu peux lancer des campagnes directement vers un formulaire natif Meta (lead ads), une page WhatsApp Business, ou un profil Instagram." },
    { q: "Quel budget Meta Ads faut-il prévoir en plus ?", a: "Selon les benchmarks marocains 2026, tu peux démarrer avec 30 à 50 MAD/jour. Pour les exercices, on recommande 500–1 000 MAD sur les 5 semaines." },
    { q: "Je n'ai jamais lancé de campagne. C'est pour moi ?", a: "Oui. Le bootcamp commence par les fondations (semaines 1 et 2) et monte progressivement. Zéro pré-requis technique requis." },
    { q: "Y a-t-il une certification à la fin ?", a: "Tu reçois une attestation de participation ROAS Academy. Notre priorité est que tu aies des résultats concrets sur tes campagnes." },
    { q: "Que se passe-t-il si je rate une session live ?", a: "Chaque session est enregistrée et disponible en replay dans les 24h suivantes. Tu as accès à tous les replays pendant 3 mois (6 mois pour les VIP)." },
    { q: "Dans quelle langue se déroule la formation ?", a: "Principalement en français avec des touches de darija pour les exemples marocains." },
    { q: "Pourquoi une startup étrangère plutôt qu'un formateur local ?", a: "Notre atout : avoir géré des campagnes sur des marchés plus avancés (Europe, USA) et adapter cette expertise au Maroc avec des benchmarks internationaux." },
    { q: "La méthode fonctionne pour une petite activité locale ?", a: "Oui — et c'est même là que Meta Ads est le plus rentable au Maroc. Restaurant, salon, clinique, artisan... Les benchmarks incluent des cas comme 8–12 leads qualifiés/jour pour 500 MAD." },
  ];
  return (
    <section className="faq-sec" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left">
            <div className="section-label">FAQ</div>
            <h2 className="section-h2">Les questions<br /><span className="accent">les plus posées</span></h2>
            <p>Tu as d'autres questions ? Écris-nous sur WhatsApp.</p>
            <a href="https://wa.me/212663353111" className="btn-whatsapp" target="_blank" rel="noopener">
              <i className="fab fa-whatsapp" /> Poser une question
            </a>
            <div className="faq-img-wrap">
              <img src="/images/live-class.png" alt="Session live ROAS Academy" />
            </div>
          </div>
          <div className="faq-right">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${active === i ? ' active' : ''}`}>
                <div className="faq-q" onClick={() => setActive(active === i ? null : i)}>
                  <span>{faq.q}</span>
                  <i className="fas fa-plus" />
                </div>
                {active === i && (
                  <div className="faq-a" style={{ maxHeight: '300px' }}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section className="final-sec">
      <div className="container">
        <div className="final-inner">
          <div className="final-left">
            <h2>Les Meta Ads qui rapportent,<br /><span className="accent">ça commence ici.</span></h2>
            <p>Cohorte 1 · Démarre le <strong>03 Mai</strong> · <strong>40 places</strong> restantes</p>
            <div className="final-btns">
              <a href="#inscription" className="btn-primary btn-lg">Réserver ma place — 890 DHS →</a>
              <a href="https://wa.me/212663353111" className="btn-whatsapp" target="_blank" rel="noopener"><i className="fab fa-whatsapp" /> WhatsApp</a>
            </div>
            <p className="final-guar"><i className="fas fa-shield-halved" /> Garantie 7 jours · Paiement en 2× · Zéro surprise</p>
          </div>
          <div className="final-right">
            <img src="/images/instructor2.jpeg" alt="Formateur ROAS Academy" className="final-instructor" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-brand">
            <div className="brand footer-brand-logo">ROAS<span>.ma</span></div>
            <p>La formation Meta Ads qui transforme ton budget pub en machine à revenus.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/roas.maroc?igsh=eDY2enJnejRiZmp2&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.facebook.com/share/1BagM26wZ8/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook"><i className="fab fa-facebook" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
              <a href="https://wa.me/212663353111" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
          <div className="footer-links">
            <h5>Navigation</h5>
            <a href="#pour-qui">Pour qui ?</a>
            <a href="#programme">Programme</a>
            <a href="#resultats">Résultats</a>
            <a href="#pricing">Tarifs</a>
            <a href="#faq">FAQ</a>
            <a href="#inscription">S'inscrire</a>
          </div>
          <div className="footer-contact-col">
            <h5>Contact</h5>
            <p><i className="fas fa-envelope" /> contact@roas.ma</p>
            <p><i className="fab fa-whatsapp" /> +212 663 353 111</p>
            <p><i className="fab fa-instagram" /> <a href="https://www.instagram.com/roas.maroc?igsh=eDY2enJnejRiZmp2&utm_source=qr" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>@roas.ma</a></p>
            <p><i className="fas fa-map-marker-alt" /> Casablanca, Maroc</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ROAS Academy. Tous droits réservés.</p>
          <div><a href="#">Mentions légales</a><a href="#">CGV</a><a href="#">Confidentialité</a></div>
        </div>
      </div>
    </footer>
  );
}

/* ── WHATSAPP WIDGET ── */
function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [notif, setNotif] = useState(true);
  const sendMsg = () => {
    const text = msg.trim() || "Salam ! J'ai une question sur le bootcamp ROAS Academy 👋";
    window.open(`https://wa.me/212663353111?text=${encodeURIComponent(text)}`, '_blank');
  };
  return (
    <div className="wa-widget">
      {open && (
        <div className="wa-popup open">
          <div className="wa-popup-header">
            <div className="wa-avatar"><i className="fab fa-whatsapp" /></div>
            <div className="wa-popup-info">
              <strong>ROAS Academy</strong>
              <span className="wa-status"><span className="wa-dot" /> En ligne</span>
            </div>
            <button className="wa-popup-close" onClick={() => setOpen(false)}><i className="fas fa-times" /></button>
          </div>
          <div className="wa-popup-body">
            <div className="wa-message">
              <p>👋 Salam ! Tu as une question sur le bootcamp Meta Ads ?</p>
              <p>On te répond en quelques minutes sur WhatsApp 🚀</p>
            </div>
          </div>
          <div className="wa-popup-footer">
            <input type="text" className="wa-input" placeholder="Écris ton message..." value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMsg()} />
            <button className="wa-send" onClick={sendMsg}><i className="fab fa-whatsapp" /> Démarrer la conversation</button>
          </div>
        </div>
      )}
      {notif && !open && <div className="wa-notif">1</div>}
      <button className="wa-fab" onClick={() => { setOpen(!open); setNotif(false); }}>
        <i className="fab fa-whatsapp" style={{ fontSize: '1.6rem', color: '#fff' }} />
      </button>
    </div>
  );
}

/* ── STICKY CTA ── */
function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const check = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setVisible(y > 400);
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('touchmove', check, { passive: true });
    window.addEventListener('touchend', check, { passive: true });
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('touchmove', check);
      window.removeEventListener('touchend', check);
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-cta" style={{ display: 'flex' }}>
      <a href="#inscription" className="btn-primary btn-full">
        <i className="fas fa-rocket" /> Réserver — 890 DHS
      </a>
    </div>
  );
}

/* ── READ PROGRESS ── */
function ReadProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      setWidth(Math.min(pct, 100));
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="read-progress" style={{ width: `${width}%` }} />;
}

/* ── PAGE PRINCIPALE ── */
export default function Home() {
  return (
    <>
      <ReadProgress />
      <TopBar />
      <Navbar />
      <Hero />
      <ProofGallery />
      <LogosBar />
      <Problem />
      <Solution />
      <PourQui />
      <Programme />
      <Resultats />
      <Temoignages />
      <Pricing />
      <Inscription />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <WhatsAppWidget />
    </>
  );
}
