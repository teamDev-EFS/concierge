import { ConciergeService } from '../types';

export const services: ConciergeService[] = [
  { id: 'svc-01', title: 'Airside Chauffeur Reception', category: 'Ground', description: 'Rolls-Royce pickup directly from private terminal with luggage and security coordination.', priceNote: 'From $1,850 per transfer', eta: 'Available in 45 minutes', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=800&fit=crop' },
  { id: 'svc-02', title: 'Express Hotel Check-In', category: 'Hospitality', description: 'Pre-keyed suites, unpacking assistance, amenity preferences, and discreet arrival escort.', priceNote: 'Included with hotel partner stays', eta: 'Same-day arrangement', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop' },
  { id: 'svc-03', title: 'Curated City Access', category: 'Lifestyle', description: 'After-hours shopping, private dining rooms, gallery previews, and VIP reservations.', priceNote: 'Custom quote based on access', eta: 'Confirmed within 2 hours', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop' }
];