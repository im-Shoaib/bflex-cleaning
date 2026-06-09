import HeaderDefault from '../components/HeaderDefault';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    { id: 1, title: 'Kantoorschoonmaak', image: '/assets/card1.png' },
    { id: 2, title: 'Glas en gevelreiniging', image: '/assets/card2.png' },
    { id: 3, title: 'Specialistische schoonmaak', image: '/assets/card3.png' },
    { id: 4, title: 'Opleverschoonmaak', image: '/assets/card4.png' },
    { id: 5, title: 'Kantoorschoonmaak', image: '/assets/card1.png' },
    { id: 6, title: 'Glas en gevelreiniging', image: '/assets/card2.png' },
    { id: 7, title: 'Specialistische schoonmaak', image: '/assets/card3.png' },
    { id: 8, title: 'Opleverschoonmaak', image: '/assets/card4.png' },
  ];

  return (
    <>
      <HeaderDefault />
      <section className="sec1-section">
        <div className="sec1-container">
          <div className="sec1-header-area">
            <div className="sec1-breadcrumb">
              <Link to="/">Home</Link> &gt; <span>Diensten</span>
            </div>
            <div className="sec1-titles">
              <p className="sec1-subtitle">ONZE DIENSTEN</p>
              <h1 className="sec1-title">Schoonmaak op maat,<br />Voor elk type dienst</h1>
            </div>
          </div>

          <div className="sec1-grid">
            {services.map(service => (
              <Link to={`/service/${service.id}`} key={service.id} className="sec1-card">
                <div className="sec1-card-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="sec1-card-overlay"></div>
                <h3 className="sec1-card-title">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec2-section">
        <div className="sec2-container">
          <div className="sec2-banner">
            <div className="sec2-content">
              <h2 className="sec2-title">Intresse?</h2>
              <p className="sec2-text">Vraag vrijblijvend een offerte aan of neem contact<br />met ons op. We komen graag in contact!</p>
              <div className="sec2-buttons">
                <Link to="/contact" className="sec2-btn sec2-btn-primary">Vraag een offerte aan</Link>
                <Link to="/contact" className="sec2-btn sec2-btn-outline">neem contact op</Link>
              </div>
            </div>
            <div className="sec2-image-wrapper">
              <img src="/assets/yellow-hand.png" alt="Yellow Glove" className="sec2-image" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}