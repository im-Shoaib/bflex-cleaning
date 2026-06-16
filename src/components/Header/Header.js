// BFLEX-CLEANING/src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header-nav">
            <div className="logo">
                <img src="/assets/logo.png" alt="BFlex Cleaning Logo" />
            </div>

            <button
                className={`hamburger ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
                <nav className="nav-links">
                    <Link to="/sector">Sectoren</Link>
                    <Link to="/services">Diensten</Link>
                    <Link to="#">Proces</Link>
                    <Link to="#">Over ons</Link>
                </nav>
                <Link to="/sector" className="cta-btn header-btn">
                    Offerte aanvragen
                </Link>
            </div>
        </header>
    );
}

export default Header;