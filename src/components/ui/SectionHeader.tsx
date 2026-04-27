interface Props { eyebrow: string; title: string; subtitle: string; }

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
      <p className="max-w-3xl text-sm leading-normal text-text-secondary">{subtitle}</p>
    </div>
  );
}