import { Lucide, TrendingUp } from 'lucide-react';

interface Props { icon: Lucide; label: string; value: string; trend: string; }

export default function StatCard({ icon: Icon, label, value, trend }: Props) {
  return (
    <div className="card-luxury hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-text-secondary">{label}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight">{value}</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            <TrendingUp className="h-3.5 w-3.5" />
            {trend}
          </div>
        </div>
        <div className="rounded-xl bg-primary/10 p-3 text-primary"><Icon className="h-5 w-5" /></div>
      </div>
    </div>
  );
}