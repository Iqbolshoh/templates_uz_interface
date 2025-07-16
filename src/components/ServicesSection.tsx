import React from 'react';

interface Service {
  id: number;
  title: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Domen roʻyxatdan oʻtkazish',
      price: '$10',
      period: '/yiliga',
      features: [
        'Shaxsiy domen (masalan: saytuz.com)',
        'Domen boshqaruvi',
        'Maxfiylik himoyasi (WHOIS)',
        '24/7 texnik yordam'
      ]
    },
    {
      id: 2,
      title: 'Saytni yangilab borish',
      price: '$50',
      period: '/oyiga',
      features: [
        'Kontent oʻzgarishlari (10 tagacha)',
        'Xavfsizlikni mustahkamlash',
        'Tezlikni oshirish',
        'Oylik zaxira nusxalar'
      ]
    },
    {
      id: 3,
      title: 'Saytni ishga tushirish',
      price: '$75',
      period: '/bir martalik',
      features: [
        'Hosting sozlash',
        'SSL sertifikat oʻrnatish',
        'DNS sozlamalari',
        'Ishga tushirish testi'
      ]
    },
    {
      id: 4,
      title: 'Sayt yaratish',
      price: '$99',
      period: '/bir martalik',
      features: [
        'Maxsus dizayn (5 sahifagacha)',
        'Mobil qurilmalarga mos responsive dizayn',
        'Asosiy SEO optimizatsiyasi',
        '1 oylik bepul qoʻllab-quvvatlash'
      ]
    },
    {
      id: 5,
      title: 'Shaxsiy sayt yaratish',
      price: '$150',
      period: '/bir martalik',
      features: [
        'Unikal dizayn (3 sahifagacha)',
        'Kontakt formasi integratsiyasi',
        'Ijtimoiy tarmoqlar bilan bogʻlanish',
        '1 oylik bepul qoʻllab-quvvatlash'
      ]
    },
    {
      id: 6,
      title: 'Sayt uchun backend',
      price: '$200+',
      period: '/bir martalik',
      features: [
        'Laravel/PHP asosida backend yozish',
        'Maʻlumotlar bazasi ulash (MySQL, PostgreSQL)',
        'API integratsiyalari',
        'Admin panel sozlash'
      ]
    },
    {
      id: 7,
      title: 'Biznes uchun toʻliq sayt',
      price: '$499+',
      period: '/bir martalik',
      features: [
        'Premium dizayn (10 sahifagacha)',
        'Kengaytirilgan SEO va optimizatsiya',
        'Internet doʻkon yoki bron qilish tizimi',
        'Toʻliq admin panel',
        'Ijtimoiy tarmoqlarga bogʻlash',
        '3 oylik bepul qoʻllab-quvvatlash',
        'Maxsus hosting sozlamalari'
      ],
      isHighlighted: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-primary">Dasturchilik xizmatlarimiz</span>
          </h2>
          <p className="section-subtitle">
            Orzuingizdagi saytni ishga tushiring — domenlardan tortib toʻliq biznes saytlarigacha!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-custom hover:shadow-custom-lg hover:-translate-y-2 transition-all duration-300 p-6 ${
                service.isHighlighted 
                  ? 'border-2 border-primary ring-4 ring-primary/20 lg:col-span-3' 
                  : 'border border-gray-100'
              }`}
            >
              {service.isHighlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Eng mashhur
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                  <span className="text-light-text text-sm">{service.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-light-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full ${service.isHighlighted ? 'bg-secondary hover:bg-secondary-dark' : 'btn-primary-custom'}`}>
                {service.isHighlighted ? 'Hozir bogʻlaning' : 'Boshlash'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-light-text">
            Maxsus loyiha rejalashtiryapsizmi?
            <a href="#contact" className="text-primary hover:text-primary-dark font-semibold ml-2">
              Darhol bogʻlaning
            </a>
            — joylar cheklangan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;