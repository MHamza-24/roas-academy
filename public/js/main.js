/* ROAS Academy v2 — main.js */

/* ── FORM SUBMIT ── */
 window.handleSubmit = async function(e) {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;

  // Récupérer les valeurs du formulaire
  const prenom   = document.getElementById('fieldPrenom').value.trim();
  const nom      = document.getElementById('fieldNom').value.trim();
  const email    = document.getElementById('fieldEmail').value.trim();
  const whatsapp = document.getElementById('fieldWhatsapp').value.trim();
  const activite = document.getElementById('fieldActivite').value;
  const message  = document.getElementById('fieldMessage').value.trim();
  const offreEl  = document.querySelector('input[name="offer"]:checked');
  const offre    = offreEl ? offreEl.value : 'early';

  try {
    const response = await fetch('/api/inscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prenom, nom, email, whatsapp, activite, offre, message })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // Afficher le message de succès
      document.getElementById('inscForm').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'flex';

      // Scroll vers le message de succès
      document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Une erreur est survenue. Réessaie ou contacte-nous sur WhatsApp.');
      btn.textContent = 'Réserver ma place →';
      btn.disabled = false;
    }

  } catch (err) {
    console.error('Erreur:', err);
    alert('Erreur de connexion. Vérifie ta connexion internet.');
    btn.textContent = 'Réserver ma place →';
    btn.disabled = false;
  }
}

