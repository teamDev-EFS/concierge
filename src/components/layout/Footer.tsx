export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-1/70">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-2 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Aurelia Private. White-glove flight concierge for members worldwide.</p>
        <div className="flex gap-4">
          <span>Operations</span>
          <span>Privacy</span>
          <span>Member terms</span>
        </div>
      </div>
    </footer>
  );
}