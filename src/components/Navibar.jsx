import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navibar.css';  // Your updated CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle hamburger menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {/* Links for routing using react-router-dom */}
        <li><Link to="/" className="navbar-item">Home</Link></li>  {/* Link to Home page */}
        <li><Link to="/events" className="navbar-item">Events</Link></li>  {/* Link to Events page */}
        <li><Link to="/pic-dump" className="navbar-item">Pic Dump</Link></li>  {/* Link to Pic Dump page */}
      </ul>
    </nav>
  );
};

export default Navbar;
