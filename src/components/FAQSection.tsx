import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQ[] = [
    {
      question: 'Templates.uz nima va qanday ishlaydi?',
      answer: 'Templates.uz — bu oddiy va tezkor sayt yaratish uchun qulay platforma. Tayyor shablonlardan foydalanishingiz yoki o\'zingiz xohlagan saytni drag & drop konstruktor orqali hech qanday kod yozmasdan yaratishingiz mumkin!',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      question: 'Drag & drop konstruktor sayt yaratishda qanday yordam beradi?',
      answer: 'Drag & drop konstruktor sizga rasm, matn, video, tugma kabi elementlarni sahifada osonlik bilan joylashtirish va sozlash imkonini beradi. Hech qanday kod yozmasdan — sayt dizaynini ko\'z bilan ko\'rib yaratishingiz mumkin.',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      question: 'Templates.uz\'da qanday shablonlar mavjud?',
      answer: 'Bizda biznes, shaxsiy portfolio, internet do\'kon, blog va boshqa yo\'nalishlarga mo\'ljallangan professional shablonlar mavjud. Har bir shablonni o\'zingizga moslab o\'zgartira olasiz.',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    {
      question: 'Qanday dasturchi xizmatlarini taklif qilasiz?',
      answer: 'Backend va frontend dasturlash, API integratsiyasi, admin panel yaratish, xavfsizlik va tezlik optimallashtirishi — barchasi bizning professional xizmatlarimiz tarkibida!',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      question: 'Backend uchun qanday texnologiyalardan foydalanasiz?',
      answer: 'Biz Laravel (PHP), Node.js, va Python kabi zamonaviy texnologiyalarni, shuningdek MySQL va MongoDB bazalarini qo\'llab, ishonchli va kengaytiriladigan backend tizimlar yaratamiz.',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      question: 'Templates.uz\'dan foydalanish uchun texnik bilim kerakmi?',
      answer: 'Hech qanday texnik bilim shart emas! Templates.uz ham boshlovchilar, ham mutaxassislar uchun qulay. Maxsus funksiyalar kerak bo\'lsa — bizning dasturchilar jamoasi sizga yordam beradi.',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      question: 'Sayt yaratish qancha vaqt oladi?',
      answer: 'Tayyor shablonlar va drag & drop yordamida siz oddiy saytni atigi bir necha daqiqada yaratishingiz mumkin. Maxsus dasturlash asosidagi loyihalar esa 5–10 ish kuni davom etadi.',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-200/30 to-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold mb-6">
            ❓ Savol-javoblar
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ko'p so'raladigan 
            </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              savollar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Templates.uz platformasi, drag & drop konstruktor, shablonlar va dasturchi xizmatlarimiz haqida eng ko'p beriladigan savollarga javoblar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors focus:outline-none focus:bg-gray-50/50"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                  }`}>
                    {faq.icon}
                  </div>
                  <span className="font-heading font-bold text-gray-800 pr-4 text-lg group-hover:text-gray-900 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-primary-100 text-primary-600 rotate-180' 
                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pl-14">
                    <div className="w-full h-px bg-gradient-to-r from-gray-200 to-transparent mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl border border-primary-200">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
              Hali ham savolingiz bormi?
            </h3>
            <p className="text-gray-600 mb-6">
              Bizning jamoamiz sizga yordam berishga doim tayyor!
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Biz bilan bog'laning</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;