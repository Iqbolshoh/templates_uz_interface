import React from 'react';

interface Service {
  id: number;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Domen roʻyxatdan oʻtkazish',
      price: '$10',
      period: '/yiliga',
      description: 'Professional domen xizmati bilan brendingizni mustahkamlang',
      features: [
        'Shaxsiy domen (masalan: saytuz.com)',
        'Domen boshqaruvi va sozlamalari',
        'Maxfiylik himoyasi (WHOIS)',
        '24/7 texnik yordam va qoʻllab-quvvatlash'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Sayt yaratish',
      price: '$99',
      period: '/bir martalik',
      description: 'Zamonaviy va responsive dizayn bilan professional sayt',
      features: [
        'Maxsus dizayn (5 sahifagacha)',
        'Mobil qurilmalarga mos responsive',
        'Asosiy SEO optimizatsiyasi',
        '1 oylik bepul qoʻllab-quvvatlash'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Shaxsiy sayt yaratish',
      price: '$150',
      period: '/bir martalik',
      description: 'Portfolio va shaxsiy brendingiz uchun noyob dizayn',
      features: [
        'Unikal dizayn (3 sahifagacha)',
        'Kontakt formasi integratsiyasi',
        'Ijtimoiy tarmoqlar bilan bogʻlanish',
        '1 oylik bepul qoʻllab-quvvatlash'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Saytni yangilab borish',
      price: '$50',
      period: '/oyiga',
      description: 'Saytingizni doimo yangi va xavfsiz holatda saqlang',
      features: [
        'Kontent oʻzgarishlari (10 tagacha)',
        'Xavfsizlikni mustahkamlash',
        'Tezlikni oshirish va optimizatsiya',
        'Oylik zaxira nusxalar'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Saytni ishga tushirish',
      price: '$75',
      period: '/bir martalik',
      description: 'Saytingizni internetda jonli qilish uchun toʻliq xizmat',
      features: [
        'Hosting sozlash va konfiguratsiya',
        'SSL sertifikat oʻrnatish',
        'DNS sozlamalari va domainni ulash',
        'Ishga tushirish testi va tekshiruv'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Sayt uchun backend',
      price: '$200+',
      period: '/bir martalik',
      description: 'Kuchli va ishonchli backend tizimi yaratish',
      features: [
        'Laravel/PHP asosida backend yozish',
        'Maʻlumotlar bazasi ulash (MySQL, PostgreSQL)',
        'API integratsiyalari va xizmatlar',
        'Admin panel sozlash va boshqaruv'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Biznes uchun toʻliq sayt',
      price: '$499+',
      period: '/bir martalik',
      description: 'Katta biznes uchun professional va toʻliq echim',
      features: [
        'Premium dizayn (10+ sahifa)',
        'Kengaytirilgan SEO va optimizatsiya',
        'Internet doʻkon yoki bron qilish tizimi',
        'Toʻliq admin panel va boshqaruv',
        'Ijtimoiy tarmoqlarga integratsiya',
        '3 oylik bepul qoʻllab-quvvatlash',
        'Maxsus hosting va xavfsizlik'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      isPopular: true
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-secondary-50 border border-secondary-200 rounded-full mb-8">
            <span className="text-secondary-700 font-semibold text-sm flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Professional xizmatlar
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-secondary-950">Dasturchilik </span>
            <span className="text-primary-500">xizmatlarimiz</span>
          </h1>
          
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Orzuingizdagi saytni ishga tushiring — domenlardan tortib toʻliq biznes saytlarigacha! 
            Professional jamoamiz sizning har qanday talabingizni qondiradi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white border-2 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                service.isPopular 
                  ? 'border-primary-500 shadow-glow-red' 
                  : 'border-secondary-200 hover:border-primary-200 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      Eng mashhur
                    </span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  service.isPopular 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-secondary-100 text-secondary-700 group-hover:bg-primary-500 group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-secondary-950 mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-black ${service.isPopular ? 'text-primary-500' : 'text-secondary-950'}`}>
                    {service.price}
                  </span>
                  <span className="text-secondary-500 text-lg ml-1">{service.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                      service.isPopular ? 'bg-primary-500' : 'bg-secondary-200 group-hover:bg-primary-500'
                    }`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-secondary-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                service.isPopular
                  ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-glow-red hover:shadow-glow-red-lg'
                  : 'bg-secondary-950 text-white hover:bg-primary-500 hover:shadow-glow-red'
              }`}>
                {service.isPopular ? 'Hozir bogʻlaning' : 'Boshlash'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-secondary-50 rounded-3xl p-12 border border-secondary-200">
          <h3 className="text-3xl font-bold text-secondary-950 mb-4">
            Maxsus loyiha rejalashtiryapsizmi?
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Bizning professional jamoamiz sizning noyob talablaringizga mos echim yaratadi. 
            Keling, birgalikda ajoyib narsalar yarataylik!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-all duration-300 hover:shadow-glow-red"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Darhol bogʻlaning
            </a>
            <a 
              href="https://t.me/iqbolshoh_777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-secondary-950 text-secondary-950 font-bold rounded-xl hover:bg-secondary-950 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram orqali
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;