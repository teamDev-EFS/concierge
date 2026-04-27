import SectionHeader from '../components/ui/SectionHeader';
import MemberBadge from '../components/ui/MemberBadge';
import { members } from '../data/members';
import { formatCurrency } from '../utils/helpers';

export default function Members() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Member relationships" title="High-touch client intelligence for every request." subtitle="Track home bases, tier level, recent travel patterns, and annual value to personalize service before the member asks." />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {members.map((member) => (
          <div key={member.id} className="card-luxury">
            <MemberBadge member={member} />
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div><p className="text-text-tertiary">Recent journey</p><p className="mt-1 font-medium">{member.lastTrip}</p></div>
              <div><p className="text-text-tertiary">YTD spend</p><p className="mt-1 font-medium">{formatCurrency(member.spendYtd)}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}