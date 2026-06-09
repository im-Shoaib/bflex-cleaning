import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('blogs');

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="content-wrapper">
          <Header />
          <main className="hero-content">
            <h1>Schoonmaak met <br /><span>Precisie</span></h1>
            <p>Waar wij zijn, wordt het schoon. We werken elke dag aan een betere leefomgeving. Mensen voelen zich daardoor prettig, veilig, thuis en welkom.</p>
            <Link to="/contact" className="cta-btn main-btn">Offerte aanvragen</Link>
          </main>
        </div>
      </section>

      {/* Section 2 */}
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
              <h2 className="sec2-title">Schoonmaak op maat,<br />Voor elk type dienst</h2>
            </div>
            <div className="sec2-header-right">
              <Link to="/services" className="sec2-link">Alle diensten bekijken <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className="sec2-cards">
            <div className="sec2-card">
              <div className="sec2-card-bg" style={{ backgroundImage: "url('/assets/card1.png')" }}></div>
              <div className="sec2-card-overlay"></div>
              <div className="sec2-card-content">
                <span className="sec2-card-text">Glas en gevelreiniging</span>
                <span className="sec2-card-icon"><i className="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
            <div className="sec2-card">
              <div className="sec2-card-bg" style={{ backgroundImage: "url('/assets/card2.png')" }}></div>
              <div className="sec2-card-overlay"></div>
              <div className="sec2-card-content">
                <span className="sec2-card-text">Glas en gevelreiniging</span>
                <span className="sec2-card-icon"><i className="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
            <div className="sec2-card">
              <div className="sec2-card-bg" style={{ backgroundImage: "url('/assets/card3.png')" }}></div>
              <div className="sec2-card-overlay"></div>
              <div className="sec2-card-content">
                <span className="sec2-card-text">Glas en gevelreiniging</span>
                <span className="sec2-card-icon"><i className="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
            <div className="sec2-card">
              <div className="sec2-card-bg" style={{ backgroundImage: "url('/assets/card4.png')" }}></div>
              <div className="sec2-card-overlay"></div>
              <div className="sec2-card-content">
                <span className="sec2-card-text">Glas en gevelreiniging</span>
                <span className="sec2-card-icon"><i className="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="sec3-section">
        <div className="sec3-container">
          <div className="sec3-header">
            <p className="sec3-subtitle">Insights</p>
            <h2 className="sec3-title">Laatste nieuws en inzichten</h2>
          </div>

          <div className="sec3-tabs">
            <button 
              className={`sec3-tab ${activeTab === 'blogs' ? 'sec3-tab-active' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              Blogs & Artikelen
            </button>
            <button 
              className={`sec3-tab ${activeTab === 'videos' ? 'sec3-tab-active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              Video's & Interviews
            </button>
          </div>

          <div className="sec3-grid">
            <article className="sec3-card">
              <div className="sec3-card-img-wrapper">
                <img src="/assets/card5.png" alt="Blog Image 1" className="sec3-card-img" />
              </div>
              <div className="sec3-card-content">
                <span className="sec3-card-category">Duurzaamheid</span>
                <h3 className="sec3-card-title">5 Manieren om je kantoor<br />Milieuvriendelijk schoon te houden</h3>
                <a href="#" className="sec3-card-link">
                  Lees verder 
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#3C9BFF"/>
                    <path d="M10.5 8L14.5 12L10.5 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>

            <article className="sec3-card">
              <div className="sec3-card-img-wrapper">
                <img src="/assets/card5.png" alt="Blog Image 2" className="sec3-card-img" />
              </div>
              <div className="sec3-card-content">
                <span className="sec3-card-category">Duurzaamheid</span>
                <h3 className="sec3-card-title">5 Manieren om je kantoor<br />Milieuvriendelijk schoon te houden</h3>
                <a href="#" className="sec3-card-link">
                  Lees verder 
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#3C9BFF"/>
                    <path d="M10.5 8L14.5 12L10.5 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>

            <article className="sec3-card">
              <div className="sec3-card-img-wrapper">
                <img src="/assets/card5.png" alt="Blog Image 3" className="sec3-card-img" />
              </div>
              <div className="sec3-card-content">
                <span className="sec3-card-category">Duurzaamheid</span>
                <h3 className="sec3-card-title">5 Manieren om je kantoor<br />Milieuvriendelijk schoon te houden</h3>
                <a href="#" className="sec3-card-link">
                  Lees verder 
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#3C9BFF"/>
                    <path d="M10.5 8L14.5 12L10.5 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="sec4-section">
        <div className="sec4-container">
          <div className="sec4-banner">
            <div className="sec4-bg-image" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}></div>
            <div className="sec4-overlay"></div>
            <div className="sec4-content">
              <h2 className="sec4-title">Laten we samen<br />kennis maken</h2>
              <p className="sec4-text">En ontdek de mogelijkheden die wij<br />voor u klaar hebben staan.</p>
              <Link to="/contact" className="sec4-btn">Offerte aanvragen</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}