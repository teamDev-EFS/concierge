import { Hotel } from '../types';

export const hotels: Hotel[] = [
  { id: 'htl-01', name: 'Aman Tokyo', city: 'Tokyo', rating: 5, suite: 'Panoramic Corner Suite', nightlyRate: 3840, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=800&fit=crop', perks: ['Private check-in', 'Spa ritual', 'Late checkout'] },
  { id: 'htl-02', name: 'Cheval Blanc Paris', city: 'Paris', rating: 5, suite: 'Seine Prestige Suite', nightlyRate: 4725, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop', perks: ['Butler service', 'River transfer', 'Dining priority'] },
  { id: 'htl-03', name: 'Rosewood Hong Kong', city: 'Hong Kong', rating: 5, suite: 'Harbour House', nightlyRate: 5180, image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1200&h=800&fit=crop', perks: ['Helipad coordination', 'Personal shopper', 'Club access'] }
];