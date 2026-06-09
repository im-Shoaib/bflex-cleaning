import { useState } from 'react';
import HeaderDefault from '../components/HeaderDefault';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    { question: "Are your cleaning products safe for the enviroment?", answer: "Ja, al onze producten zijn goed voor de natuur en 100% biologisch." },
    { question: "Are your cleaning products safe for the enviroment?", answer: "Ja, al onze producten zijn goed voor de natuur en 100% biologisch." },
    { question: "Are your cleaning products safe for the enviroment?", answer: "Ja, al onze producten zijn goed voor de natuur en 100% biologisch." },
    { question: "Are your cleaning products safe for the enviroment?", answer: "Ja, al onze producten zijn goed voor de natuur en 100% biologisch." },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <>
      <HeaderDefault />
      <section className="sec1-section">
        <div className="sec1-container">
          <div className="sec1-header">
            <div className="sec1-breadcrumb">
              <Link to="/">Home</Link> &gt; <span>Contact</span>
            </div>
            <p className="sec1-subtitle">CONTACTEER ONS</p>
            <h1 className="sec1-title">Stuur ons een bericht</h1>
          </div>

          <div className="sec1-content-wrapper">
            <div className="sec1-info-card">
              <h2 className="sec1-info-title">Contact gegevens</h2>
              <p className="sec1-info-desc">
                Wij vertellen je graag over onze ambities en drijfveren. Maar we horen nog liever wat jou beweegt.
              </p>
              <div className="sec1-info-block">
                <h3 className="sec1-info-label">Bezoekadres</h3>
                <p className="sec1-info-text">Palmpolstraat 64<br />1327 CH Almere</p>
              </div>
              <div className="sec1-info-block">
                <h3 className="sec1-info-label">Email</h3>
                <p className="sec1-info-text"><a href="mailto:info@bflexcleaning.nl">info@bflexcleaning.nl</a></p>
              </div>
              <div className="sec1-info-block">
                <h3 className="sec1-info-label">Telefoon</h3>
                <p className="sec1-info-text"><a href="tel:0365369381">036 536 9381</a></p>
              </div>
              <div className="sec1-info-block">
                <h3 className="sec1-info-label">Openingstijden</h3>
                <p className="sec1-info-text">Maandag t/m Vrijdag | 09:00 - 17:00</p>
              </div>
            </div>

            <div className="sec1-form-card">
              <form action="#" method="POST" className="sec1-contact-form">
                <div className="sec1-form-grid">
                  <div className="sec1-input-group">
                    <label htmlFor="voornaam" className="sec1-label">Voornaam</label>
                    <input type="text" id="voornaam" className="sec1-input" required />
                  </div>
                  <div className="sec1-input-group">
                    <label htmlFor="achternaam" className="sec1-label">Achternaam</label>
                    <input type="text" id="achternaam" className="sec1-input" required />
                  </div>
                  <div className="sec1-input-group">
                    <label htmlFor="organisatie" className="sec1-label">Organisatie</label>
                    <input type="text" id="organisatie" className="sec1-input" />
                  </div>
                  <div className="sec1-input-group">
                    <label htmlFor="email" className="sec1-label">Email</label>
                    <input type="email" id="email" className="sec1-input" required />
                  </div>
                  <div className="sec1-input-group">
                    <label htmlFor="telefoon" className="sec1-label">Telefoonnummer</label>
                    <input type="tel" id="telefoon" className="sec1-input" />
                  </div>
                  <div className="sec1-input-group">
                    <label htmlFor="onderwerp" className="sec1-label">Onderwerp</label>
                    <select id="onderwerp" className="sec1-select">
                      <option value="" disabled selected>Selecteer een onderwerp</option>
                      <option value="offerte">Offerte aanvragen</option>
                      <option value="vraag">Algemene vraag</option>
                      <option value="sollicitatie">Sollicitatie</option>
                    </select>
                  </div>
                </div>
                <div className="sec1-input-group sec1-full-width">
                  <label htmlFor="bericht" className="sec1-label">Bericht</label>
                  <textarea id="bericht" className="sec1-textarea" rows="6" required></textarea>
                </div>
                <div className="sec1-submit-wrapper">
                  <button type="submit" className="sec1-submit-btn">Versturen</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2-section">
        <div className="sec2-container">
          <div className="sec2-header">
            <span className="sec2-badge">FAQ</span>
            <h2 className="sec2-title">Heeft u vragen?</h2>
            <p className="sec2-subtitle">Wij hebben antwoorden bij uw meestegestelde vragen</p>
          </div>

          <div className="sec2-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`sec2-faq-item ${activeFaq === index ? 'sec2-active' : ''}`}>
                <button className="sec2-faq-btn" onClick={() => toggleFaq(index)}>
                  <span className="sec2-question-text">{faq.question}</span>
                  <span className="sec2-icon"></span>
                </button>
                <div className="sec2-faq-content" style={{ maxHeight: activeFaq === index ? '200px' : '0' }}>
                  <p className="sec2-answer-text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}