import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderDefault() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="head-header">
      <div className="head-container">
        <Link to="/" className="head-logo">
          <img src="/assets/logo2.png" alt="BFlex Cleaning Logo" />
        </Link>

        <button 
          className={`head-hamburger ${isMenuOpen ? 'active' : ''}`} 
          id="head-hamburger-btn"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`head-menu-wrapper ${isMenuOpen ? 'active' : ''}`} id="head-nav-menu">
          <nav className="head-nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Diensten</Link>
            <Link to="/contact">Contact</Link>
            <a href="#">Proces</a>
            <a href="#">Over ons</a>
          </nav>
          <Link to="/contact" className="head-cta-btn">Offerte aanvragen</Link>
        </div>
      </div>
    </header>
  );
}