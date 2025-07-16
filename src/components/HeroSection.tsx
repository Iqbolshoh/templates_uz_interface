import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-red-400/15 to-red-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-red-400/10 to-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-10 sm:right-20 w-4 sm:w-6 h-4 sm:h-6 bg-red-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-10 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-3 sm:w-5 h-3 sm:h-5 bg-red-500 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-lg border border-red-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black mb-6 sm:mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              {t('hero.title.line1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <a 
              href="http://builder.templates.uz/" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl hover:shadow-glow-red transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="relative z-10">{t('hero.cta.primary')}</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            
            <Link 
              to="/templates" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-red-600 bg-white border-2 border-red-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="relative z-10">{t('hero.cta.secondary')}</span>
            </Link>
          </div>

          {/* Creation Options */}
          <div id="options" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20">
            {/* Drag & Drop Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-2xl font-sans font-bold text-gray-800 mb-3 sm:mb-4">{t('hero.options.dragDrop.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{t('hero.options.dragDrop.description')}</p>
                <a 
                  href="http://builder.templates.uz/" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <span>{t('hero.options.dragDrop.cta')}</span>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Templates Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-2xl font-sans font-bold text-gray-800 mb-3 sm:mb-4">{t('hero.options.templates.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{t('hero.options.templates.description')}</p>
                <Link 
                  to="/templates" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <span>{t('hero.options.templates.cta')}</span>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Developer Services Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden md:col-span-2 lg:col-span-1" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-2xl font-sans font-bold text-gray-800 mb-3 sm:mb-4">{t('hero.options.developer.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{t('hero.options.developer.description')}</p>
                <a 
                  href="https://t.me/iqbolshoh_777" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>{t('hero.options.developer.cta')}</span>
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