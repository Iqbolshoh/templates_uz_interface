import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
<<<<<<< HEAD
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
              Yangi platforma ishga tushdi!
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black mb-6 sm:mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Veb-saytingizni
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              tez va oson
            </span>
            <br />
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              yarating
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            Templates.uz yordamida qisqa vaqt ichida ajoyib va moslashtirilgan veb-sayt yarating! 
            <span className="text-red-600 font-semibold"> Drag & drop konstruktor</span>, 
            <span className="text-red-600 font-semibold"> tayyor shablonlar</span> va 
            <span className="text-red-600 font-semibold"> professional dasturchi xizmatlari</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <a 
              href="http://builder.templates.uz/" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl hover:shadow-glow-red transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
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
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="relative z-10 animate-shimmer">🚀 START BUILDING NOW</span>
            </a>
            
            <Link 
              to="/templates" 
<<<<<<< HEAD
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-red-600 bg-white border-2 border-red-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-gradient-to-r from-transparent to-transparent rounded-3xl shadow-cyber hover:shadow-hologram transform hover:scale-110 transition-all duration-500 border-2 border-neon-blue hover:border-neon-green backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <svg className="w-7 h-7 mr-4 relative z-10 group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="relative z-10">✨ EXPLORE TEMPLATES</span>
            </Link>
          </div>

<<<<<<< HEAD
          {/* Creation Options */}
          <div id="options" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20">
            {/* Drag & Drop Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
=======
          {/* Ultra-Modern Feature Cards */}
          <div id="options" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {/* AI Builder Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 text-center shadow-glass hover:shadow-hologram transform hover:-translate-y-8 hover:rotate-1 transition-all duration-700 animate-slide-up border border-white/20 hover:border-neon-pink/50 overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-pink to-neon-purple rounded-3xl flex items-center justify-center shadow-neon-pink transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow-pulse">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
<<<<<<< HEAD
                <h3 className="text-lg sm:text-2xl font-sans font-bold text-gray-800 mb-3 sm:mb-4">Sudrab tashlash orqali sayt tuzish</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">Bloklarni sichqoncha yordamida harakatlantirib, hech qanday kodsiz saytingizni yaratishingiz mumkin.</p>
                <a 
                  href="http://builder.templates.uz/" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <span>Boshlash</span>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-pink group-hover:to-neon-purple transition-all duration-300">🤖 AI Drag & Drop</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">Revolutionary AI-powered builder that creates stunning websites with zero coding. Just think it, and watch it come to life!</p>
                <a 
                  href="http://builder.templates.uz/" 
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-neon-pink hover:shadow-neon-purple"
                >
                  <span>🚀 Launch AI Builder</span>
                  <svg className="w-5 h-5 ml-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

<<<<<<< HEAD
            {/* Templates Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
=======
            {/* Holographic Templates Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 text-center shadow-glass hover:shadow-hologram transform hover:-translate-y-8 hover:-rotate-1 transition-all duration-700 animate-slide-up border border-white/20 hover:border-neon-blue/50 overflow-hidden" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-blue to-neon-green rounded-3xl flex items-center justify-center shadow-neon-blue transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-glow-pulse">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
<<<<<<< HEAD
                <h3 className="text-lg sm:text-2xl font-sans font-bold text-gray-800 mb-3 sm:mb-4">Tayyor shablon asosida sayt yaratish</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">Keng tanlovdan o'zingizga mos shablonni tanlang va uni xohishingizga qarab o'zgartiring.</p>
                <Link 
                  to="/templates" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <span>Boshlash</span>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-green transition-all duration-300">🌈 Holographic Templates</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">Mind-blowing collection of futuristic templates that adapt to your brand with holographic effects and stunning animations.</p>
                <Link 
                  to="/templates" 
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-neon-blue hover:shadow-neon-green"
                >
                  <span>✨ Browse Magic</span>
                  <svg className="w-5 h-5 ml-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

<<<<<<< HEAD
            {/* Developer Services Option */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden md:col-span-2 lg:col-span-1" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
=======
            {/* Quantum Development Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 text-center shadow-glass hover:shadow-hologram transform hover:-translate-y-8 hover:rotate-1 transition-all duration-700 animate-slide-up border border-white/20 hover:border-neon-green/50 overflow-hidden md:col-span-2 lg:col-span-1" style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-green to-neon-yellow rounded-3xl flex items-center justify-center shadow-neon-green transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow-pulse">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
<<<<<<< HEAD
                <h3 className="text-lg sm:text-2xl font-sans font-bold text-gray-800 mb-3 sm:mb-4">Professional dasturchi xizmatidan foydalaning</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">Tez, xavfsiz va sizga mos bo'lgan noyob saytni tajribali dasturchi tomonidan tayyorlab beramiz.</p>
=======
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-green group-hover:to-neon-yellow transition-all duration-300">⚡ Quantum Development</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">Next-level custom development with quantum-speed delivery. Our AI-enhanced developers create impossible solutions in record time.</p>
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                <a 
                  href="https://t.me/iqbolshoh_777" 
                  target="_blank" 
                  rel="noopener noreferrer" 
<<<<<<< HEAD
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-300 group-hover:scale-105"
                >
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-neon-green to-neon-yellow hover:from-neon-yellow hover:to-neon-green rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-neon-green hover:shadow-neon-yellow"
                >
                  <svg className="w-5 h-5 mr-3 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
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