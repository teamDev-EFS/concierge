import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import FlightBooking from './pages/FlightBooking';
import ConciergeServices from './pages/ConciergeServices';
import Itinerary from './pages/Itinerary';
import HotelArrangements from './pages/HotelArrangements';
import TourExperiences from './pages/TourExperiences';
import Members from './pages/Members';
import Settings from './pages/Settings';
import { BookingProvider } from './context/BookingContext';
import { ItineraryProvider } from './context/ItineraryContext';

export default function App() {
  return (
    <BookingProvider>
      <ItineraryProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="flights" element={<FlightBooking />} />
            <Route path="services" element={<ConciergeServices />} />
            <Route path="itinerary" element={<Itinerary />} />
            <Route path="hotels" element={<HotelArrangements />} />
            <Route path="tours" element={<TourExperiences />} />
            <Route path="members" element={<Members />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ItineraryProvider>
    </BookingProvider>
  );
}