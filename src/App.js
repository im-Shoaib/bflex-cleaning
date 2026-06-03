import React, { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="content-wrapper">
          <header className="header-nav">
            <div className="logo">
              <img src="/assets/logo.png" alt="BFlex Cleaning Logo" />
            </div>

            <button
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className={`nav-menu-wrapper ${isMenuOpen ? "active" : ""}`}
            >
              <nav className="nav-links">
                <a href="#">Sectoren</a>
                <a href="#">Diensten</a>
                <a href="#">Proces</a>
                <a href="#">Over ons</a>
              </nav>
              <button className="cta-btn header-btn">Offerte aanvragen</button>
            </div>
          </header>

          <main className="hero-content">
            <h1>
              Schoonmaak met <br />
              <span>Precisie</span>
            </h1>
            <p>
              Waar wij zijn, wordt het schoon. We werken elke dag aan een betere
              leefomgeving. Mensen voelen zich daardoor prettig, veilig, thuis en
              welkom.
            </p>
            <button className="cta-btn main-btn">Offerte aanvragen</button>
          </main>
        </div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section className="sec2-wrapper">
        <div className="sec2-container">
          <div className="sec2-partners">
            <h2 className="sec2-partners-title">Waarmee wij samenwerken</h2>
            <div className="sec2-logos">
              <img src="/assets/laplace.png" alt="La Place" className="sec2-logo" />
              <img src="/assets/nijhof.png" alt="Nijhof" className="sec2-logo" />
              <img src="/assets/laplace.png" alt="La Place" className="sec2-logo" />
              <img src="/assets/nijhof.png" alt="Nijhof" className="sec2-logo" />
              <img src="/assets/laplace.png" alt="La Place" className="sec2-logo" />
              <img src="/assets/nijhof.png" alt="Nijhof" className="sec2-logo" />
              <img src="/assets/laplace.png" alt="La Place" className="sec2-logo" />
            </div>
          </div>

          <div className="sec2-header-row">
            <div className="sec2-header-left">
              <p className="sec2-subtitle">Onze schoonmaakdiensten</p>
              <h2 className="sec2-title">
                Schoonmaak op maat,
                <br />
                Voor elk type dienst
              </h2>
            </div>
            <div className="sec2-header-right">
              <a href="#" className="sec2-link">
                Alle diensten bekijken <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="sec2-cards">
            {["card1.png", "card2.png", "card3.png", "card4.png"].map(
              (img, idx) => (
                <div className="sec2-card" key={idx}>
                  <div
                    className="sec2-card-bg"
                    style={{ backgroundImage: `url(/assets/${img})` }}
                  ></div>
                  <div className="sec2-card-overlay"></div>
                  <div className="sec2-card-content">
                    <span className="sec2-card-text">Glas en gevelreiniging</span>
                    <span className="sec2-card-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ---------- Section 3 ---------- */}
      <section className="sec3-section">
        <div className="sec3-container">
          <div className="sec3-header">
            <p className="sec3-subtitle">Insights</p>
            <h2 className="sec3-title">Laatste nieuws en inzichten</h2>
          </div>

          <div className="sec3-tabs">
            <button className="sec3-tab sec3-tab-active">
              Blogs & Artikelen
            </button>
            <button className="sec3-tab">Video's & Interviews</button>
          </div>

          <div className="sec3-grid">
            {[1, 2, 3].map((num) => (
              <article className="sec3-card" key={num}>
                <div className="sec3-card-img-wrapper">
                  <img
                    src="/assets/card5.png"
                    alt={`Blog Image ${num}`}
                    className="sec3-card-img"
                  />
                </div>
                <div className="sec3-card-content">
                  <span className="sec3-card-category">Duurzaamheid</span>
                  <h3 className="sec3-card-title">
                    5 Manieren om je kantoor
                    <br />
                    Milieuvriendelijk schoon te houden
                  </h3>
                  <a href="#" className="sec3-card-link">
                    Lees verder
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" fill="#3C9BFF" />
                      <path
                        d="M10.5 8L14.5 12L10.5 16"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Section 4 ---------- */}
      <section className="sec4-section">
        <div className="sec4-container">
          <div className="sec4-banner">
            <div
              className="sec4-bg-image"
              style={{ backgroundImage: `url(/assets/hero-bg.png)` }}
            ></div>
            <div className="sec4-overlay"></div>
            <div className="sec4-content">
              <h2 className="sec4-title">
                Laten we samen
                <br />
                kennis maken
              </h2>
              <p className="sec4-text">
                En ontdek de mogelijkheden die wij
                <br />
                voor u klaar hebben staan.
              </p>
              <button className="sec4-btn">Offerte aanvragen</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-col footer-col-brand">
              <img
                src="/assets/logo.png"
                alt="BFlex Cleaning"
                className="footer-logo"
              />
              <p className="footer-social-text">volg ons op</p>
              <div className="footer-social-icons">
                <a href="#" className="footer-social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="footer-social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="footer-social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Diensten</h4>
              <ul className="footer-list">
                <li><a href="#">Kantoorschoonmaak</a></li>
                <li><a href="#">Glas en gevelreiniging</a></li>
                <li><a href="#">Industriele reiniging</a></li>
                <li><a href="#">Afwassers diensten</a></li>
                <li><a href="#">Industriele reiniging</a></li>
                <li><a href="#">Afwassers diensten</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Bedrijf</h4>
              <ul className="footer-list">
                <li><a href="#">Over ons</a></li>
                <li><a href="#">Werkwijze</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Certificeringen</a></li>
                <li><a href="#">Werken bij</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li><a href="#">Offerte aanvragen</a></li>
                <li><a href="#">Stuur een bericht</a></li>
                <li><a href="mailto:info@bflexcleaning.nl">info@bflexcleaning.nl</a></li>
                <li><a href="tel:0365369381">036 53 69381</a></li>
              </ul>
              <h4 className="footer-heading footer-mt">Adresgegevens</h4>
              <ul className="footer-list">
                <li><span>Palmpolstraat 64</span></li>
                <li><span>1327 CH Almere</span></li>
                <li><span>Nederland</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;