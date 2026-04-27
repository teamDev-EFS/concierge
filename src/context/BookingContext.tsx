import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface BookingContextValue {
  selectedIds: string[];
  bookItem: (id: string) => void;
  removeItem: (id: string) => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(['flt-01', 'svc-01']);
  const bookItem = (id: string) => setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  const removeItem = (id: string) => setSelectedIds((prev) => prev.filter((item) => item !== id));
  const value = useMemo(() => ({ selectedIds, bookItem, removeItem }), [selectedIds]);
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}