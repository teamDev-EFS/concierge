import { useState } from 'react';
import BookingModal from '../components/modals/BookingModal';
import ServiceCard from '../components/services/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import { services } from '../data/services';
import { useBooking } from '../context/BookingContext';

export default function ConciergeServices() {
  const { bookItem } = useBooking();
  const [active, setActive] = useState('');
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="White-glove services" title="Layer premium pickup, express check-in, and destination access around every journey." subtitle="Services are coordinated by a live lifestyle manager with destination hosts, local fixers, and hotel partner teams." />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} onBook={(id) => { bookItem(id); setActive(`${service.title} has been added to your concierge queue`); }} />
        ))}
      </div>
      <BookingModal open={!!active} title={active} onClose={() => setActive('')} />
    </div>
  );
}