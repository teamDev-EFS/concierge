import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { itineraryItems as seed } from '../data/itineraries';
import { ItineraryItem } from '../types';

interface ItineraryContextValue {
  items: ItineraryItem[];
  addItem: (item: ItineraryItem) => void;
}

const ItineraryContext = createContext<ItineraryContextValue | undefined>(undefined);

export function ItineraryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItineraryItem[]>(seed);
  const addItem = (item: ItineraryItem) => setItems((prev) => [item, ...prev]);
  const value = useMemo(() => ({ items, addItem }), [items]);
  return <ItineraryContext.Provider value={value}>{children}</ItineraryContext.Provider>;
}

export function useItinerary() {
  const ctx = useContext(ItineraryContext);
  if (!ctx) throw new Error('useItinerary must be used within ItineraryProvider');
  return ctx;
}