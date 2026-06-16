// BFLEX-CLEANING/src/pages/Services/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';
import './Services.css';

function Services() {
    const services = [
        { title: 'Kantoorschoonmaak', img: '/assets/card1.png' },
        { title: 'Glas en gevelreiniging', img: '/assets/card2.png' },
        { title: 'Specialistische schoonmaak', img: '/assets/card3.png' },
        { title: 'Opleverschoonmaak', img: '/assets/card4.png' },
        { title: 'Kantoorschoonmaak', img: '/assets/card1.png' },
        { title: 'Glas en gevelreiniging', img: '/assets/card2.png' },
        { title: 'Specialistische schoonmaak', img: '/assets/card3.png' },
        { title: 'Opleverschoonmaak', img: '/assets/card4.png' },
    ];

    return (
        <div className="services-page">
            <Header2 />

            {/* Section 1: Services Grid */}
            <section className="sec1-section">
                <div className="sec1-container">
                    <div className="sec1-header-area">
                        <div className="sec1-breadcrumb">
                            <Link to="/">Home</Link> &gt; <span>Diensten</span>
                        </div>
                        <div className="sec1-titles">
                            <p className="sec1-subtitle">ONZE DIENSTEN</p>
                            <h1 className="sec1-title">
                                Schoonmaak op maat,<br />Voor elk type dienst
                            </h1>
                        </div>
                    </div>

                    <div className="sec1-grid">
                        {services.map((service, index) => (
                            <Link to="/service-detail" key={index} className="sec1-card">
                                <div
                                    className="sec1-card-bg"
                                    style={{ backgroundImage: `url('${service.img}')` }}
                                ></div>
                                <div className="sec1-card-overlay"></div>
                                <h3 className="sec1-card-title">{service.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: CTA Banner */}
            <section className="sec2-section">
                <div className="sec2-container">
                    <div className="sec2-banner">
                        <div className="sec2-content">
                            <h2 className="sec2-title">Intresse?</h2>
                            <p className="sec2-text">
                                Vraag vrijblijvend een offerte aan of neem contact<br />met ons op. We komen graag in contact!
                            </p>
                            <div className="sec2-buttons">
                                <Link to="#" className="sec2-btn sec2-btn-primary">Vraag een offerte aan</Link>
                                <Link to="#" className="sec2-btn sec2-btn-outline">neem contact op</Link>
                            </div>
                        </div>
                        <div className="sec2-image-wrapper">
                            <img src="/assets/yellow-hand.png" alt="Yellow Glove" className="sec2-image" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Services;