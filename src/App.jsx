import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { InsurancePage } from './pages/InsurancePage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/seguro-automoveis" element={<InsurancePage type="auto" />} />
            <Route path="/seguro-moto" element={<InsurancePage type="moto" />} />
            <Route path="/seguro-residencial" element={<InsurancePage type="residencial" />} />
            <Route path="/seguro-empresarial" element={<InsurancePage type="empresarial" />} />
            <Route path="/seguro-vida-individual" element={<InsurancePage type="vida" />} />
            <Route path="/seguro-vida-grupo" element={<InsurancePage type="vida-grupo" />} />
            <Route path="/seguro-frota" element={<InsurancePage type="frota" />} />
            <Route path="/seguro-viagem" element={<InsurancePage type="viagem" />} />
            <Route path="/seguro-carta-verde" element={<InsurancePage type="carta-verde" />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

