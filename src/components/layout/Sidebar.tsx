import { Crown, Globe, Hotel, LayoutDashboard, Map, Settings, Sparkles, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'LayoutDashboard', icon: LayoutDashboard },
  { to: '/flights', label: 'Flight Booking', icon: Globe },
  { to: '/services', label: 'Concierge', icon: Sparkles },
  { to: '/itinerary', label: 'Itinerary', icon: Map },
  { to: '/hotels', label: 'Hotels', icon: Hotel },
  { to: '/tours', label: 'Experiences', icon: Crown },
  { to: '/members', label: 'Members', icon: Users },
  { to: '/settings', label: 'Settings', icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col border-r border-border bg-surface-1/95 backdrop-blur-xl">
      <div className="h-16 px-6 flex items-center gap-3 border-b border-border">
        <div className="rounded-xl bg-primary/20 p-2 text-primary"><Crown className="h-5 w-5" /></div>
        <div>
          <p className="text-sm font-semibold">Aurelia Private</p>
          <p className="text-xs text-text-secondary">Elite concierge aviation</p>
        </div>
      </div>
      <nav className="p-4 space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `h-10 px-3 rounded-lg flex items-center gap-3 text-sm transition-all duration-150 ${isActive ? 'bg-primary-subtle text-primary font-medium' : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'}`}>
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl bg-surface-2 p-3">
          <img src="https://i.pravatar.cc/150?img=12" alt="Member concierge" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium">Valentina Ross</p>
            <p className="text-xs text-text-secondary">Senior lifestyle manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}