'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/main.js';
    document.body.appendChild(script);

    // ← CORRECTION CLÉE : attacher le submit APRÈS chargement du script
    script.onload = () => {
      const form = document.getElementById('inscForm');
      if (form) {
        form.removeAttribute('onsubmit');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (typeof (window as any).handleSubmit === 'function') {
            (window as any).handleSubmit(e);
          }
        });
      }
    };

    return () => {
      document.querySelector('script[src="/js/main.js"]')?.remove();
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: landingHTML }} />
  );
}

const landingHTML = `

<!-- ─── STICKY TOP BAR ─── -->
<div class="topbar" id="topbar">
  <span>🔥 <strong>Cohorte 1</strong> — <strong>890 DHS</strong> · Démarre le <strong>03 Mai</strong> · <span id="topbarSpots">35</span> places restantes</span>
  <a href="#inscription" class="topbar-cta">Réserver →</a>
  <button class="topbar-close" onclick="document.getElementById('topbar').style.display='none'"><i class="fas fa-times"></i></button>
</div>

<!-- ─── NAVBAR ─── -->
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="#" class="brand">ROAS<span>.ma</span></a>
    <div class="nav-links">
      <a href="#pour-qui">Pour qui ?</a>
      <a href="#programme">Programme</a>
      <a href="#resultats">Résultats</a>
      <a href="#pricing">Tarifs</a>
      <a href="#faq">FAQ</a>
    </div>
    <a href="#inscription" class="btn-nav">S'inscrire →</a>
    <button class="nav-burger" id="burger"><i class="fas fa-bars"></i></button>
  </div>
  <div class="nav-drawer" id="drawer">
    <a href="#pour-qui">Pour qui ?</a>
    <a href="#programme">Programme</a>
    <a href="#resultats">Résultats</a>
    <a href="#pricing">Tarifs</a>
    <a href="#faq">FAQ</a>
    <a href="#inscription" class="btn-nav">S'inscrire →</a>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-left">
      <div class="hero-tag">
        🌐 Méthode internationale · Lancée au Maroc pour la 1ère fois 🇲🇦
      </div>
      <h1>
        Maximisez vos résultats Meta Ads<br>
        <span class="h1-accent">Apprenez la méthode rentable.</span>
      </h1>
      <p class="hero-desc">
        Une formation live de <strong>5 semaines</strong> pour maîtriser Meta Ads de A à Z — stratégie, setup technique, créatifs, ciblage, et scale. Avec des <strong>cas réels marocains</strong> et une méthode testée sur des marchés internationaux.
      </p>
      <div class="hero-stats">
        <div class="hstat">
          <span class="hstat-n">8.1<span class="hstat-x">x</span></span>
          <span class="hstat-l">ROAS max obtenu</span>
        </div>
        <div class="hstat-sep" aria-hidden="true"></div>
        <div class="hstat">
          <span class="hstat-n">22<span class="hstat-x">dhs</span></span>
          <span class="hstat-l">CPL record Maroc</span>
        </div>
        <div class="hstat-sep" aria-hidden="true"></div>
        <div class="hstat">
          <span class="hstat-n">40<span class="hstat-x"></span></span>
          <span class="hstat-l">Places · Cohorte 1</span>
        </div>
      </div>
      <div class="hero-actions">
        <a href="#inscription" class="btn-primary btn-lg">
          Rejoindre la Cohorte 1
          <i class="fas fa-arrow-right"></i>
        </a>
        <a href="#programme" class="btn-ghost-hero btn-ghost-mobile">
          <i class="fas fa-play-circle"></i>
          <span>Voir le programme</span>
        </a>
      </div>
      <div class="hero-trust">
        <div class="trust-avatars">
          <div class="ta ta1"></div><div class="ta ta2"></div><div class="ta ta3"></div><div class="ta ta4"></div><div class="ta ta5"></div>
        </div>
        <div class="trust-text">
          <div class="stars-row">★★★★★</div>
          <p><strong>500+</strong> marketeurs formés · Méthode validée sur 4 marchés</p>
        </div>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-photo-wrap">
        <img src="/images/instructor.png" alt="Équipe ROAS Academy" class="hero-photo" />
        <div class="hero-photo-bg"></div>
        <div class="hcard hcard-1">
          <div class="hcard-icon" style="background:#10b981"><i class="fas fa-arrow-trend-up"></i></div>
          <div>
            <div class="hcard-val">ROAS 8.1x</div>
            <div class="hcard-sub">E-commerce mode · Casablanca</div>
          </div>
        </div>
        <div class="hcard hcard-2">
          <div class="hcard-icon" style="background:#6366f1"><i class="fas fa-bolt"></i></div>
          <div>
            <div class="hcard-val">CPL 22 DHS</div>
            <div class="hcard-sub">Immobilier · Rabat</div>
          </div>
        </div>
        <div class="hcard hcard-3">
          <div class="hcard-icon live-icon"><i class="fas fa-circle"></i></div>
          <div>
            <div class="hcard-val">Session Live</div>
            <div class="hcard-sub">Chaque dimanche matin</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-wave">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#0a0f1a"/>
    </svg>
  </div>
</section>

<!-- ═══ PROOF GALLERY ═══ -->
<section class="proof-gallery">
  <div class="proof-gallery-header">
    <span class="proof-gallery-label">Optimisez et scalez vos Meta Ads sans gaspiller votre budget.</span>
  </div>
  <div class="proof-track-wrapper">
    <div class="proof-track">
      <div class="proof-card"><img src="/images/proof1.jpg" alt="Commandes Shopify en temps réel" /><div class="proof-card-overlay"><span>Commandes Shopify · E-commerce</span></div></div>
      <div class="proof-card"><img src="/images/proof2.jpg" alt="Créatif TikTok qui convertit" /><div class="proof-card-overlay"><span>Créatif viral · TikTok Ads</span></div></div>
      <div class="proof-card"><img src="/images/proof3.jpg" alt="Résultats boutique Shopify" /><div class="proof-card-overlay"><span>Ventes produit · Shopify</span></div></div>
      <div class="proof-card"><img src="/images/proof4.jpg" alt="Dashboard Shopify $3,503" /><div class="proof-card-overlay"><span>Total Sales $3,503 · +150%</span></div></div>
      <div class="proof-card"><img src="/images/proof5.jpg" alt="Meta Ads CTR & CPC stats" /><div class="proof-card-overlay"><span>CTR 7.85% · Meta Ads Manager</span></div></div>
      <div class="proof-card"><img src="/images/proof6.jpg" alt="Shopify $16,998 en 7 jours" /><div class="proof-card-overlay"><span>$16,998 en 7 jours · Shopify</span></div></div>
      <div class="proof-card"><img src="/images/proof7.jpg" alt="Facebook 124K followers" /><div class="proof-card-overlay"><span>124K followers · +130% croissance</span></div></div>
      <div class="proof-card"><img src="/images/proof1.jpg" alt="Commandes Shopify en temps réel" /><div class="proof-card-overlay"><span>Commandes Shopify · E-commerce</span></div></div>
      <div class="proof-card"><img src="/images/proof2.jpg" alt="Créatif TikTok qui convertit" /><div class="proof-card-overlay"><span>Créatif viral · TikTok Ads</span></div></div>
      <div class="proof-card"><img src="/images/proof3.jpg" alt="Résultats boutique Shopify" /><div class="proof-card-overlay"><span>Ventes produit · Shopify</span></div></div>
      <div class="proof-card"><img src="/images/proof4.jpg" alt="Dashboard Shopify $3,503" /><div class="proof-card-overlay"><span>Total Sales $3,503 · +150%</span></div></div>
      <div class="proof-card"><img src="/images/proof5.jpg" alt="Meta Ads CTR & CPC stats" /><div class="proof-card-overlay"><span>CTR 7.85% · Meta Ads Manager</span></div></div>
      <div class="proof-card"><img src="/images/proof6.jpg" alt="Shopify $16,998 en 7 jours" /><div class="proof-card-overlay"><span>$16,998 en 7 jours · Shopify</span></div></div>
      <div class="proof-card"><img src="/images/proof7.jpg" alt="Facebook 124K followers" /><div class="proof-card-overlay"><span>124K followers · +130% croissance</span></div></div>
    </div>
  </div>
</section>

<!-- ═══ LOGOS BAR ═══ -->
<section class="logos-bar">
  <p class="logos-label">Méthode appliquée sur des campagnes pour des marques reconnues</p>
  <div class="logos-track">
    <div class="logo-item"><i class="fab fa-shopify"></i> Shopify</div>
    <div class="logo-sep">·</div>
    <div class="logo-item"><i class="fab fa-amazon"></i> Amazon</div>
    <div class="logo-sep">·</div>
    <div class="logo-item"><span class="logo-text-bold">Jumia</span></div>
    <div class="logo-sep">·</div>
    <div class="logo-item"><span class="logo-text-bold">Jumia Food</span></div>
    <div class="logo-sep">·</div>
    <div class="logo-item"><i class="fab fa-meta"></i> Meta Partner</div>
    <div class="logo-sep">·</div>
    <div class="logo-item"><span class="logo-text-bold">Avito.ma</span></div>
    <div class="logo-sep">·</div>
    <div class="logo-item"><span class="logo-text-bold">Barid Al-Maghrib</span></div>
  </div>
</section>

<!-- ═══ PROBLEM ═══ -->
<section class="problem-sec" id="probleme">
  <div class="container">
    <div class="section-label">Le vrai problème</div>
    <h2 class="section-h2">La plupart des gens dépensent leur budget <span class="accent">sans système.</span></h2>
    <p class="section-p">Si tu te reconnais dans l'une de ces situations, cette formation est faite pour toi.</p>
    <div class="problems-split">
      <div class="problems-list">
        <div class="prob-item">
          <div class="prob-icon bad"><i class="fas fa-fire"></i></div>
          <div><h4>Tu dépenses mais tu ne vends pas</h4><p>Tu as lancé des campagnes, le budget part, mais les ventes ne suivent pas. L'algorithme Meta optimise dans le vide faute de signaux clairs.</p></div>
        </div>
        <div class="prob-item">
          <div class="prob-icon bad"><i class="fas fa-crosshairs"></i></div>
          <div><h4>Ton ciblage est vague, tes leads ne valent rien</h4><p>Des centaines de contacts inutiles. Ton ciblage est trop large ou mal structuré. Tu n'as pas de système d'audiences en couches.</p></div>
        </div>
        <div class="prob-item">
          <div class="prob-icon bad"><i class="fas fa-image"></i></div>
          <div><h4>Tes créatifs "beau mais pas vendeur"</h4><p>Tu produis du contenu pro, bien designé, mais il ne convertit pas. En 2026, ce sont les créatifs style UGC organique qui gagnent.</p></div>
        </div>
        <div class="prob-item">
          <div class="prob-icon bad"><i class="fas fa-chart-bar"></i></div>
          <div><h4>Tu ne comprends pas tes stats</h4><p>CPM, ROAS, CPL, CTR... tu regardes des chiffres sans savoir quoi optimiser. Résultat : tu continues à faire les mêmes erreurs.</p></div>
        </div>
        <div class="prob-item">
          <div class="prob-icon bad"><i class="fas fa-bug"></i></div>
          <div><h4>Ton Pixel perd des données sans que tu le saches</h4><p>Sans la Conversions API (CAPI) bien configurée, tu perds jusqu'à 40% de tes événements de conversion. Meta optimise à l'aveugle.</p></div>
        </div>
      </div>
      <div class="problems-img">
        <img src="/images/ads-dashboard.png" alt="Dashboard Meta Ads avec résultats" />
        <div class="prob-img-card">
          <div class="prob-img-icon"><i class="fas fa-circle-xmark"></i></div>
          <div><strong>Avant ROAS Academy</strong><p>Budget brûlé · Leads inutiles · Zéro système</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SOLUTION ═══ -->
<section class="solution-sec">
  <div class="container">
    <div class="solution-inner">
      <div class="solution-img-col">
        <img src="/images/live-class.png" alt="Session live Meta Ads Bootcamp ROAS Academy" />
        <div class="sol-badge"><i class="fas fa-globe"></i> Campagnes rentables · Créatifs qui convertissent · Scale sans perdre de ROAS</div>
      </div>
      <div class="solution-text-col">
        <div class="section-label">La solution</div>
        <h2 class="section-h2">Bienvenue dans <span class="accent">ROAS Academy</span></h2>
        <p class="solution-desc">Le premier bootcamp Meta Ads au Maroc qui combine <strong>méthode internationale prouvée</strong> et <strong>cas réels du marché local</strong>. 5 semaines pour passer de zéro à des campagnes qui financent elles-mêmes leur propre croissance.</p>
        <div class="sol-features">
          <div class="sol-feat"><i class="fas fa-check-circle"></i> 5 sessions live hebdomadaires de 2h30 chacune <span style="opacity:.75;font-weight:400;">(samedi ou dimanche)</span></div>
          <div class="sol-feat"><i class="fas fa-check-circle"></i> Exercices pratiques sur ton propre compte Meta</div>
          <div class="sol-feat"><i class="fas fa-check-circle"></i> Benchmarks & cas réels 🇲🇦 Maroc + 🌍 International</div>
          <div class="sol-feat"><i class="fas fa-check-circle"></i> Communauté WhatsApp + replays 3 mois</div>
          <div class="sol-feat"><i class="fas fa-check-circle"></i> Audit de ton compte offert avant le démarrage</div>
        </div>
        <div class="sol-quote">
          <i class="fas fa-quote-left"></i>
          <p>"Après 3 semaines de bootcamp, j'ai lancé ma première campagne à 4.8x ROAS — par moi-même. Sans agence, sans budget énorme."</p>
          <span>Mehdi B. · E-commerce mode · Casablanca</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ POUR QUI ═══ -->
<section class="forwhom-sec" id="pour-qui">
  <div class="container">
    <div class="section-label">Pour qui ?</div>
    <h2 class="section-h2">Ce bootcamp est fait pour <span class="accent">4 profils précis</span></h2>
    <p class="section-p">Si tu te reconnais dans l'un d'eux, tu es exactement là où tu dois être.</p>
    <div class="forwhom-grid">
      <div class="fw-card">
        <div class="fw-emoji">🚀</div>
        <h3>Fondateurs & Entrepreneurs</h3>
        <p>Tu as lancé quelque chose et tu veux le vendre avec Meta Ads sans dépendre d'une agence qui ne comprend pas ton marché.</p>
        <ul class="fw-list"><li>Tu veux maîtriser ton acquisition</li><li>Tu as un produit ou service à vendre</li><li>Tu veux internaliser tes campagnes</li></ul>
      </div>
      <div class="fw-card">
        <div class="fw-emoji">🛒</div>
        <h3>E-commerçants</h3>
        <p>Tu vends en ligne au Maroc et tu veux atteindre un ROAS de 3x minimum sur tes campagnes Facebook & Instagram.</p>
        <ul class="fw-list"><li>Mode, beauté, maison, high-tech</li><li>Shopify, WooCommerce ou site custom</li><li>Budget dès 1 500 DHS/mois</li></ul>
      </div>
      <div class="fw-card">
        <div class="fw-emoji">📊</div>
        <h3>Freelances & Consultants</h3>
        <p>Tu veux ajouter les Meta Ads à tes services, facturer plus cher et livrer des résultats prouvés à tes clients.</p>
        <ul class="fw-list"><li>Social media managers</li><li>Community managers en reconversion</li><li>Consultants marketing freelance</li></ul>
      </div>
      <div class="fw-card">
        <div class="fw-emoji">🏢</div>
        <h3>Responsables Marketing</h3>
        <p>Tu gères une PME ou startup et tu veux internaliser la gestion de tes campagnes Meta, réduire tes coûts d'agence.</p>
        <ul class="fw-list"><li>Tu délègues trop à des prestataires</li><li>Tu veux comprendre et contrôler</li><li>Tu veux des résultats mesurables</li></ul>
      </div>
    </div>
    <div class="not-right">
      <i class="fas fa-triangle-exclamation"></i>
      <p><strong>Ce n'est pas pour toi si :</strong> tu cherches une certification académique théorique, tu n'as aucune activité ou projet concret, ou tu n'es pas prêt à consacrer 3h/semaine à la pratique.</p>
    </div>
  </div>
</section>

<!-- ═══ PROGRAMME ═══ -->
<section class="programme-sec" id="programme">
  <div class="container">
    <div class="section-label">Le programme</div>
    <h2 class="section-h2">5 semaines. <span class="accent">1 campagne rentable.</span> <span class="ai-badge-title">+ IA 2026</span></h2>
    <p class="section-p">Chaque semaine se termine par un livrable concret — incluant une semaine dédiée à l'IA Meta (Andromeda, Manus AI & automatisation).</p>
    <div class="prog-layout">
      <div class="prog-weeks">
        <div class="prog-week active" data-w="1">
          <div class="pw-head">
            <div class="pw-num">01</div>
            <div class="pw-meta"><span class="pw-tag">Stratégie & Mindset</span><h4>Pourquoi 90% des Meta Ads floppent — et comment l'éviter</h4></div>
            <div class="pw-arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="pw-body">
            <div class="pw-grid">
              <div class="pw-content">
                <ul>
                  <li>Logique du funnel TOFU/MOFU/BOFU appliquée au Maroc</li>
                  <li>Les 3 erreurs qui brûlent ton budget dès le 1er jour</li>
                  <li>Analyser tes concurrents avec Meta Ads Library</li>
                  <li>Construire tes 2 personas avec des vraies données</li>
                  <li>Définir un objectif Meta aligné avec ton business</li>
                </ul>
                <div class="pw-livrable"><i class="fas fa-flag-checkered"></i><div><strong>Livrable :</strong> Ton funnel personnalisé + 2 fiches personas validées</div></div>
              </div>
              <div class="pw-case">
                <div class="case-flag">🇲🇦</div>
                <div class="case-body"><strong>Cas Maroc :</strong> Boutique cosmétiques Casablanca passée de <span class="case-bad">ROAS 0.8x</span> à <span class="case-good">ROAS 4.2x</span> en 3 semaines après restructuration de funnel.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="prog-week" data-w="2">
          <div class="pw-head">
            <div class="pw-num">02</div>
            <div class="pw-meta"><span class="pw-tag">Setup Technique</span><h4>Le setup que 95% des gens ratent — Pixel + CAPI + Business Manager</h4></div>
            <div class="pw-arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="pw-body">
            <div class="pw-grid">
              <div class="pw-content">
                <ul>
                  <li>Configuration complète du Meta Business Manager</li>
                  <li>Installation du Pixel sur Shopify, WordPress, custom</li>
                  <li>Setup de la Conversions API (CAPI) — la vraie méthode 2026</li>
                  <li>Les 8 événements standards à configurer absolument</li>
                  <li>Validation du tracking avec Meta Events Manager</li>
                </ul>
                <div class="pw-livrable"><i class="fas fa-flag-checkered"></i><div><strong>Livrable :</strong> Ton compte configuré à 100% · Event Match Quality ≥ 7/10</div></div>
              </div>
              <div class="pw-case">
                <div class="case-flag">🌍</div>
                <div class="case-body"><strong>Cas International :</strong> Coach à Dublin — <span class="case-good">+38% de conversions trackées</span> après activation correcte de la CAPI. Sans changer les publicités.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="prog-week" data-w="3">
          <div class="pw-head">
            <div class="pw-num">03</div>
            <div class="pw-meta"><span class="pw-tag">Ciblage & Audiences</span><h4>Atteindre les bonnes personnes — La méthode des 3 couches</h4></div>
            <div class="pw-arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="pw-body">
            <div class="pw-grid">
              <div class="pw-content">
                <ul>
                  <li>Audience froide : intérêts + Advantage+ Maroc</li>
                  <li>Audiences Lookalike basées sur tes meilleurs clients</li>
                  <li>Retargeting vidéo / site / abandon panier / fans</li>
                  <li>Ciblage géo : Casablanca, Rabat, Marrakech + régions</li>
                  <li>Exclusions pour éviter le cannibalisme de campagnes</li>
                </ul>
                <div class="pw-livrable"><i class="fas fa-flag-checkered"></i><div><strong>Livrable :</strong> 3 ensembles d'audiences live dans ton compte</div></div>
              </div>
              <div class="pw-case">
                <div class="case-flag">🇲🇦</div>
                <div class="case-body"><strong>Cas Maroc :</strong> Agence immobilière Rabat — CPL passé de <span class="case-bad">320 DHS</span> à <span class="case-good">22 DHS</span> avec la méthode 3 couches + formulaires natifs Meta.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="prog-week" data-w="4">
          <div class="pw-head">
            <div class="pw-num">04</div>
            <div class="pw-meta"><span class="pw-tag">Créatifs, Copy & Scale</span><h4>Le créatif qui vend + Lancer, optimiser et scaler sans perdre</h4></div>
            <div class="pw-arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="pw-body">
            <div class="pw-grid">
              <div class="pw-content">
                <ul>
                  <li>La règle des 3 secondes : stopper le scroll</li>
                  <li>Les 5 formats créatifs qui surperforment en 2026</li>
                  <li>Framework AIDA adapté aux ads marocaines</li>
                  <li>Créatifs style organique : +40% vs contenu poli</li>
                  <li>Tester 3 créatifs pour identifier le winner en 72h</li>
                  <li>Scale horizontal vs vertical selon ton budget</li>
                </ul>
                <div class="pw-livrable"><i class="fas fa-flag-checkered"></i><div><strong>Livrable :</strong> 2 publicités live + campagne scalée + 3 règles automatiques</div></div>
              </div>
              <div class="pw-case">
                <div class="case-flag">🇲🇦</div>
                <div class="case-body"><strong>Cas Maroc :</strong> Clinique Marrakech — passage de photos polished à selfie vidéos du médecin : CTR <span class="case-bad">0.8%</span> → <span class="case-good">4.3%</span>. Budget identique.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="prog-week" data-w="5">
          <div class="pw-head">
            <div class="pw-num">05</div>
            <div class="pw-meta"><span class="pw-tag pw-tag-ai">🤖 IA & Nouveautés Meta 2026</span><h4>Maîtriser l'IA de Meta — Andromeda, Manus AI & automatisation avancée</h4></div>
            <div class="pw-arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="pw-body">
            <div class="pw-grid">
              <div class="pw-content">
                <ul>
                  <li><strong>Meta Andromeda :</strong> comprendre le nouveau moteur de recommandation publicitaire</li>
                  <li><strong>Manus AI × Meta Ads :</strong> automatiser la création de briefs créatifs et rapports</li>
                  <li>Advantage+ Shopping & Advantage+ Audience — campagnes full IA Meta 2026</li>
                  <li>Générer des visuels et vidéos UGC avec l'IA (Meta AI Studio, Canva AI)</li>
                  <li>Automatiser ton reporting avec Make + ChatGPT</li>
                </ul>
                <div class="pw-livrable"><i class="fas fa-flag-checkered"></i><div><strong>Livrable :</strong> 1 workflow IA opérationnel + campagne Advantage+ live + dashboard automatisé</div></div>
              </div>
              <div class="pw-case">
                <div class="case-flag">🌍</div>
                <div class="case-body"><strong>Cas 2026 :</strong> E-commerce Casablanca — <span class="case-good">-52% de temps de gestion</span> après automatisation IA. ROAS maintenu à <span class="case-good">5.8x</span>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prog-sidebar">
        <div class="ps-card">
          <div class="ps-title">Ce que tu obtiens</div>
          <div class="ps-items">
            <div class="ps-item"><i class="fas fa-video"></i><span>5 sessions live · 2h30 chacune</span></div>
            <div class="ps-item"><i class="fas fa-laptop-code"></i><span>Exercices pratiques sur ton compte</span></div>
            <div class="ps-item"><i class="fas fa-users"></i><span>Communauté WhatsApp active</span></div>
            <div class="ps-item"><i class="fas fa-film"></i><span>Replays pendant 3 mois</span></div>
            <div class="ps-item"><i class="fas fa-search"></i><span>Audit Meta offert avant start</span></div>
            <div class="ps-item"><i class="fas fa-table"></i><span>Template Google Sheets inclus</span></div>
            <div class="ps-item ps-item-ai"><i class="fas fa-robot"></i><span><strong>Semaine IA :</strong> Andromeda · Manus AI · Advantage+</span></div>
          </div>
          <a href="#inscription" class="btn-primary" style="width:100%;justify-content:center;margin-top:20px;">S'inscrire maintenant →</a>
          <p class="ps-price">À partir de <strong>890 DHS</strong> · Paiement en 2x</p>
        </div>
        <div class="ps-card ps-img-card">
          <img src="/images/live-class.png" alt="Session live" style="width:100%;border-radius:12px;margin-bottom:12px;" />
          <div class="ps-live-badge"><span class="live-pulse"></span> Sessions chaque samedi ou dimanche matin</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ RÉSULTATS ═══ -->
<section class="results-sec" id="resultats">
  <div class="container">
    <div class="section-label">Résultats réels</div>
    <h2 class="section-h2">Des chiffres. <span class="accent">Pas des promesses.</span></h2>
    <p class="section-p">Voici ce que la méthode ROAS Academy a produit sur des marchés similaires au Maroc.</p>
    <div class="results-dashboard">
      <img src="/images/ads-dashboard.png" alt="Résultats campagnes Meta Ads" />
      <div class="rd-overlay">
        <div class="rd-stats">
          <div class="rd-stat"><span class="rd-val">8.1x</span><span class="rd-lbl">ROAS max</span></div>
          <div class="rd-stat"><span class="rd-val">-68%</span><span class="rd-lbl">CPL moyen</span></div>
          <div class="rd-stat"><span class="rd-val">+437%</span><span class="rd-lbl">CTR après UGC</span></div>
          <div class="rd-stat"><span class="rd-val">5.5x</span><span class="rd-lbl">ROAS Irlande</span></div>
        </div>
      </div>
    </div>
    <div class="results-tabs">
      <button class="rtab active" onclick="setTab('maroc')">🇲🇦 Cas Maroc</button>
      <button class="rtab" onclick="setTab('intl')">🌍 Cas Internationaux</button>
      <button class="rtab" onclick="setTab('bench')">📊 Benchmarks 2026</button>
    </div>
    <div class="rtab-content active" id="rtab-maroc">
      <div class="results-grid">
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇲🇦</span><span class="rcard-sector">E-Commerce · Mode · Casablanca</span></div><div class="rcard-metric">6.2<span>x ROAS</span></div><p>Boutique mode féminine. Budget 1 500 DHS/mois. Funnel restructuré + créatifs UGC organique.</p><div class="rcard-arrow"><span>1.1x</span><i class="fas fa-long-arrow-right"></i><span class="g">6.2x</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇲🇦</span><span class="rcard-sector">Immobilier · Lead Gen · Rabat</span></div><div class="rcard-metric">22 <span>DHS CPL</span></div><p>Agence immobilière. Formulaires natifs Meta + ciblage géo précis par quartier.</p><div class="rcard-arrow"><span>320 DHS</span><i class="fas fa-long-arrow-right"></i><span class="g">22 DHS</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇲🇦</span><span class="rcard-sector">Coaching · Formation · Casablanca</span></div><div class="rcard-metric">-68<span>% CPL</span></div><p>Coach business. Séquence webinaire → vente. CPL divisé par 3 après CAPI correctement configurée.</p><div class="rcard-arrow"><span>180 DHS</span><i class="fas fa-long-arrow-right"></i><span class="g">57 DHS</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇲🇦</span><span class="rcard-sector">Santé · Clinique · Marrakech</span></div><div class="rcard-metric">+437<span>% CTR</span></div><p>Passage de photos pro polished à selfie vidéos UGC du médecin. Même budget, même ciblage.</p><div class="rcard-arrow"><span>0.8%</span><i class="fas fa-long-arrow-right"></i><span class="g">4.3%</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇲🇦</span><span class="rcard-sector">E-Commerce · Artisan · Fès</span></div><div class="rcard-metric">5.2<span>x ROAS</span></div><p>18 000 DHS/mois générés. Budget pub : 3 500 DHS/mois. Produit artisan cuir.</p><div class="rcard-arrow"><span>Mois 1 : 0.9x</span><i class="fas fa-long-arrow-right"></i><span class="g">Mois 3 : 5.2x</span></div></div>
        <div class="rcard rcard-join"><div class="rcard-join-inner"><i class="fas fa-rocket"></i><h4>Ton résultat sera ici.</h4><p>Cohorte 1 · Démarre le 03 Mai</p><a href="#inscription" class="btn-primary">Rejoindre →</a></div></div>
      </div>
    </div>
    <div class="rtab-content" id="rtab-intl">
      <div class="results-grid">
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇺🇸</span><span class="rcard-sector">E-Commerce · Mode · USA</span></div><div class="rcard-metric">8.1<span>x ROAS</span></div><p>$321K dépensés → $2.6M générés sur 1 an. Même structure funnel 3 couches.</p><div class="rcard-arrow"><span>$321K spend</span><i class="fas fa-long-arrow-right"></i><span class="g">$2.6M revenus</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇮🇪</span><span class="rcard-sector">E-Commerce · Mode · Irlande</span></div><div class="rcard-metric">5.5<span>x ROAS</span></div><p>€2 620 dépensés → €14 474 générés en 30 jours. Petit budget, grande efficacité.</p><div class="rcard-arrow"><span>€2 620</span><i class="fas fa-long-arrow-right"></i><span class="g">€14 474</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇵🇰</span><span class="rcard-sector">Cosmétiques · Pakistan</span></div><div class="rcard-metric">6.4<span>x ROAS</span></div><p>12.2M PKR générés avec 1.9M PKR investis. Marché beauty similaire au Maroc.</p><div class="rcard-arrow"><span>1.9M PKR</span><i class="fas fa-long-arrow-right"></i><span class="g">12.2M PKR</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🇰🇼</span><span class="rcard-sector">E-Commerce · Kuwait</span></div><div class="rcard-metric">5.8<span>x ROAS</span></div><p>$6 800 investis → $39 843 générés en 40 jours. Marché MENA similaire.</p><div class="rcard-arrow"><span>$6 800</span><i class="fas fa-long-arrow-right"></i><span class="g">$39 843</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🌍</span><span class="rcard-sector">Food Delivery · MENA · HungerStation</span></div><div class="rcard-metric">-41<span>% coût/cde</span></div><p>Réduction de 41% du coût par 1ère commande avec Meta Advantage+ App Campaigns.</p><div class="rcard-arrow"><span>Source : Meta for Business</span></div></div>
        <div class="rcard"><div class="rcard-top"><span class="rcard-flag">🌍</span><span class="rcard-sector">Meta Global Study · CAPI</span></div><div class="rcard-metric">+19<span>% conversions</span></div><p>Étude officielle Meta : activation correcte de CAPI = +19% de conversions reportées en moyenne.</p><div class="rcard-arrow"><span>Source : Meta for Developers</span></div></div>
      </div>
    </div>
    <div class="rtab-content" id="rtab-bench">
      <div class="bench-layout">
        <div class="bench-intro-text">
          <h3>Les benchmarks Meta Ads au Maroc en 2026</h3>
          <p>Ces chiffres sont issus de sources locales (Rhillane, German CPOC, Seomaniak) et serviront de référence pendant ta formation pour évaluer tes campagnes.</p>
          <img src="/images/phone-results.jpg" alt="Résultats sur mobile" class="bench-phone-img" />
        </div>
        <div class="bench-tables">
          <div class="btable">
            <div class="btable-header">📊 Métriques générales Maroc 2026</div>
            <div class="brow"><span>CPM moyen</span><span class="bval">5 – 12 MAD</span></div>
            <div class="brow"><span>CPC moyen</span><span class="bval">2 – 5 MAD</span></div>
            <div class="brow"><span>CTR moyen</span><span class="bval">~1.5%</span></div>
            <div class="brow"><span>CPL moyen</span><span class="bval">15 – 50 MAD</span></div>
            <div class="brow"><span>CPA moyen</span><span class="bval">30 – 80 MAD</span></div>
          </div>
          <div class="btable">
            <div class="btable-header">🏠 Immobilier</div>
            <div class="brow"><span>ROAS moyen</span><span class="bval g">8:1</span></div>
            <div class="brow"><span>CPL qualifié</span><span class="bval">15 – 30 MAD</span></div>
            <div class="brow"><span>Taux de conversion</span><span class="bval">12 – 15%</span></div>
            <div class="brow"><span>Budget min.</span><span class="bval">2 000 MAD/mois</span></div>
          </div>
          <div class="btable">
            <div class="btable-header">🛒 E-Commerce</div>
            <div class="brow"><span>ROAS cible</span><span class="bval g">5:1 – 10:1</span></div>
            <div class="brow"><span>Conv. mobile</span><span class="bval">6 – 8%</span></div>
            <div class="brow"><span>Panier moyen ↑</span><span class="bval">+40%</span></div>
            <div class="brow"><span>Budget min.</span><span class="bval">1 500 MAD/mois</span></div>
          </div>
          <div class="btable">
            <div class="btable-header">🎓 Formation / Services</div>
            <div class="brow"><span>CPL cible</span><span class="bval g">25 – 50 MAD</span></div>
            <div class="brow"><span>Engagement</span><span class="bval">8 – 12%</span></div>
            <div class="brow"><span>Conv. webinaire</span><span class="bval">25%</span></div>
            <div class="brow"><span>Budget min.</span><span class="bval">1 000 MAD/mois</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TÉMOIGNAGES ═══ -->
<section class="testimonials-sec">
  <div class="container">
    <div class="section-label">Témoignages</div>
    <h2 class="section-h2">Ils ont utilisé la méthode. <span class="accent">Voici ce qu'ils disent.</span></h2>
    <div class="testi-grid">
      <div class="testi-card testi-featured">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-quote">"J'avais dépensé 15 000 DHS avec une agence sans résultats. Après 3 semaines de bootcamp, j'ai lancé ma propre campagne à 4.8x ROAS. Je n'aurais jamais cru pouvoir faire ça moi-même."</p>
        <div class="testi-author"><div class="testi-av" style="background:linear-gradient(135deg,#059669,#34d399)">M</div><div><strong>Mehdi B.</strong><span>E-commerce mode · Casablanca</span></div></div>
        <div class="testi-result">ROAS 4.8x atteint</div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-quote">"Le setup technique de la semaine 2 a tout changé. Mon Pixel était mal configuré depuis 6 mois — je perdais des données sans le savoir. Le CAPI workshop vaut à lui seul le prix du bootcamp."</p>
        <div class="testi-author"><div class="testi-av" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)">S</div><div><strong>Sara A.</strong><span>Freelance Media Buyer · Rabat</span></div></div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-quote">"Je pensais que ma niche B2B ne marchait pas sur Meta. La méthode des 3 couches m'a prouvé le contraire. 12 leads qualifiés en une semaine pour 500 MAD."</p>
        <div class="testi-author"><div class="testi-av" style="background:linear-gradient(135deg,#d97706,#fbbf24)">K</div><div><strong>Karim E.</strong><span>Consultant B2B · Casablanca</span></div></div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-quote">"La partie créatifs de la semaine 4 était une révélation. J'utilisais des photos pro qui coûtaient cher. Depuis que j'ai switché aux selfie vidéos, mon CTR a triplé."</p>
        <div class="testi-author"><div class="testi-av" style="background:linear-gradient(135deg,#dc2626,#f87171)">N</div><div><strong>Nadia M.</strong><span>Clinique esthétique · Marrakech</span></div></div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-quote">"Ce qui m'a convaincu c'est la transparence sur les benchmarks marocains. On sait exactement où on est par rapport au marché. Et les cas réels rendent tout très concret."</p>
        <div class="testi-author"><div class="testi-av" style="background:linear-gradient(135deg,#0891b2,#38bdf8)">Y</div><div><strong>Youssef T.</strong><span>Fondateur startup · Casablanca</span></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ PRICING ═══ -->
<section class="pricing-sec" id="pricing">
  <div class="container">
    <div class="section-label">Tarifs</div>
    <h2 class="section-h2">Un investissement qui se <span class="accent">rembourse lui-même.</span></h2>
    <p class="section-p">Ton budget de test Meta Ads : 1 000 DHS. Si ROAS = 3x, tu génères 3 000 DHS. Le bootcamp est remboursé en une campagne.</p>
    <div class="urgency-strip">
      <i class="fas fa-clock"></i>
      <span id="countdown">⏱️ Calcul en cours...</span>
      <span class="urg-spots">⚡ <strong id="spotsCount">35</strong> places sur 40 restantes</span>
    </div>
    <div class="pricing-grid">
      <div class="price-card price-popular">
        <div class="pc-badge">🔥 Early Bird — Recommandé</div>
        <div class="pc-head">
          <h3>Cohorte 1</h3>
          <div class="pc-price"><span class="pc-old">1 190 DHS</span><span class="pc-now">890 DHS</span></div>
          <p class="pc-terms">ou 2 × 450 DHS · Paiement en 2 fois</p>
        </div>
        <div class="pc-features">
          <div class="pc-feat"><i class="fas fa-check"></i> 5 sessions live (2h30 chacune · samedi ou dimanche)</div>
          <div class="pc-feat"><i class="fas fa-check"></i> Exercices sur ton propre compte Meta</div>
          <div class="pc-feat"><i class="fas fa-check"></i> Template Google Sheets de suivi</div>
          <div class="pc-feat"><i class="fas fa-check"></i> Audit Meta offert avant démarrage</div>
          <div class="pc-feat"><i class="fas fa-check"></i> Communauté WhatsApp / Discord</div>
          <div class="pc-feat"><i class="fas fa-check"></i> Replays pendant 3 mois</div>
          <div class="pc-feat"><i class="fas fa-check"></i> Benchmarks + cas d'études complets</div>
        </div>
        <a href="#inscription" class="btn-primary" style="width:100%;justify-content:center;">Réserver ma place Early Bird →</a>
        <p class="pc-note">⚡ Valable jusqu'au épuisement des places</p>
      </div>
      <div class="price-card price-vip">
        <div class="pc-badge vip">👑 VIP — 10 places max</div>
        <div class="pc-head">
          <h3>Cohorte 1 · VIP</h3>
          <div class="pc-price"><span class="pc-now gold">1 990 DHS</span></div>
          <p class="pc-terms">ou 2 × 995 DHS · Paiement en 2 fois</p>
        </div>
        <div class="pc-features">
          <div class="pc-feat"><i class="fas fa-check"></i> Tout ce qui est dans Early Bird</div>
          <div class="pc-feat vip-feat"><i class="fas fa-star"></i> <strong>2 sessions 1-to-1 de coaching privé</strong></div>
          <div class="pc-feat vip-feat"><i class="fas fa-star"></i> <strong>Audit avancé de tes campagnes</strong></div>
          <div class="pc-feat vip-feat"><i class="fas fa-star"></i> <strong>Accès WhatsApp direct au formateur</strong></div>
          <div class="pc-feat vip-feat"><i class="fas fa-star"></i> <strong>Replays pendant 6 mois</strong></div>
          <div class="pc-feat vip-feat"><i class="fas fa-star"></i> <strong>Priorité cohortes futures</strong></div>
        </div>
        <a href="#inscription" class="btn-vip" style="width:100%;justify-content:center;">Rejoindre en VIP →</a>
        <p class="pc-note">👑 Idéal pour un accompagnement personnalisé</p>
      </div>
    </div>
    <div class="guarantee">
      <div class="guar-icon"><i class="fas fa-shield-halved"></i></div>
      <div class="guar-text">
        <strong>Garantie satisfaction 7 jours</strong>
        <p>Si après la 1ère session tu n'es pas satisfait(e), on te rembourse intégralement. Sans question. Sans justification.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ INSCRIPTION ═══ -->
<section class="inscription-sec" id="inscription">
  <div class="container">
    <div class="insc-top">
      <div class="section-label light">Inscription</div>
      <h2 class="section-h2">Prêt à lancer tes<br><span class="accent">premières campagnes rentables ?</span></h2>
      <p class="insc-top-sub">Remplis le formulaire. On te contacte sous <strong>24h</strong> pour confirmer ta place.</p>
      <div class="insc-checklist">
        <div><i class="fas fa-lock"></i> Données sécurisées</div>
        <div><i class="fas fa-reply"></i> Réponse sous 24h</div>
        <div><i class="fas fa-credit-card"></i> Paiement en 2 fois</div>
        <div><i class="fas fa-shield-halved"></i> Garantie 7 jours</div>
      </div>
    </div>
    <div class="insc-split">
      <div class="insc-right insc-right--centered">
        <form class="insc-form" id="inscForm">
          <div class="form-row">
            <div class="form-field">
              <label>Prénom *</label>
              <input type="text" id="fieldPrenom" name="prenom" placeholder="Votre prénom" required />
            </div>
            <div class="form-field">
              <label>Nom *</label>
              <input type="text" id="fieldNom" name="nom" placeholder="Votre nom" required />
            </div>
          </div>
          <div class="form-field">
            <label>Email *</label>
            <input type="email" id="fieldEmail" name="email" placeholder="votre@email.com" required />
          </div>
          <div class="form-field">
            <label>WhatsApp *</label>
            <input type="tel" id="fieldWhatsapp" name="whatsapp" placeholder="+212 6XX XXX XXX" required />
          </div>
          <div class="form-field">
            <label>Votre activité</label>
            <select id="fieldActivite" name="activite">
              <option value="">Sélectionner...</option>
              <option>E-commerce</option>
              <option>Service / Consulting</option>
              <option>Immobilier</option>
              <option>Formation / Coaching</option>
              <option>Restauration / Local</option>
              <option>Santé & Bien-être</option>
              <option>Freelance / Agence</option>
              <option>Autre</option>
            </select>
          </div>
          <div class="form-field">
            <label>Offre choisie</label>
            <div class="offer-pills">
              <label class="offer-pill"><input type="radio" name="offer" value="early" checked /><span>🔥 Early Bird — 890 DHS</span></label>
              <label class="offer-pill"><input type="radio" name="offer" value="vip" /><span>👑 VIP — 1 990 DHS</span></label>
            </div>
          </div>
          <div class="form-field">
            <label>Message / Question (optionnel)</label>
            <textarea id="fieldMessage" name="message" placeholder="Décris ton projet en quelques mots..."></textarea>
          </div>
          <button type="submit" class="btn-primary btn-lg btn-full" id="submitBtn">Réserver ma place →</button>
          <p class="form-note">En soumettant, vous acceptez d'être contacté(e) par WhatsApp ou email.</p>
        </form>
        <div class="form-success" id="formSuccess">
          <div class="fs-icon"><i class="fas fa-circle-check"></i></div>
          <h3>🎉 Demande enregistrée !</h3>
          <p>On te contacte sous <strong>24h</strong> sur WhatsApp pour confirmer ta place.</p>
          <p style="margin-top:8px;font-size:.85rem;opacity:.6">En attendant, suis-nous sur <a href="https://www.instagram.com/roas.maroc" target="_blank" rel="noopener" style="color:var(--green);text-decoration:none;font-weight:700;">@roas.ma</a> sur Instagram.</p>
        </div>
        <div class="insc-photo">
          <img src="/images/instructor.png" alt="Session live ROAS Academy" />
          <div class="insc-photo-caption"><strong>Ton expert·e t'attend.</strong><p>40 places max. Ne rate pas la cohorte 1.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FAQ ═══ -->
<section class="faq-sec" id="faq">
  <div class="container">
    <div class="faq-layout">
      <div class="faq-left">
        <div class="section-label">FAQ</div>
        <h2 class="section-h2">Les questions<br><span class="accent">les plus posées</span></h2>
        <p>Tu as d'autres questions ? Écris-nous sur WhatsApp.</p>
        <a href="https://wa.me/212663353111" class="btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> Poser une question</a>
        <div class="faq-img-wrap"><img src="/images/live-class.png" alt="Session live ROAS Academy" /></div>
      </div>
      <div class="faq-right">
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Est-ce que j'ai besoin d'un site web pour participer ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Non. Tu peux lancer des campagnes directement vers un formulaire natif Meta (lead ads), une page WhatsApp Business, ou un profil Instagram.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Quel budget Meta Ads faut-il prévoir en plus ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Selon les benchmarks marocains 2026, tu peux démarrer avec <strong>30 à 50 MAD/jour</strong>. Pour les exercices de formation, on recommande un budget test de <strong>500–1 000 MAD</strong> sur les 5 semaines.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Je n'ai jamais lancé de campagne. C'est pour moi ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Oui. Le bootcamp commence par les fondations (semaines 1 et 2) et monte progressivement. Zéro pré-requis technique requis.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Y a-t-il une certification à la fin ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Tu reçois une <strong>attestation de participation ROAS Academy</strong>. Notre priorité est que tu aies des résultats concrets sur tes campagnes.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Que se passe-t-il si je rate une session live ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Chaque session est enregistrée et disponible en replay dans les 24h suivantes. Tu as accès à tous les replays pendant <strong>3 mois</strong> (6 mois pour les VIP).</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Dans quelle langue se déroule la formation ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Principalement en <strong>français</strong> avec des touches de darija pour les exemples marocains.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>Pourquoi une startup étrangère plutôt qu'un formateur local ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Notre atout : avoir géré des campagnes sur des marchés plus avancés (Europe, USA) et adapter cette expertise au Maroc avec des <strong>benchmarks internationaux</strong>.</p></div>
        </div>
        <div class="faq-item">
          <div class="faq-q" onclick="toggleFaq(this)"><span>La méthode fonctionne pour une petite activité locale ?</span><i class="fas fa-plus"></i></div>
          <div class="faq-a"><p>Oui — et c'est même là que Meta Ads est le plus rentable au Maroc. Restaurant, salon, clinique, artisan... Les benchmarks incluent des cas comme <strong>8–12 leads qualifiés/jour pour 500 MAD</strong>.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FINAL CTA ═══ -->
<section class="final-sec">
  <div class="container">
    <div class="final-inner">
      <div class="final-left">
        <h2>Les Meta Ads qui rapportent,<br><span class="accent">ça commence ici.</span></h2>
        <p>Cohorte 1 · Démarre le <strong>03 Mai</strong> · <strong>40 places</strong> · <span id="finalSpots">35</span> restantes</p>
        <div class="final-btns">
          <a href="#inscription" class="btn-primary btn-lg">Réserver ma place — 890 DHS →</a>
          <a href="https://wa.me/212663353111" class="btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
        <p class="final-guar"><i class="fas fa-shield-halved"></i> Garantie 7 jours · Paiement en 2× · Zéro surprise</p>
      </div>
      <div class="final-right">
        <img src="/images/instructor.png" alt="Formateur ROAS Academy" class="final-instructor" />
      </div>
    </div>
  </div>
</section>

<!-- ─── FOOTER ─── -->
<footer class="footer">
  <div class="container">
    <div class="footer-row">
      <div class="footer-brand">
        <div class="brand footer-brand-logo">ROAS<span>.ma</span></div>
        <p>La formation Meta Ads qui transforme ton budget pub en machine à revenus.</p>
        <div class="footer-socials">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="https://wa.me/212663353111"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-links">
        <h5>Navigation</h5>
        <a href="#pour-qui">Pour qui ?</a>
        <a href="#programme">Programme</a>
        <a href="#resultats">Résultats</a>
        <a href="#pricing">Tarifs</a>
        <a href="#faq">FAQ</a>
        <a href="#inscription">S'inscrire</a>
      </div>
      <div class="footer-contact-col">
        <h5>Contact</h5>
        <p><i class="fas fa-envelope"></i> hello@roas.ma</p>
        <p><i class="fab fa-whatsapp"></i> +212 663 353 111</p>
        <p><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/roas.maroc" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">@roas.ma</a></p>
        <p><i class="fas fa-map-marker-alt"></i> Casablanca, Maroc</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 ROAS Academy. Tous droits réservés.</p>
      <div><a href="#">Mentions légales</a><a href="#">CGV</a><a href="#">Confidentialité</a></div>
    </div>
  </div>
</footer>

<!-- FLOATING CTA (mobile) -->
<div class="sticky-cta" id="stickyCta">
  <a href="#inscription" class="btn-primary btn-full"><i class="fas fa-rocket"></i> Réserver — 890 DHS</a>
</div>

<!-- PROGRESS BAR -->
<div class="read-progress" id="readProgress"></div>

<!-- WHATSAPP WIDGET -->
<div class="wa-widget" id="waWidget">
  <div class="wa-popup" id="waPopup">
    <div class="wa-popup-header">
      <div class="wa-avatar"><i class="fab fa-whatsapp"></i></div>
      <div class="wa-popup-info"><strong>ROAS Academy</strong><span class="wa-status"><span class="wa-dot"></span> En ligne</span></div>
      <button class="wa-popup-close" onclick="toggleWaPopup()"><i class="fas fa-times"></i></button>
    </div>
    <div class="wa-popup-body">
      <div class="wa-message">
        <p>👋 Salam ! Tu as une question sur le bootcamp Meta Ads ?</p>
        <p>On te répond en quelques minutes sur WhatsApp 🚀</p>
      </div>
    </div>
    <div class="wa-popup-footer">
      <input type="text" id="waInput" class="wa-input" placeholder="Écris ton message..." onkeydown="if(event.key==='Enter') sendWaMessage()" />
      <a id="waBtn" class="wa-send" href="#" target="_blank" rel="noopener" onclick="return buildWaLink()">
        <i class="fab fa-whatsapp"></i> Démarrer la conversation
      </a>
    </div>
  </div>
  <div class="wa-notif" id="waNotif">1</div>
  <button class="wa-fab" id="waFab" onclick="toggleWaPopup()" aria-label="Contacter sur WhatsApp">
    <i class="fab fa-whatsapp wa-icon-wa"></i>
    <i class="fas fa-times wa-icon-x" style="display:none"></i>
  </button>
</div>
`;
