import { Flight } from '../types';

export const flights: Flight[] = [
  { id: 'flt-01', aircraft: 'Gulfstream G650ER', category: 'Ultra Long Range', route: 'London → Dubai', departure: '2026-05-16T08:30:00', arrival: '2026-05-16T17:10:00', duration: '6h 40m', price: 89450, seats: 12, image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop', status: 'Available' },
  { id: 'flt-02', aircraft: 'Bombardier Global 7500', category: 'Flagship', route: 'New York → Nice', departure: '2026-05-18T14:00:00', arrival: '2026-05-18T23:05:00', duration: '8h 05m', price: 102800, seats: 14, image: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=1200&h=800&fit=crop', status: 'Limited' },
  { id: 'flt-03', aircraft: 'Dassault Falcon 8X', category: 'Executive', route: 'Paris → Marrakech', departure: '2026-05-21T09:15:00', arrival: '2026-05-21T12:05:00', duration: '2h 50m', price: 42300, seats: 10, image: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1200&h=800&fit=crop', status: 'Available' }
];