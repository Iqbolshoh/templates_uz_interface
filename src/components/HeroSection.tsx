import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-aurora bg-400% animate-gradient-xy opacity-20"></div>
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-30"></div>
        
        {/* Floating Neon Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-pink rounded-full blur-xl animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-neon-blue rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-neon-green rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-neon-purple rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
        
        {/* Holographic Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-10">
        <div className="text-center">
          {/* Ultra-Modern Badge */}
          <div className="mb-8 animate-slide-down">
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-blue text-white rounded-full text-sm font-bold mb-6 shadow-neon-pink hover:shadow-neon-blue transition-all duration-500 backdrop-blur-sm border border-white/20">
              <svg className="w-5 h-5 mr-3 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              🚀 Next-Gen Web Solutions
            </span>
          </div>
          
          {/* Ultra-Modern Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in-up leading-none tracking-tight" style={{ animationDelay: '0.2s' }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green animate-gradient-x">
              FUTURE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-purple to-neon-pink animate-gradient-x" style={{ animationDelay: '0.5s' }}>
              WEB DESIGN
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-yellow to-neon-orange animate-gradient-x" style={{ animationDelay: '1s' }}>
              REVOLUTION
            </span>
          </h1>
          
          {/* Ultra-Modern Description */}
          <div className="max-w-4xl mx-auto mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 font-medium">
              Experience the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue font-bold animate-pulse-neon"> ULTIMATE </span>
              in modern web design with our revolutionary 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-purple font-bold"> AI-powered builder</span>, 
              stunning templates, and expert development services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group">
                <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse group-hover:animate-bounce"></div>
                <span className="font-bold group-hover:text-neon-pink transition-colors">🎨 AI-Powered Design</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group">
                <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse group-hover:animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <span className="font-bold group-hover:text-neon-blue transition-colors">⚡ Lightning Fast</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-neon-green/50 transition-all duration-300 group">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse group-hover:animate-bounce" style={{ animationDelay: '1s' }}></div>
                <span className="font-bold group-hover:text-neon-green transition-colors">🌟 24/7 AI Support</span>
              </div>
            </div>
          </div>
          
          {/* Ultra-Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-zoom-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="http://builder.templates.uz/" 
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-3xl shadow-neon-pink hover:shadow-neon-blue transform hover:scale-110 transition-all duration-500 overflow-hidden border-2 border-white/20 hover:border-white/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <svg className="w-7 h-7 mr-4 relative z-10 animate-spin-slow group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="relative z-10 animate-shimmer">🚀 START BUILDING NOW</span>
            </a>
            
            <Link 
              to="/templates" 
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-gradient-to-r from-transparent to-transparent rounded-3xl shadow-cyber hover:shadow-hologram transform hover:scale-110 transition-all duration-500 border-2 border-neon-blue hover:border-neon-green backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <svg className="w-7 h-7 mr-4 relative z-10 group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="relative z-10">✨ EXPLORE TEMPLATES</span>
            </Link>
          </div>

          {/* Ultra-Modern Feature Cards */}
          <div id="options" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {/* AI Builder Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 text-center shadow-glass hover:shadow-hologram transform hover:-translate-y-8 hover:rotate-1 transition-all duration-700 animate-slide-up border border-white/20 hover:border-neon-pink/50 overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-pink to-neon-purple rounded-3xl flex items-center justify-center shadow-neon-pink transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow-pulse">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-pink group-hover:to-neon-purple transition-all duration-300">🤖 AI Drag & Drop</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">Revolutionary AI-powered builder that creates stunning websites with zero coding. Just think it, and watch it come to life!</p>
                <a 
                  href="http://builder.templates.uz/" 
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-neon-pink hover:shadow-neon-purple"
                >
                  <span>🚀 Launch AI Builder</span>
                  <svg className="w-5 h-5 ml-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Holographic Templates Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 text-center shadow-glass hover:shadow-hologram transform hover:-translate-y-8 hover:-rotate-1 transition-all duration-700 animate-slide-up border border-white/20 hover:border-neon-blue/50 overflow-hidden" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-blue to-neon-green rounded-3xl flex items-center justify-center shadow-neon-blue transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-glow-pulse">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-green transition-all duration-300">🌈 Holographic Templates</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">Mind-blowing collection of futuristic templates that adapt to your brand with holographic effects and stunning animations.</p>
                <Link 
                  to="/templates" 
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-neon-blue hover:shadow-neon-green"
                >
                  <span>✨ Browse Magic</span>
                  <svg className="w-5 h-5 ml-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quantum Development Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 text-center shadow-glass hover:shadow-hologram transform hover:-translate-y-8 hover:rotate-1 transition-all duration-700 animate-slide-up border border-white/20 hover:border-neon-green/50 overflow-hidden md:col-span-2 lg:col-span-1" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-green to-neon-yellow rounded-3xl flex items-center justify-center shadow-neon-green transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow-pulse">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-green group-hover:to-neon-yellow transition-all duration-300">⚡ Quantum Development</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">Next-level custom development with quantum-speed delivery. Our AI-enhanced developers create impossible solutions in record time.</p>
                <a 
                  href="https://t.me/iqbolshoh_777" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-neon-green to-neon-yellow hover:from-neon-yellow hover:to-neon-green rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-neon-green hover:shadow-neon-yellow"
                >
                  <svg className="w-5 h-5 mr-3 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>🔮 Contact Quantum Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-Modern Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full shadow-neon-pink hover:shadow-neon-purple transform hover:scale-110 transition-all duration-300 animate-bounce flex items-center justify-center">
          <svg className="w-8 h-8 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;