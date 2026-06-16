// BFLEX-CLEANING/src/components/Header2/Header2.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header2.css';

function Header2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="head-header">
            <div className="head-container">
                <Link to="/" className="head-logo">
                    <img src="/assets/logo2.png" alt="BFlex Cleaning Logo" />
                </Link>

                <button
                    className={`head-hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`head-menu-wrapper ${isOpen ? 'active' : ''}`}>
                    <nav className="head-nav-links">
                        <Link to="/sector">Sectoren</Link>
                        <Link to="/services">Diensten</Link>
                        <Link to="#">Proces</Link>
                        <Link to="#">Over ons</Link>
                    </nav>
                    <Link to="/sector" className="head-cta-btn">
                        Offerte aanvragen
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header2;