import React from 'react';
import Header from '../components/Header';
import TemplatesSection from '../components/TemplatesSection';
import Footer from '../components/Footer';

const Templates: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TemplatesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Templates;