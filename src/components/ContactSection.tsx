import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'domain-registration', label: 'Domen roʻyxatdan oʻtkazish ($10/yil)' },
    { value: 'website-creation', label: 'Sayt yaratish ($99/bir martalik)' },
    { value: 'website-updates', label: 'Sayt yangilash ($50/oyiga)' },
    { value: 'website-launch', label: 'Saytni ishga tushirish ($75/bir martalik)' },
    { value: 'backend-writing', label: 'Backend yozish ($200/bir martalik)' },
    { value: 'personal-website', label: 'Shaxsiy sayt ($150/bir martalik)' },
    { value: 'business-website', label: 'Biznes uchun sayt ($499/bir martalik)' }
  ];

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'Email',
      content: 'support@templates.uz',
      link: 'mailto:support@templates.uz',
      description: 'Bizga email yozing'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'Telefon',
      content: '+998 33 123 77 90',
      link: 'tel:+998331237790',
      description: 'Bizga qoʻngʻiroq qiling'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      title: 'Telegram',
      content: '@iqbolshoh_777',
      link: 'https://t.me/iqbolshoh_777',
      description: 'Tezkor javob uchun'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Manzil',
      content: 'Firdavsiy koʻchasi 51, Samarqand',
      description: 'Bizning ofisimiz'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Xabaringiz muvaffaqiyatli yuborildi!');
      setFormData({
        name: '',
        email: '',
        service: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Xatolik yuz berdi. Iltimos, keyinroq qayta urinib koʻring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-secondary-50 border border-secondary-200 rounded-full mb-8">
            <span className="text-secondary-700 font-semibold text-sm">📞 Biz bilan bogʻlaning</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-secondary-950">Keling, saytingizni </span>
            <span className="text-primary-500">birga yaratamiz</span>
          </h1>
          
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Dasturchilik xizmatlarimiz haqida savollaringiz bormi yoki loyihani boshlashga tayyormisiz? 
            Bugunoq bogʻlaning va professional jamoamiz bilan ishlashni boshlang!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary-950 mb-8">Bogʻlanish usullari</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start space-x-4 p-6 bg-secondary-50 rounded-2xl border border-secondary-200 hover:border-primary-500 hover:bg-white transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-secondary-950 mb-1">{method.title}</h3>
                          <p className="text-primary-500 font-semibold mb-1">{method.content}</p>
                          <p className="text-secondary-600 text-sm">{method.description}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-6 bg-secondary-50 rounded-2xl border border-secondary-200">
                        <div className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-secondary-950 mb-1">{method.title}</h3>
                          <p className="text-secondary-700 font-semibold mb-1">{method.content}</p>
                          <p className="text-secondary-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-secondary-950 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Ish vaqti</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary-300">Dushanba - Juma</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-300">Shanba</span>
                  <span className="font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-300">Yakshanba</span>
                  <span className="text-primary-400">Dam olish</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-secondary-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-secondary-300">Hozir onlaynmiz</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-secondary-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-secondary-950 mb-8">Xabar yuborish</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-secondary-950 mb-3">
                      Ism-sharifingiz *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ismingizni kiriting"
                      required
                      className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors text-secondary-950"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-secondary-950 mb-3">
                      Elektron pochta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors text-secondary-950"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-secondary-950 mb-3">
                      Qaysi xizmat kerak? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors text-secondary-950"
                    >
                      <option value="" disabled>Xizmatni tanlang</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-secondary-950 mb-3">
                      Mavzu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Yordam kerakmi?"
                      className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors text-secondary-950"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-secondary-950 mb-3">
                    Xabaringiz *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Loyihangiz haqida yozing yoki savol bering..."
                    required
                    className="w-full px-4 py-4 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none text-secondary-950"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-glow-red flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Xabarni yuborish</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-secondary-50 rounded-3xl p-12 border border-secondary-200">
          <h3 className="text-3xl font-bold text-secondary-950 mb-4">
            Orzuingizdagi saytni ishga tushiring!
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Professional jamoamiz sizning har qanday talabingizni qondiradi. 
            Bugun bogʻlaning va ajoyib sayt yaratishni boshlang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://t.me/iqbolshoh_777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-all duration-300 hover:shadow-glow-red"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram orqali bogʻlaning
            </a>
            <a 
              href="tel:+998331237790"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-secondary-950 text-secondary-950 font-bold rounded-xl hover:bg-secondary-950 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Qoʻngʻiroq qiling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;