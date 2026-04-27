import { Star } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import LuxuryButton from '../components/ui/LuxuryButton';
import { hotels } from '../data/hotels';

export default function HotelArrangements() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Partner stays" title="Secure suites with preferences handled before arrival." subtitle="From wellness sanctuaries to city landmarks, every hotel profile is configured with member notes, timing, and access priorities." />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {hotels.map((hotel) => (
          <article key={hotel.id} className="overflow-hidden rounded-xl border border-border bg-surface-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={hotel.image} alt={hotel.name} className="aspect-video w-full object-cover" loading="lazy" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-amber-300">{Array.from({ length: hotel.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              </div>
              <p className="mt-1 text-sm text-text-secondary">{hotel.city} · {hotel.suite}</p>
              <div className="mt-4 flex flex-wrap gap-2">{hotel.perks.map((perk) => <span key={perk} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{perk}</span>)}</div>
              <div className="mt-5 flex items-center justify-between"><div><p className="text-xs uppercase tracking-widest text-text-tertiary">Nightly from</p><p className="text-xl font-semibold">${hotel.nightlyRate.toLocaleString()}</p></div><LuxuryButton variant="secondary">Hold suite</LuxuryButton></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}