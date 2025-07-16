import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQ[] = [
    {
      question: 'Templates.uz nima va qanday ishlaydi?',
      answer: 'Templates.uz — bu oddiy va tezkor sayt yaratish uchun qulay platforma. Tayyor shablonlardan foydalanishingiz yoki o\'zingiz xohlagan saytni drag & drop konstruktor orqali hech qanday kod yozmasdan yaratishingiz mumkin!'
    },
    {
      question: 'Drag & drop konstruktor sayt yaratishda qanday yordam beradi?',
      answer: 'Drag & drop konstruktor sizga rasm, matn, video, tugma kabi elementlarni sahifada osonlik bilan joylashtirish va sozlash imkonini beradi. Hech qanday kod yozmasdan — sayt dizaynini ko\'z bilan ko\'rib yaratishingiz mumkin.'
    },
    {
      question: 'Templates.uz\'da qanday shablonlar mavjud?',
      answer: 'Bizda biznes, shaxsiy portfolio, internet do\'kon, blog va boshqa yo\'nalishlarga mo\'ljallangan professional shablonlar mavjud. Har bir shablonni o\'zingizga moslab o\'zgartira olasiz.'
    },
    {
      question: 'Qanday dasturchi xizmatlarini taklif qilasiz?',
      answer: 'Backend va frontend dasturlash, API integratsiyasi, admin panel yaratish, xavfsizlik va tezlik optimallashtirishi — barchasi bizning professional xizmatlarimiz tarkibida!'
    },
    {
      question: 'Backend uchun qanday texnologiyalardan foydalanasiz?',
      answer: 'Biz Laravel (PHP), Node.js, va Python kabi zamonaviy texnologiyalarni, shuningdek MySQL va MongoDB bazalarini qo\'llab, ishonchli va kengaytiriladigan backend tizimlar yaratamiz.'
    },
    {
      question: 'Templates.uz\'dan foydalanish uchun texnik bilim kerakmi?',
      answer: 'Hech qanday texnik bilim shart emas! Templates.uz ham boshlovchilar, ham mutaxassislar uchun qulay. Maxsus funksiyalar kerak bo\'lsa — bizning dasturchilar jamoasi sizga yordam beradi.'
    },
    {
      question: 'Sayt yaratish qancha vaqt oladi?',
      answer: 'Tayyor shablonlar va drag & drop yordamida siz oddiy saytni atigi bir necha daqiqada yaratishingiz mumkin. Maxsus dasturlash asosidagi loyihalar esa 5–10 ish kuni davom etadi.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Ko'p so'raladigan savollar</h2>
          <p className="section-subtitle">
            Templates.uz platformasi, drag & drop konstruktor, shablonlar va dasturchi xizmatlarimiz haqida eng ko'p beriladigan savollarga javoblar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
              >
                <span className="font-heading font-semibold text-dark pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-light-text leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary-custom inline-flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Hali ham savolingiz bormi? Biz bilan bog'laning</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;