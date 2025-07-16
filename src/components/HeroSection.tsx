import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/30 to-primary-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary-400/20 to-primary-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary-400 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-lg">
              🚀 Yangi platforma ishga tushdi!
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-black mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-secondary-950 via-secondary-800 to-secondary-950 bg-clip-text text-transparent">
              Veb-saytingizni
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
              tez va oson
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary-950 via-secondary-800 to-secondary-950 bg-clip-text text-transparent">
              yarating
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Templates.uz yordamida qisqa vaqt ichida ajoyib va moslashtirilgan veb-sayt yarating! 
            <span className="text-primary-600 font-semibold"> Drag & drop konstruktor</span>, 
            <span className="text-primary-600 font-semibold"> tayyor shablonlar</span> va 
            <span className="text-primary-600 font-semibold"> professional dasturchi xizmatlari</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="http://builder.templates.uz/" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-xl hover:shadow-glow-red transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-6 h-6 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="relative z-10">Yangi veb-sayt yaratish</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            
            <Link 
              to="/templates" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white border-2 border-primary-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-6 h-6 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="relative z-10">Variantlarni ko'rish</span>
            </Link>
          </div>

          {/* Creation Options */}
          <div id="options" className="grid md:grid-cols-3 gap-8 mt-20">
            {/* Drag & Drop Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-secondary-200 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-sans font-bold text-secondary-800 mb-4">Sudrab tashlash orqali sayt tuzish</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">Bloklarni sichqoncha yordamida harakatlantirib, hech qanday kodsiz saytingizni yaratishingiz mumkin.</p>
                <a 
                  href="http://builder.templates.uz/" 
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <span>Boshlash</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Templates Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-secondary-200 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-sans font-bold text-secondary-800 mb-4">Tayyor shablon asosida sayt yaratish</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">Keng tanlovdan o'zingizga mos shablonni tanlang va uni xohishingizga qarab o'zgartiring.</p>
                <Link 
                  to="/templates" 
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <span>Boshlash</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Developer Services Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-secondary-200 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-sans font-bold text-secondary-800 mb-4">Professional dasturchi xizmatidan foydalaning</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">Tez, xavfsiz va sizga mos bo'lgan noyob saytni tajribali dasturchi tomonidan tayyorlab beramiz.</p>
                <a 
                  href="https://t.me/iqbolshoh_777" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Keling, siznikini yarataylik!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;