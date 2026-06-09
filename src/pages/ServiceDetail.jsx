import HeaderDefault from '../components/HeaderDefault';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams();

  return (
    <>
      <HeaderDefault />
      <section className="sec1-section">
        <div className="sec1-container">
          <div className="sec1-header">
            <div className="sec1-breadcrumb">
              <Link to="/services">Diensten</Link> &gt; <span>Kantoorschoonmaak</span>
            </div>
            <p className="sec1-subtitle">DIENSTEN</p>
            <h1 className="sec1-title">KANTOORSCHOONMAAK</h1>
          </div>

          <div className="sec1-main-content">
            <div className="sec1-image-wrapper">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop" alt="Kantoorschoonmaak" className="sec1-image" />
            </div>
            <div className="sec1-text-card">
              <h2 className="sec1-card-heading">Over deze dienst</h2>
              <p className="sec1-card-paragraph">
                Maintain a professional, healthy, and spotless workplace with our commercial cleaning service. We tailor solutions for offices, shops, and businesses, focusing on floors, restrooms, workstations, and common areas. Our reliable cleaning team ensures a hygienic environment that boosts employee productivity, impresses clients, and keeps your business space consistently fresh and clean.
              </p>
              <Link to="/contact" className="sec1-btn">Offerte aanvragen</Link>
            </div>
          </div>

          <div className="sec1-highlights-grid">
            <div className="sec1-highlight-card">
              <div className="sec1-highlight-header">Een frisse werkplek voor elke werkdag</div>
              <div className="sec1-highlight-body">Van bureaus en vloeren tot pantry, sanitair en vergaderruimtes.</div>
            </div>
            <div className="sec1-highlight-card">
              <div className="sec1-highlight-header">Een frisse werkplek voor elke werkdag</div>
              <div className="sec1-highlight-body">Van bureaus en vloeren tot pantry, sanitair en vergaderruimtes.</div>
            </div>
            <div className="sec1-highlight-card">
              <div className="sec1-highlight-header">Een frisse werkplek voor elke werkdag</div>
              <div className="sec1-highlight-body">Van bureaus en vloeren tot pantry, sanitair en vergaderruimtes.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2-section">
        <div className="sec2-container">
          <div className="sec2-certificates-area">
            <h2 className="sec2-certs-title">Certificaten en keurmerken</h2>
            <div className="sec2-certs-layout">
              <div className="sec2-certs-logos">
                <div className="sec2-cert-box">
                  <img src="/assets/cert1.png" alt="OSB Keurmerk" className="sec2-cert-img" />
                </div>
                <div className="sec2-cert-box">
                  <img src="/assets/cert2.png" alt="SNA Keurmerk" className="sec2-cert-img" />
                </div>
              </div>
              <div className="sec2-certs-text-block">
                <p className="sec2-certs-text">
                  Wij zijn ontzettend trots op onze certificering en keurmerken. Wij gaan namelijk alleen voor het beste van het beste. Zodat jij altijd great results ziet. Dankzij great work.
                </p>
                <a href="#" className="sec2-certs-link">Bekijk alle certificaten en keurmerken van ons</a>
              </div>
            </div>
          </div>

          <div className="sec2-spacer"></div>

          <div className="sec2-banner">
            <div className="sec2-banner-content">
              <h2 className="sec2-banner-title">Intresse?</h2>
              <p className="sec2-banner-text">Vraag vrijblijvend een offerte aan of neem contact met<br />ons op. We komen graag in contact!</p>
              <div className="sec2-banner-buttons">
                <Link to="/contact" className="sec2-btn sec2-btn-primary">Vraag een offerte aan</Link>
                <Link to="/contact" className="sec2-btn sec2-btn-outline">neem contact op</Link>
              </div>
            </div>
            <div className="sec2-banner-image-wrapper">
              <img src="/assets/yellow-hand.png" alt="Yellow Glove" className="sec2-banner-image" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}