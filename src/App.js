// BFLEX-CLEANING/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sector from './pages/Sector/Sector';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sector" element={<Sector />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service-detail" element={<ServiceDetail />} />
                    <Route path="/service-detail/:id" element={<ServiceDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;