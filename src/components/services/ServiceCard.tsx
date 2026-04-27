import { ConciergeService } from '../../types';
import LuxuryButton from '../ui/LuxuryButton';

export default function ServiceCard({ service, onBook }: { service: ConciergeService; onBook: (id: string) => void }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={service.image} alt={service.title} className="aspect-video w-full object-cover" loading="lazy" />
      <div className="p-5">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{service.category}</span>
        <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{service.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-text-primary">{service.priceNote}</p>
            <p className="text-xs text-text-secondary">{service.eta}</p>
          </div>
          <LuxuryButton variant="secondary" onClick={() => onBook(service.id)}>Add service</LuxuryButton>
        </div>
      </div>
    </article>
  );
}