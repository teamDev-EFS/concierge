import { X } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

export default function BookingModal({ open, title, onClose }: { open: boolean; title: string; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-surface-2 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-primary">Booking request drafted</p>
            <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-text-secondary">Your lifestyle manager has been alerted to secure preferences, transfer windows, and guest notes.</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 text-text-secondary transition-all duration-150 hover:bg-surface-3 hover:text-text-primary"><X className="h-4 w-4" /></button>
        </div>
        <div className="mt-6 rounded-xl border border-border bg-surface-1 p-4 text-sm text-text-secondary">
          Next steps: terminal coordination, suite pre-arrival checklist, and destination host confirmation will follow within 15 minutes.
        </div>
        <div className="mt-6 flex justify-end">
          <LuxuryButton onClick={onClose}>X request</LuxuryButton>
        </div>
      </div>
    </div>
  );
}