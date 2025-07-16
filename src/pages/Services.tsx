import React from 'react';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;