/* ═══════════════════════════════════════════════════════════
   ⚙️  CONFIG — Modifie uniquement cette section
═══════════════════════════════════════════════════════════ */
const CONFIG = {
  // Ton numéro WhatsApp SANS le + (ex: 212612345678)
  WA_NUMBER: '212663353111',

  // ── EmailJS (notifications email à chaque nouveau lead) ──
  // Tuto complet : voir emailjs-setup.html
  EMAILJS_PUBLIC_KEY:  '',   // ex: 'user_aBcDeFgHiJkLmN'
  EMAILJS_SERVICE_ID:  '',   // ex: 'service_xxxxxxx'
  EMAILJS_TEMPLATE_ID: '',   // ex: 'template_xxxxxxx'
  NOTIFICATION_EMAIL:  'tima.startips@gmail.com',  // ← ton email ✅

  // Message WhatsApp du widget (visiteur → toi)
  WA_DEFAULT_MSG: 'Salam ! J\'ai une question sur le bootcamp ROAS Academy 👋',
};
/* ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── READ PROGRESS ── */
  const prog = document.getElementById('readProgress');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    if (prog) prog.style.width = pct + '%';
  }, { passive: true });

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── MOBILE DRAWER ── */
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      burger.innerHTML = drawer.classList.contains('open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
      // Bloquer le scroll body quand le menu est ouvert
      document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        burger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
      });
    });
    // Fermer en cliquant en dehors
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !burger.contains(e.target)) {
        drawer.classList.remove('open');
        burger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
      }
    });
  }

  /* ── REVEAL ON SCROLL ── */
  const reveals = document.querySelectorAll(
    '.fw-card, .rcard, .testi-card, .price-card, .faq-item, .btable, .prog-week, .sol-feat, .ps-card, .prob-item'
  );
  reveals.forEach(el => el.classList.add('reveal'));
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 55);
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => ro.observe(el));

  /* ── PROGRAMME ACCORDION ── */
  document.querySelectorAll('.pw-head').forEach(head => {
    head.addEventListener('click', () => {
      const week = head.closest('.prog-week');
      const isActive = week.classList.contains('active');
      document.querySelectorAll('.prog-week').forEach(w => w.classList.remove('active'));
      if (!isActive) week.classList.add('active');
    });
  });
  // Open first by default
  document.querySelector('.prog-week')?.classList.add('active');

  /* ── FAQ ACCORDION ── */
  window.toggleFaq = (el) => {
    const item = el.closest('.faq-item');
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isOpen) item.classList.add('active');
  };

  /* ── RESULTS TABS ── */
  window.setTab = (name) => {
    document.querySelectorAll('.rtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.rtab-content').forEach(c => c.classList.remove('active'));
    const btn = [...document.querySelectorAll('.rtab')].find(b => b.getAttribute('onclick').includes(name));
    const content = document.getElementById('rtab-' + name);
    btn?.classList.add('active');
    if (content) {
      content.classList.add('active');
      content.querySelectorAll('.rcard, .btable').forEach(el => {
        el.classList.add('reveal');
        setTimeout(() => el.classList.add('in'), 50);
      });
    }
  };

  /* ── COUNTDOWN TIMER ── */
  const cdEl = document.getElementById('countdown');
  function getTarget() {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    d.setHours(23, 59, 59, 0);
    return d;
  }
  function updateCd() {
    if (!cdEl) return;
    const diff = getTarget() - new Date();
    if (diff <= 0) { cdEl.textContent = 'Early Bird expiré'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const p = n => String(n).padStart(2, '0');
    cdEl.innerHTML = `⏱️ Expire dans : <strong>${d}j ${p(h)}h ${p(m)}m ${p(s)}s</strong>`;
  }
  updateCd();
  setInterval(updateCd, 1000);

  /* ── SPOTS COUNTER ── */
  let spots = 35;
  const spotEls = document.querySelectorAll('#spotsCount, #topbarSpots, #finalSpots');
  setInterval(() => {
    if (Math.random() < 0.25 && spots > 25) {
      spots--;
      spotEls.forEach(el => { if (el) el.textContent = spots; });
    }
  }, 50000);

  /* ── HERO COUNTER ANIMATION ── */
  function animNum(el, to, dec = 0, dur = 2000) {
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = dec ? (to * ease).toFixed(dec) : Math.floor(to * ease);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = dec ? to.toFixed(dec) : to;
    };
    requestAnimationFrame(tick);
  }
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      statsObs.disconnect();
    }
  });
  const hStats = document.querySelector('.hero-stats');
  if (hStats) statsObs.observe(hStats);

 
  /* ── EMAILJS NOTIFICATION ── */
  async function sendEmailNotification(lead) {
    if (!CONFIG.EMAILJS_PUBLIC_KEY || !CONFIG.EMAILJS_SERVICE_ID || !CONFIG.EMAILJS_TEMPLATE_ID) return;
    try {
      emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
      await emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, {
        to_email:    CONFIG.NOTIFICATION_EMAIL,
        lead_prenom: lead.prenom,
        lead_nom:    lead.nom,
        lead_email:  lead.email,
        lead_wa:     lead.whatsapp,
        lead_metier: lead.activite || 'Non précisé',
        lead_offre:  lead.offre,
        lead_msg:    lead.message || 'Aucun message',
        lead_date:   new Date().toLocaleString('fr-MA'),
        wa_link:     `https://wa.me/${lead.whatsapp.replace(/[\s+\-]/g,'')}`,
      });
    } catch (err) {
      console.warn('EmailJS non configuré ou erreur :', err);
    }
  }

  /* ── WHATSAPP WIDGET ── */
  let waPopupOpen = false;

  window.toggleWaPopup = () => {
    waPopupOpen = !waPopupOpen;
    const popup = document.getElementById('waPopup');
    const fab   = document.getElementById('waFab');
    const notif = document.getElementById('waNotif');

    popup?.classList.toggle('open', waPopupOpen);
    fab?.classList.toggle('open', waPopupOpen);

    // Cacher le badge dès que le popup s'ouvre
    if (waPopupOpen && notif) notif.classList.add('hidden');

    // Focus sur l'input
    if (waPopupOpen) {
      setTimeout(() => document.getElementById('waInput')?.focus(), 300);
    }
  };

  window.buildWaLink = () => {
    const input = document.getElementById('waInput');
    const text  = input?.value.trim() || CONFIG.WA_DEFAULT_MSG;
    const btn   = document.getElementById('waBtn');
    if (btn) btn.href = `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(text)}`;
    return true; // laisse le lien s'ouvrir
  };

  window.sendWaMessage = () => {
    window.buildWaLink();
    document.getElementById('waBtn')?.click();
  };

  // Mise à jour dynamique des liens WhatsApp de la page (déjà mis à jour en dur)
  // WA_NUMBER = 212663353111

  /* ── STICKY MOBILE CTA ── */
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    window.addEventListener('scroll', () => {
      stickyCta.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (navbar?.offsetHeight || 70) + 16;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── ACTIVE NAV HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  sections.forEach(s => new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--green)' : '';
      });
    });
  }, { threshold: 0.4 }).observe(s));

  console.log('%c🚀 ROAS Academy v2 — Loaded', 'color:#10b981;font-weight:bold;font-size:14px');
});
