import { useState } from 'react';
import ItineraryTimeline from '../components/itinerary/ItineraryTimeline';
import LuxuryButton from '../components/ui/LuxuryButton';
import SectionHeader from '../components/ui/SectionHeader';
import { useItinerary } from '../context/ItineraryContext';

export default function Itinerary() {
  const { items, addItem } = useItinerary();
  const [success, setSuccess] = useState('');
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Trip orchestration" title="A polished view of the entire guest journey." subtitle="Track confirmed movements, pending experience holds, and hospitality handoffs across every destination moment." />
      {success && <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{success}</div>}
      <div className="flex justify-end">
        <LuxuryButton onClick={() => { addItem({ id: crypto.randomUUID(), type: 'Transfer', title: 'Helicopter shoreline transfer', time: '18 May · 10:30', location: 'Monaco Heliport', notes: 'Sea-facing arrival with luggage escort.', status: 'Pending' }); setSuccess('A helicopter shoreline transfer has been proposed and added to the itinerary.'); }}>Add premium transfer</LuxuryButton>
      </div>
      <ItineraryTimeline items={items} />
    </div>
  );
}