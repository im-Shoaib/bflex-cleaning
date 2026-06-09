import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-nav">
      <div className="logo">
        <img src="/assets/logo.png" alt="BFlex Cleaning Logo" />
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        id="hamburger-btn"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu-wrapper ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Diensten</Link>
          <Link to="/contact">Contact</Link>
          <a href="#">Proces</a>
          <a href="#">Over ons</a>
        </nav>
        <Link to="/contact" className="cta-btn header-btn">Offerte aanvragen</Link>
      </div>
    </header>
  );
}