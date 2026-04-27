import { Crown } from 'lucide-react';
import { Member } from '../../types';

export default function MemberBadge({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-1 p-4 shadow-md">
      <img src={member.avatar} alt={member.name} className="h-12 w-12 rounded-full object-cover" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{member.name}</p>
        <p className="text-xs text-text-secondary">{member.homeBase} · {member.email}</p>
      </div>
      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"><Crown className="h-3.5 w-3.5" />{member.tier}</span>
    </div>
  );
}