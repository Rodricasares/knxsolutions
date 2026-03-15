import { useState } from "react";
import "./Header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="header-container">

        <div className="logo">
          KNX<span>Solutions</span>
        </div>

        {/* NAV */}

        <nav className={`nav ${menuOpen ? "active" : ""}`}>

          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </nav>

        {/* BURGER */}

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </header>
  );
}

export default Header;