import { ItineraryItem } from '../types';

export const itineraryItems: ItineraryItem[] = [
  { id: 'it-01', type: 'Flight', title: 'G650ER departure', time: '16 May · 08:30', location: 'Farnborough Private Terminal', notes: 'Dedicated security lane and onboard tasting menu confirmed.', status: 'Confirmed' },
  { id: 'it-02', type: 'Transfer', title: 'Maybach airside pickup', time: '16 May · 17:25', location: 'Dubai Al Maktoum VIP', notes: 'Escort to Bulgari Resort with bilingual host.', status: 'Confirmed' },
  { id: 'it-03', type: 'Hotel', title: 'Penthouse express check-in', time: '16 May · 18:10', location: 'Bulgari Resort Dubai', notes: 'Signature scent, preferred champagne, and boardroom setup requested.', status: 'Confirmed' },
  { id: 'it-04', type: 'Tour', title: 'Private desert astronomy dinner', time: '17 May · 19:00', location: 'Al Marmoom Reserve', notes: 'Astronomer guide and custom menu awaiting final dietary note.', status: 'Pending' }
];