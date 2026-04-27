import { useMemo, useState } from 'react';
import { PlaneTakeoff } from 'lucide-react';
import FlightCard from '../components/flights/FlightCard';
import BookingModal from '../components/modals/BookingModal';
import SectionHeader from '../components/ui/SectionHeader';
import LuxuryButton from '../components/ui/LuxuryButton';
import { flights } from '../data/flights';
import { useBooking } from '../context/BookingContext';

export default function FlightBooking() {
  const [search, setSearch] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const { bookItem } = useBooking();
  const filtered = useMemo(() => flights.filter((flight) => `${flight.aircraft} ${flight.route}`.toLowerCase().includes(search.toLowerCase())), [search]);
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Private fleet" title="Reserve aircraft matched to your route, guest profile, and timing." subtitle="Every reservation includes FBO coordination, preferred catering, luggage handling, and destination dispatch monitoring." />
      <div className="card-luxury flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="flex-1 text-sm">
          <span className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-text-tertiary">Search routes or aircraft</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search London, Dubai, G650ER..." className="w-full rounded-lg border border-border-strong bg-surface-2 px-3 py-2 text-sm text-text-primary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </label>
        <div className="rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary">Priority landing slots updated 11 minutes ago</div>
      </div>
      {filtered.length === 0 ? (
        <div className="card-luxury flex flex-col items-center justify-center text-center py-16">
          <div className="rounded-2xl bg-primary/10 p-4 text-primary"><PlaneTakeoff className="h-8 w-8" /></div>
          <h3 className="mt-5 text-lg font-semibold">No routes matched your request</h3>
          <p className="mt-2 max-w-md text-sm text-text-secondary">Refine the departure city, route pairing, or aircraft class — or have our flight desk source a charter directly.</p>
          <div className="mt-5">
            <LuxuryButton onClick={() => setSearch('')}>Reset search</LuxuryButton>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">{filtered.map((flight) => <FlightCard key={flight.id} flight={flight} onBook={(id) => { bookItem(id); setModalTitle(`Flight brief created for ${flight.route}`); }} />)}</div>
      )}
      <BookingModal open={!!modalTitle} title={modalTitle} onClose={() => setModalTitle('')} />
    </div>
  );
}
