import React, { useState } from 'react';

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
  category: string;
}

const TemplatesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const templates: Template[] = [
    {
      id: 1,
      title: 'Biznes & Korporativ',
      description: 'Yirik kompaniyalar va bizneslar uchun silliq dizayn va kuchli funksiyalar bilan ideal tanlov.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Yangi',
      badgeColor: 'bg-primary-500 text-white',
      category: 'business'
    },
    {
      id: 2,
      title: 'Onlayn Doʻkon',
      description: 'Mahsulotlaringizni internetda qulay tarzda sotish uchun mukammal echim.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Eng koʻp tanlangan',
      badgeColor: 'bg-secondary-950 text-white',
      category: 'ecommerce'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'Ijodkorlar uchun oʻz ishlarini zamonaviy va jozibali koʻrinishda namoyish etish imkoniyati.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Trenddagi',
      badgeColor: 'bg-primary-500 text-white',
      category: 'portfolio'
    },
    {
      id: 4,
      title: 'Restoran & Kafe',
      description: 'Ovqatlanish joylari uchun ajoyib menyu va bron qilish tizimiga ega shablon.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Mobil moslashuvchan',
      badgeColor: 'bg-secondary-950 text-white',
      category: 'restaurant'
    },
    {
      id: 5,
      title: 'Blog & Jurnal',
      description: 'Yozuvchilar va jurnalistlar uchun qulay interfeysga ega shablon.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'SEO optimallashtirilgan',
      badgeColor: 'bg-secondary-700 text-white',
      category: 'blog'
    },
    {
      id: 6,
      title: 'Taʻlim & Kurslar',
      description: 'Oʻquv markazlari va onlayn kurslar uchun maxsus ishlab chiqilgan shablon.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Tez yuklanadi',
      badgeColor: 'bg-primary-500 text-white',
      category: 'education'
    },
    {
      id: 7,
      title: 'Sogʻliqni Saqlash',
      description: 'Shifoxonalar va tibbiy markazlar uchun maxsus yaratilgan professional shablon.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Maxsus interfeys',
      badgeColor: 'bg-secondary-950 text-white',
      category: 'healthcare'
    },
    {
      id: 8,
      title: 'Mehmonxona & Sayyohlik',
      description: 'Mehmonxonalar va turizm biznesi uchun bron qilish tizimiga ega shablon.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Tez yuklanadi',
      badgeColor: 'bg-secondary-950 text-white',
      category: 'travel'
    },
    {
      id: 9,
      title: 'Sport & Fitnes',
      description: 'Fitnes klublari va sport markazlari uchun dinamik va energiyaga toʻla dizayn.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Yangi',
      badgeColor: 'bg-primary-500 text-white',
      category: 'sports'
    }
  ];

  const visibleTemplates = showAll ? templates : templates.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Shablonlarimiz</h2>
          <p className="section-subtitle">
            Har qanday soha uchun professional tarzda yaratilgan tayyor dizaynlar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTemplates.map((template, index) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl overflow-hidden shadow-custom hover:shadow-custom-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${template.badgeColor}`}>
                    {template.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  {template.title}
                </h3>
                <p className="text-light-text mb-4 leading-relaxed">
                  {template.description}
                </p>
                <div className="flex justify-between items-center">
                  <button className="btn-outline-primary text-sm py-2 px-4">
                    Koʻrish
                  </button>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-primary-custom inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>{showAll ? 'Kamroq koʻrish' : 'Barcha shablonlarni koʻrish'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;