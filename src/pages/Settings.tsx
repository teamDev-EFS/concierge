import { useState } from 'react';
import LuxuryButton from '../components/ui/LuxuryButton';
import SectionHeader from '../components/ui/SectionHeader';

export default function Settings() {
  const [name, setName] = useState('Valentina Ross');
  const [email, setEmail] = useState('valentina@aureliaprivate.com');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; email?: string } = {};
    if (!name.trim()) nextErrors.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setMessage('Preferences updated for the concierge operations desk.');
  };

  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Preferences" title="Refine account, alerting, and service operations settings." subtitle="Designed for concierge leads managing always-on communication, member sensitivities, and premium response standards." />
      {message && <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{message}</div>}
      <form onSubmit={submit} className="card-luxury space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-text-tertiary">Display name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter team lead name" className={`w-full rounded-lg border bg-surface-2 px-3 py-2 text-text-primary outline-none transition-all ${errors.name ? 'border-red-500' : 'border-border-strong focus:border-primary focus:ring-2 focus:ring-primary/20'}`} />
            {errors.name && <span className="mt-1 block text-sm text-red-400">{errors.name}</span>}
          </label>
          <label className="text-sm">
            <span className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-text-tertiary">Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" className={`w-full rounded-lg border bg-surface-2 px-3 py-2 text-text-primary outline-none transition-all ${errors.email ? 'border-red-500' : 'border-border-strong focus:border-primary focus:ring-2 focus:ring-primary/20'}`} />
            {errors.email && <span className="mt-1 block text-sm text-red-400">{errors.email}</span>}
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface-2 p-4"><p className="text-sm font-medium">Critical trip alerts</p><p className="mt-1 text-sm text-text-secondary">Push instant notifications for route changes, hotel slips, and pending confirmations.</p></div>
          <div className="rounded-xl border border-border bg-surface-2 p-4"><p className="text-sm font-medium">Member privacy mode</p><p className="mt-1 text-sm text-text-secondary">Restrict traveler details to assigned managers and regional operations leads.</p></div>
        </div>
        <LuxuryButton type="submit">Save settings</LuxuryButton>
      </form>
    </div>
  );
}