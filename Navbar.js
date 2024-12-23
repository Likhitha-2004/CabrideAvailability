import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CabConnect</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book">Book a Ride</Link></li>
        <li><Link to="/availability">Ride Availability</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
