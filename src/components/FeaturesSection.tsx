import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
<<<<<<< HEAD
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Drag & Drop Tuzuvchi',
      description: 'Kod yozmasdan saytingizni sozlang. Elementlarni osongina joylashtiring va joylarini o\'zgartiring.',
=======
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Drag & Drop Builder',
      description: 'Create professional websites without coding. Intuitive interface with powerful customization options.',
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
      link: '#'
    },
    {
      icon: (
<<<<<<< HEAD
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      title: 'Tayyor shablonlar',
      description: '150 dan ortiq professional dizayndagi shablonlardan birini tanlang va xohishingizga moslab o\'zgartiring.',
=======
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      title: 'Premium Templates',
      description: 'Choose from 150+ professionally designed templates. Fully customizable and industry-specific designs.',
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
      link: '#'
    },
    {
      icon: (
<<<<<<< HEAD
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Dasturchi xizmatlari',
      description: 'Shaxsiy maqsadlaringizga moslashtirilgan maxsus saytni bizning professional dasturchimiz yaratib beradi.',
=======
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Expert Development',
      description: 'Custom development services for unique requirements. Professional team with years of experience.',
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
      link: '#'
    },
    {
      icon: (
<<<<<<< HEAD
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Mobil moslashuvchanlik',
      description: 'Saytingiz barcha qurilmalarda ideal ko\'rinishda bo\'ladi — avtomatik moslashish texnologiyasi bilan!',
=======
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Responsive Design',
      description: 'All websites are fully responsive and optimized for mobile, tablet, and desktop devices.',
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
      link: '#'
    },
    {
      icon: (
<<<<<<< HEAD
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Yuqori tezlik',
      description: 'Optimallashtirilgan kod va CDN yordami bilan sahifalar 90% tezroq yuklanadi. Ajoyib foydalanuvchi tajribasi!',
=======
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'High Performance',
      description: 'Optimized code and CDN delivery ensure 90% faster loading times for exceptional user experience.',
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
      link: '#'
    },
    {
      icon: (
<<<<<<< HEAD
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: '24/7 Qo\'llab-quvvatlash',
      description: 'Bizning jamoamiz har doim sizga yordam berishga tayyor — email, chat yoki telefon orqali!',
=======
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: '24/7 Expert Support',
      description: 'Professional support team available around the clock via email, chat, and phone.',
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
      link: '#'
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-red-200/20 to-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-red-200/15 to-red-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 text-red-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Nima uchun bizni tanlashadi?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Nega aynan 
            </span>
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {' '}biz?
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Templates.uz platformasi kuchli vositalar va erkin sozlash imkoniyati bilan eng zo'r sayt yaratish tajribasini taklif qiladi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
=======
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-500/5 to-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/3 to-red-600/8 rounded-full blur-3xl"></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-px h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-red-500/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white border-2 border-red-500 text-red-600 rounded-full text-sm font-bold mb-8 shadow-xl">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Why Choose Our Platform
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
            <span className="text-black">
              Professional 
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Powerful tools and expert services designed to help you create exceptional websites that drive results.
          </p>
        </div>

        {/* Professional Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-red-500 transform hover:-translate-y-6 transition-all duration-500 overflow-hidden"
            >
              {/* Professional Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Professional Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                  {feature.icon}
                </div>
              </div>
              
              {/* Professional Content */}
              <div className="relative z-10">
<<<<<<< HEAD
                <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
=======
                <h3 className="text-2xl font-black text-black mb-6 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                  {feature.description}
                </p>
                <a
                  href={feature.link}
<<<<<<< HEAD
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group-hover:scale-105 transform duration-300 text-sm sm:text-base"
                >
                  Batafsil
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
                  className="inline-flex items-center text-red-600 font-bold hover:text-black transition-colors group-hover:scale-105 transform duration-300 text-lg"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

<<<<<<< HEAD
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:opacity-30 transition-opacity"></div>
=======
              {/* Professional Decorative Elements */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:opacity-30 transition-opacity"></div>
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
            </div>
          ))}
        </div>

        {/* Professional CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-12 bg-gradient-to-br from-black to-gray-900 rounded-3xl border-2 border-gray-800 shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-8 text-xl max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our platform for their web development needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="http://builder.templates.uz/" 
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Start Building Now</span>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white border-2 border-white text-black font-bold rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;