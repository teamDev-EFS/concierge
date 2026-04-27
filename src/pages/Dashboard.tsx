import { Crown, Globe2, Hotel, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { flights } from '../data/flights';
import { hotels } from '../data/hotels';
import { services } from '../data/services';
import { itineraryItems } from '../data/itineraries';
import SectionHeader from '../components/ui/SectionHeader';
import StatCard from '../components/ui/StatCard';
import ItineraryTimeline from '../components/itinerary/ItineraryTimeline';

export default function LayoutDashboard() {
  const [loading] = useState(false);
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/25 via-surface-1 to-background p-8 shadow-2xl">
        <SectionHeader eyebrow="Member control center" title="Private aviation, ground handling, suites, and bespoke access in one elevated desk." subtitle="Aurelia Private orchestrates every touchpoint from wheels-up to after-hours experiences with discreet, always-on concierge coverage." />
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all duration-150 hover:shadow-xl">Request a trip</button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-150 hover:bg-white/10">Review active itinerary</button>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Globe2} label="Open flight briefs" value="12" trend="+18% vs last month" />
        <StatCard icon={Sparkles} label="Concierge requests" value="38" trend="94% fulfilled within SLA" />
        <StatCard icon={Hotel} label="Suite nights secured" value="27" trend="+6 premium upgrades" />
        <StatCard icon={Crown} label="Member spend YTD" value="$940.3K" trend="Top 8% portfolio growth" />
      </section>
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="card-luxury">
          <h3 className="text-lg font-semibold">Signature options this week</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[flights[0], services[1], hotels[0]].map((item: any, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-surface-2 p-4 shadow-md">
                <img src={item.image} alt={item.title || item.aircraft || item.name} className="aspect-video w-full rounded-lg object-cover" loading="lazy" />
                <p className="mt-4 text-sm font-medium">{item.title || item.aircraft || item.name}</p>
                <p className="mt-1 text-sm text-text-secondary">{'route' in item ? item.route : 'city' in item ? item.city : item.priceNote}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Current itinerary flow</h3>
          {loading ? <div className="card-luxury animate-pulse h-72" /> : <ItineraryTimeline items={itineraryItems} />}
        </div>
      </section>
    </div>
  );
}