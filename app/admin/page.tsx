'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Statut = 'nouveau' | 'contacté' | 'payé' | 'annulé';

type Lead = {
  id: string;
  created_at: string;
  prenom: string;
  nom: string;
  email: string;
  whatsapp: string;
  activite: string;
  offre: string;
  message: string;
  statut: Statut;
};

const STATUTS: { value: Statut; label: string; color: string; bg: string }[] = [
  { value: 'nouveau',  label: '🆕 Nouveau',  color: '#60a5fa', bg: 'rgba(96,165,250,0.12)' },
  { value: 'contacté', label: '📞 Contacté', color: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  { value: 'payé',     label: '✅ Payé',     color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
  { value: 'annulé',   label: '❌ Annulé',   color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
];

const ADMIN_TOKEN = 'roas-admin-2026-secured';

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Statut | 'tous'>('tous');
  const [search, setSearch] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchLeads = async () => {
    const res = await fetch('/api/admin/leads', {
      headers: { 'x-admin-token': ADMIN_TOKEN },
    });
    if (res.status === 401) { router.push('/admin/login'); return; }
    const data = await res.json();
    setLeads(data.leads ?? []);
    setLoading(false);
  };

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth !== ADMIN_TOKEN) {
      router.push('/admin/login');
      return;
    }
    fetchLeads();
  }, []);

  const updateStatut = async (id: string, statut: Statut) => {
    setUpdating(id);
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': ADMIN_TOKEN,
      },
      body: JSON.stringify({ id, statut }),
    });
    setLeads(leads.map(l => l.id === id ? { ...l, statut } : l));
    setUpdating(null);
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Supprimer ce lead définitivement ?')) return;
    await fetch('/api/admin/leads', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': ADMIN_TOKEN,
      },
      body: JSON.stringify({ id }),
    });
    setLeads(leads.filter(l => l.id !== id));
  };

  const exportCSV = () => {
    const headers = ['Prénom', 'Nom', 'Email', 'WhatsApp', 'Offre', 'Activité', 'Statut', 'Message', 'Date'];
    const rows = filteredLeads.map(l => [
      l.prenom, l.nom, l.email, l.whatsapp, l.offre,
      l.activite, l.statut, l.message?.replace(/,/g, ' ') ?? '',
      new Date(l.created_at).toLocaleDateString('fr-FR'),
    ]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-roas-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const logout = () => {
    localStorage.removeItem('admin_auth');
    window.location.href = '/admin/login';
  };

  const filteredLeads = leads.filter(l => {
    const matchFilter = filter === 'tous' || l.statut === filter;
    const matchSearch = search === '' || [l.prenom, l.nom, l.email, l.whatsapp].some(v => v?.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  const stats = STATUTS.map(s => ({ ...s, count: leads.filter(l => l.statut === s.value).length }));

  const st = {
    page: { minHeight: '100vh', background: '#060b14', fontFamily: "'Inter', sans-serif", color: '#fff' },
    header: { background: '#111c30', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky' as const, top: 0, zIndex: 100 },
    brand: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 900 },
    main: { maxWidth: '1200px', margin: '0 auto', padding: '24px 20px' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' },
    statCard: { background: '#111c30', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '18px 20px' },
    table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: '0.86rem' },
    th: { padding: '12px 14px', textAlign: 'left' as const, color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.06em', borderBottom: '1px solid rgba(255,255,255,0.07)' },
    td: { padding: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)', verticalAlign: 'middle' as const },
    btn: { background: 'none', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '5px 10px', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', transition: 'all 0.2s' },
  };

  return (
    <div style={st.page}>
      <header style={st.header}>
        <div style={st.brand}>ROAS<span style={{ color: '#10b981' }}>.ma</span> <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400, fontSize: '0.85rem' }}>/ Admin</span></div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>{leads.length} leads total</span>
          <button onClick={exportCSV} style={{ ...st.btn, borderColor: 'rgba(16,185,129,0.4)', color: '#10b981' }}>📥 Export CSV</button>
          <button onClick={logout} style={st.btn}>Déconnexion</button>
        </div>
      </header>

      <main style={st.main}>
        {/* STATS */}
        <div style={st.statsGrid}>
          {stats.map(stat => (
            <div key={stat.value} style={{ ...st.statCard, borderColor: `${stat.color}30`, cursor: 'pointer' }} onClick={() => setFilter(stat.value)}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.count}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FILTRES + RECHERCHE */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="🔍 Rechercher un lead..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: '200px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '0.88rem', outline: 'none' }}
          />
          <button onClick={() => setFilter('tous')} style={{ ...st.btn, ...(filter === 'tous' ? { background: '#10b981', color: '#fff', borderColor: '#10b981' } : {}) }}>
            Tous ({leads.length})
          </button>
          {STATUTS.map(s => (
            <button key={s.value} onClick={() => setFilter(s.value)} style={{ ...st.btn, ...(filter === s.value ? { background: s.color, color: '#0a0f1a', borderColor: s.color } : {}) }}>
              {s.label} ({leads.filter(l => l.statut === s.value).length})
            </button>
          ))}
        </div>

        {/* TABLEAU */}
        <div style={{ background: '#111c30', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: '48px', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>Chargement des leads...</div>
          ) : filteredLeads.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
              {search ? 'Aucun lead trouvé pour cette recherche.' : 'Aucun lead pour le moment.'}
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={st.table}>
                <thead>
                  <tr>
                    {['Prénom & Nom', 'Email', 'WhatsApp', 'Offre', 'Date', 'Statut', 'Actions'].map(h => (
                      <th key={h} style={st.th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map(lead => (
                    <tr key={lead.id}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <td style={st.td}>
                        <div style={{ fontWeight: 600 }}>{lead.prenom} {lead.nom}</div>
                        {lead.activite && <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{lead.activite}</div>}
                      </td>
                      <td style={st.td}>
                        <a href={`mailto:${lead.email}`} style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.84rem' }}>{lead.email}</a>
                      </td>
                      <td style={st.td}>
                        <a href={`https://wa.me/${lead.whatsapp.replace(/[\s+\-]/g, '')}`} target="_blank" rel="noopener"
                          style={{ color: '#25d366', textDecoration: 'none', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                          📱 {lead.whatsapp}
                        </a>
                      </td>
                      <td style={st.td}>
                        <span style={{
                          background: lead.offre === 'vip' ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.12)',
                          color: lead.offre === 'vip' ? '#fbbf24' : '#10b981',
                          border: `1px solid ${lead.offre === 'vip' ? 'rgba(245,158,11,0.3)' : 'rgba(16,185,129,0.3)'}`,
                          borderRadius: '100px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 700,
                        }}>
                          {lead.offre === 'vip' ? '👑 VIP' : '🔥 Early Bird'}
                        </span>
                      </td>
                      <td style={{ ...st.td, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                        {new Date(lead.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                        <div style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                          {new Date(lead.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td style={st.td}>
                        <select
                          value={lead.statut ?? 'nouveau'}
                          disabled={updating === lead.id}
                          onChange={e => updateStatut(lead.id, e.target.value as Statut)}
                          style={{ background: '#0a1020', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '6px 10px', color: '#fff', fontSize: '0.8rem', cursor: 'pointer', outline: 'none' }}
                        >
                          {STATUTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>
                      </td>
                      <td style={st.td}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <a href={`https://wa.me/${lead.whatsapp.replace(/[\s+\-]/g, '')}?text=Salam ${lead.prenom} ! Je vous contacte de la part de ROAS Academy concernant votre inscription.`}
                            target="_blank" rel="noopener"
                            style={{ ...st.btn, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#25d366', borderColor: 'rgba(37,211,102,0.3)' }}>
                            💬 WA
                          </a>
                          <a href={`mailto:${lead.email}?subject=ROAS Academy — Votre inscription&body=Salam ${lead.prenom},`}
                            style={{ ...st.btn, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#60a5fa', borderColor: 'rgba(96,165,250,0.3)' }}>
                            ✉️
                          </a>
                          <button onClick={() => deleteLead(lead.id)}
                            style={{ ...st.btn, color: '#f87171', borderColor: 'rgba(248,113,113,0.3)' }}>
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* MESSAGES */}
        {filteredLeads.some(l => l.message) && (
          <div style={{ marginTop: '20px', background: '#111c30', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '20px' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Messages des leads</h3>
            {filteredLeads.filter(l => l.message).map(lead => (
              <div key={lead.id} style={{ borderLeft: '3px solid #10b981', paddingLeft: '14px', marginBottom: '12px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: '4px' }}>{lead.prenom} {lead.nom}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{lead.message}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
