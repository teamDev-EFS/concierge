import { Clock3, Users } from 'lucide-react';
import { Flight } from '../../types';
import LuxuryButton from '../ui/LuxuryButton';
import { formatCurrency, formatDate } from '../../utils/helpers';

export default function FlightCard({ flight, onBook }: { flight: Flight; onBook: (id: string) => void }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={flight.image} alt={flight.aircraft} className="aspect-video w-full object-cover" loading="lazy" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{flight.aircraft}</h3>
            <p className="mt-1 text-sm text-text-secondary">{flight.route}</p>
          </div>
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${flight.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-300'}`}>{flight.status}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-text-secondary">
          <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />{formatDate(flight.departure)}</div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" />{flight.seats} guests</div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-text-tertiary">From</p>
            <p className="text-xl font-semibold">{formatCurrency(flight.price)}</p>
          </div>
          <LuxuryButton onClick={() => onBook(flight.id)}>Reserve aircraft</LuxuryButton>
        </div>
      </div>
    </article>
  );
}