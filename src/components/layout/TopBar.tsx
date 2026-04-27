import { Bell, Search } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-text-tertiary">Private travel desk</p>
          <h1 className="text-lg font-semibold">Elite flight & lifestyle operations</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-surface-1 px-3 py-2 text-sm text-text-secondary">
            <Search className="h-4 w-4" />
            Search itineraries, routes, requests
          </div>
          <button className="rounded-xl border border-border bg-surface-1 p-3 text-text-secondary transition-all duration-150 hover:bg-surface-2 hover:text-text-primary focus-visible:ring-2 focus-visible:ring-primary">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}