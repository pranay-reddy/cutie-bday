import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navibar.css";
import ProfileBar from "./ProfileBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* LEFT: hamburger / optional logo */}
        <div className="nav-left">
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        {/* CENTER: nav links - ALWAYS centered */}
        <div className="nav-center">
          <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <li><Link to="/" className="navbar-item">Home</Link></li>
            <li><Link to="/events" className="navbar-item">Events</Link></li>
            <li><Link to="/pic-dump" className="navbar-item">Pic Dump</Link></li>
            <li><Link to="/BDayWrapper" className="navbar-item">Birthday</Link></li>
            <li><Link to="/Christmas" className="navbar-item">Christmas</Link></li>
            <li><Link to="/Notes" className="navbar-item">Notes</Link></li>
          </ul>
        </div>

        {/* RIGHT: profile/logout (doesn't affect centering of center) */}
        <div className="nav-right">
          <ProfileBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
