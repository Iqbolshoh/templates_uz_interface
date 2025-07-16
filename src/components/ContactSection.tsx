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

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Ofis manzilimiz',
      content: 'Firdavsiy koʻchasi 51, Samarqand, Oʻzbekiston'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'Email',
      content: 'support@templates.uz',
      link: 'mailto:support@templates.uz'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'Telefon',
      content: '+998 33 123 77 90',
      link: 'tel:+998331237790'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Ish vaqti',
      content: 'Dushanba - Juma: 9:00 - 18:00'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/templatesuz', icon: 'M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.2V2.5h-3c-2.8 0-4.7 2.1-4.7 5.1v1.9h-2v2h2v8h3v-8h2.5l.27-2z' },
    { name: 'Twitter', href: 'https://x.com/templatesuz', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', href: 'https://instagram.com/templatesuz', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/templatesuz', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { name: 'Telegram', href: 'https://t.me/templatesuz', icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' }
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
      // Simulate form submission
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
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Keling, saytingizni birga yaratamiz</h2>
          <p className="section-subtitle">
            Dasturchilik xizmatlarimiz haqida savollaringiz bormi yoki loyihani boshlashga tayyormisiz? Bugunoq bogʻlaning!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-custom-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Ism-sharifingiz
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ismingizni kiriting"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Elektron pochta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                    Qaysi xizmat kerak?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
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
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                    Mavzu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Yordam kerakmi?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                  Xabaringiz
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Loyihangiz haqida yozing yoki savol bering"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-custom disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {isSubmitting ? 'Yuborilmoqda...' : 'Xabarni yuborish'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-custom-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-dark mb-8">Biz bilan bogʻlaning</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-light-text hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-light-text">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-dark mb-4">Ijtimoiy tarmoqlar</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-custom-lg overflow-hidden">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.541047378342!2d66.9598153153626!3d39.65030097946344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2e57!2sFirdavsiy%20Street%2051%2C%20Samarkand%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ofis manzili"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-light-text">
            Orzuingizdagi saytni ishga tushiring! 
            <a href="#contact" className="text-primary hover:text-primary-dark font-bold ml-2">
              Hozir bogʻlaning
            </a>
            — loyihalar soni cheklangan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;