import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Contact from './pages/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;