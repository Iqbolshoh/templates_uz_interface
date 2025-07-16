import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Professional Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-400/8 to-red-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-400/5 to-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Professional Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-black rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-red-600 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-black rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-red-500/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          {/* Professional Badge */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center px-6 py-3 bg-white border-2 border-red-500 text-red-600 rounded-full text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Professional Web Solutions
            </span>
          </div>
          
          {/* Professional Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in-up leading-none tracking-tight" style={{ animationDelay: '0.2s' }}>
            <span className="block text-black">
              Professional
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Web Design
            </span>
            <span className="block text-black">
              Solutions
            </span>
          </h1>
          
          {/* Professional Description */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Create stunning, professional websites with our advanced 
              <span className="text-red-600 font-bold"> drag & drop builder</span>, 
              premium templates, and expert development services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold">Professional Templates</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold">Expert Development</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="http://builder.templates.uz/" 
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-6 h-6 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="relative z-10">Start Building Now</span>
            </a>
            
            <Link 
              to="/templates" 
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-white border-3 border-black rounded-2xl shadow-2xl hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Templates</span>
            </Link>
          </div>

          {/* Professional Feature Cards */}
          <div id="options" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {/* Drag & Drop Card */}
            <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-red-500 transform hover:-translate-y-6 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-black mb-4">Drag & Drop Builder</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Create professional websites without coding. Simply drag elements and customize to your needs.</p>
                <a 
                  href="http://builder.templates.uz/" 
                  className="inline-flex items-center px-6 py-3 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Templates Card */}
            <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-red-500 transform hover:-translate-y-6 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-black mb-4">Premium Templates</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Choose from our collection of professionally designed templates and customize them to match your brand.</p>
                <Link 
                  to="/templates" 
                  className="inline-flex items-center px-6 py-3 text-sm font-bold text-black bg-gray-100 hover:bg-black hover:text-white rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  <span>Browse Templates</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Developer Services Card */}
            <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-red-500 transform hover:-translate-y-6 transition-all duration-500 animate-fade-in-up overflow-hidden md:col-span-2 lg:col-span-1" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-black rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-black mb-4">Expert Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Need something custom? Our professional developers create bespoke solutions tailored to your exact requirements.</p>
                <a 
                  href="https://t.me/iqbolshoh_777" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 text-sm font-bold text-white bg-black hover:bg-red-600 rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Contact Expert</span>
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