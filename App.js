import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import BookingForm from './components/BookingForm';
import RideAvailability from './components/AvailableCabs';
import Profile from './components/Profile';
import BookingDetails from './components/BookingDetails';

function App() {
  const [bookingDetails, setBookingData] = useState(null); // Correct the variable name for state
  const [bookingsHistory, setBookingsHistory] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/book"
          element={
            <BookingForm
              setBookingData={setBookingData}
              setBookingsHistory={setBookingsHistory}
              bookingsHistory={bookingsHistory}
            />
          }
        />
        <Route path="/availability" element={<RideAvailability />} />
        <Route
          path="/details"
          element={<BookingDetails bookingData={bookingDetails} />} // Pass the correct prop
        />
        <Route path="/profile" element={<Profile bookingsHistory={bookingsHistory} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
