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
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Drag & Drop Tuzuvchi',
      description: 'Kod yozmasdan saytingizni sozlang. Elementlarni osongina joylashtiring va joylarini o\'zgartiring.',
      link: '#'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      title: 'Tayyor shablonlar',
      description: '150 dan ortiq professional dizayndagi shablonlardan birini tanlang va xohishingizga moslab o\'zgartiring.',
      link: '#'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Dasturchi xizmatlari',
      description: 'Shaxsiy maqsadlaringizga moslashtirilgan maxsus saytni bizning professional dasturchimiz yaratib beradi.',
      link: '#'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Mobil moslashuvchanlik',
      description: 'Saytingiz barcha qurilmalarda ideal ko\'rinishda bo\'ladi — avtomatik moslashish texnologiyasi bilan!',
      link: '#'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Yuqori tezlik',
      description: 'Optimallashtirilgan kod va CDN yordami bilan sahifalar 90% tezroq yuklanadi. Ajoyib foydalanuvchi tajribasi!',
      link: '#'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: '24/7 Qo\'llab-quvvatlash',
      description: 'Bizning jamoamiz har doim sizga yordam berishga tayyor — email, chat yoki telefon orqali!',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nega aynan biz?</h2>
          <p className="section-subtitle">
            Templates.uz platformasi kuchli vositalar va erkin sozlash imkoniyati bilan eng zo'r sayt yaratish tajribasini taklif qiladi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-custom hover:shadow-custom-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-700 mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-500 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors group"
              >
                Batafsil
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;