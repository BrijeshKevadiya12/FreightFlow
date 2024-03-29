import './App.css';
import React from "react";
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import Booking from './pages/booking';
import BookingHistory from './pages/bookinghistory';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookinghistory" element={<BookingHistory />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
