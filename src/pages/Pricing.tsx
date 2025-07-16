import React from 'react';
import Header from '../components/Header';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;