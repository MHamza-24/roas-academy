'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  if (password === 'TIMA2805tima@') {
  localStorage.setItem('admin_auth', 'roas-admin-2026-secured');
  window.location.href = '/admin';
}
};

  return (
    <div style={{
      minHeight: '100vh', background: '#060b14',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        background: '#111c30', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '420px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>
            ROAS<span style={{ color: '#10b981' }}>.ma</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Accès administration</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              autoFocus
              style={{
                width: '100%', background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${error ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                borderRadius: '10px', padding: '12px 16px', color: '#fff',
                fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '10px 14px', color: '#f87171', fontSize: '0.84rem' }}>
              ❌ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? '#0ea271' : '#10b981', color: '#fff',
              border: 'none', borderRadius: '12px', padding: '14px',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              fontSize: '0.95rem', cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '8px',
            }}
          >
            {loading ? 'Connexion...' : 'Se connecter →'}
          </button>
        </form>
      </div>
    </div>
  );
}
