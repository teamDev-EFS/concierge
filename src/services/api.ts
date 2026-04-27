import { flights } from '../data/flights';
import { hotels } from '../data/hotels';
import { services } from '../data/services';
import { tours } from '../data/tours';

export const api = {
  getFlights: async () => Promise.resolve(flights),
  getHotels: async () => Promise.resolve(hotels),
  getServices: async () => Promise.resolve(services),
  getTours: async () => Promise.resolve(tours)
};