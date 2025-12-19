import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">


        <div className="logo">
          <img src="/assets/logo.jpg" alt="Logo" />
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>


        <div className={`href-links ${menuOpen ? "active" : ""}`}>
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/aboutme" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/education" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/project" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>

      </div>
    </nav>
  );
}
