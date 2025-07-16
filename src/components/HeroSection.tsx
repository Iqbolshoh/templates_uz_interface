import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-500 mb-6 animate-fade-in-up">
            Veb-saytingizni tez va oson yarating
          </h1>
          <p className="text-xl text-secondary-500 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Templates.uz yordamida qisqa vaqt ichida ajoyib va moslashtirilgan veb-sayt yarating!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="http://builder.templates.uz/" className="btn-primary-custom inline-flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Yangi veb-sayt yaratish</span>
            </a>
            <Link to="/templates" className="btn-outline-primary inline-flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Variantlarni ko'rish</span>
            </Link>
          </div>

          {/* Creation Options */}
          <div id="options" className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-3xl p-8 text-center shadow-soft hover:shadow-medium hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-primary-500 text-5xl mb-6">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-700 mb-4">Sudrab tashlash orqali sayt tuzish</h3>
              <p className="text-secondary-500 mb-6">Bloklarni sichqoncha yordamida harakatlantirib, hech qanday kodsiz saytingizni yaratishingiz mumkin.</p>
              <a href="http://builder.templates.uz/" className="btn-outline-primary text-sm py-2 px-6">Boshlash</a>
            </div>

            <div className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-3xl p-8 text-center shadow-soft hover:shadow-medium hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-primary-500 text-5xl mb-6">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-700 mb-4">Tayyor shablon asosida sayt yaratish</h3>
              <p className="text-secondary-500 mb-6">Keng tanlovdan o'zingizga mos shablonni tanlang va uni xohishingizga qarab o'zgartiring.</p>
              <Link to="/templates" className="btn-outline-primary text-sm py-2 px-6">Boshlash</Link>
            </div>

            <div className="bg-gradient-to-br from-white to-primary-50 border border-primary-200 rounded-3xl p-8 text-center shadow-soft hover:shadow-medium hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-primary-500 text-5xl mb-6">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-700 mb-4">Professional dasturchi xizmatidan foydalaning</h3>
              <p className="text-secondary-500 mb-6">Tez, xavfsiz va sizga mos bo'lgan noyob saytni tajribali dasturchi tomonidan tayyorlab beramiz.</p>
              <a href="https://t.me/iqbolshoh_777" target="_blank" rel="noopener noreferrer" className="btn-outline-primary text-sm py-2 px-6 inline-flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Keling, siznikini yarataylik!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;