import { ItineraryItem } from '../../types';

export default function ItineraryTimeline({ items }: { items: ItineraryItem[] }) {
  return (
    <div className="card-luxury space-y-5">
      {items.map((item, index) => (
        <div key={item.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`h-3 w-3 rounded-full ${item.status === 'Confirmed' ? 'bg-primary' : 'bg-warning'}`} />
            {index !== items.length - 1 && <div className="mt-2 h-full w-px bg-border-strong" />}
          </div>
          <div className="pb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-base font-medium">{item.title}</h3>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${item.status === 'Confirmed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-300'}`}>{item.status}</span>
            </div>
            <p className="mt-1 text-sm text-text-secondary">{item.time} · {item.location}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}