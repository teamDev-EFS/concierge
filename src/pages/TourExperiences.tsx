import SectionHeader from '../components/ui/SectionHeader';
import LuxuryButton from '../components/ui/LuxuryButton';
import { tours } from '../data/tours';

export default function TourExperiences() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Destination access" title="Extraordinary experiences tailored around your flight window." subtitle="Each plan is arranged with trusted operators, private guides, security considerations, and member-specific tastes in mind." />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {tours.map((tour) => (
          <article key={tour.id} className="overflow-hidden rounded-xl border border-border bg-surface-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={tour.image} alt={tour.name} className="aspect-video w-full object-cover" loading="lazy" />
            <div className="p-5">
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tour.style}</span>
              <h3 className="mt-4 text-lg font-semibold">{tour.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{tour.location} · {tour.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{tour.summary}</p>
              <div className="mt-5"><LuxuryButton>Plan experience</LuxuryButton></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}