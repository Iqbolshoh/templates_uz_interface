import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  gradient: string;
  iconBg: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Drag & Drop Tuzuvchi',
      description: 'Kod yozmasdan saytingizni sozlang. Elementlarni osongina joylashtiring va joylarini o\'zgartiring.',
      link: '#',
      gradient: 'from-primary-400 to-primary-500',
      iconBg: 'from-primary-500 to-primary-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      title: 'Tayyor shablonlar',
      description: '150 dan ortiq professional dizayndagi shablonlardan birini tanlang va xohishingizga moslab o\'zgartiring.',
      link: '#',
      gradient: 'from-secondary-400 to-secondary-500',
      iconBg: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Dasturchi xizmatlari',
      description: 'Shaxsiy maqsadlaringizga moslashtirilgan maxsus saytni bizning professional dasturchimiz yaratib beradi.',
      link: '#',
      gradient: 'from-primary-400 to-primary-600',
      iconBg: 'from-primary-500 to-primary-700'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Mobil moslashuvchanlik',
      description: 'Saytingiz barcha qurilmalarda ideal ko\'rinishda bo\'ladi — avtomatik moslashish texnologiyasi bilan!',
      link: '#',
      gradient: 'from-secondary-400 to-secondary-600',
      iconBg: 'from-secondary-500 to-secondary-700'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Yuqori tezlik',
      description: 'Optimallashtirilgan kod va CDN yordami bilan sahifalar 90% tezroq yuklanadi. Ajoyib foydalanuvchi tajribasi!',
      link: '#',
      gradient: 'from-primary-400 to-primary-500',
      iconBg: 'from-primary-500 to-primary-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: '24/7 Qo\'llab-quvvatlash',
      description: 'Bizning jamoamiz har doim sizga yordam berishga tayyor — email, chat yoki telefon orqali!',
      link: '#',
      gradient: 'from-secondary-400 to-secondary-600',
      iconBg: 'from-secondary-500 to-secondary-700'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-secondary-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-200/30 to-primary-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-200/30 to-secondary-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold mb-6">
            ✨ Nima uchun bizni tanlashadi?
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-black mb-6">
            <span className="bg-gradient-to-r from-secondary-900 to-secondary-700 bg-clip-text text-transparent">
              Nega aynan 
            </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              {' '}biz?
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Templates.uz platformasi kuchli vositalar va erkin sozlash imkoniyati bilan eng zo'r sayt yaratish tajribasini taklif qiladi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-lg border border-secondary-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-sans font-bold text-secondary-800 mb-4 group-hover:text-secondary-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed group-hover:text-secondary-700 transition-colors">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:scale-105 transform duration-300"
                >
                  Batafsil
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full opacity-10 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;