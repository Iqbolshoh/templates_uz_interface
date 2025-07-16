import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { label: 'Bosh sahifa', href: '/' },
      { label: 'Shablonlar', href: '/templates' },
      { label: 'Narxlar', href: '/pricing' },
      { label: 'Xizmatlar', href: '/services' },
      { label: 'Bogʻlanish', href: '/contact' },
    ],
    useful: [
      { label: 'Yordam markazi', href: '#help-center' },
      { label: 'Foydalanish shartlari', href: '#terms-of-use' },
      { label: 'Maxfiylik siyosati', href: '#privacy-policy' },
      { label: 'Dasturchi xizmatlari', href: '/services' },
      { label: '+998 99 779 93 33', href: 'tel:+998997799333' },
    ]
  };

  const socialLinks = [
    { name: 'Telegram', href: 'https://t.me/iqbolshoh_777', icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
    { name: 'Instagram', href: 'https://instagram.com/iqbolshoh_777', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.092c-.245.245-.49.367-.857.367-.367 0-.612-.122-.857-.367-.245-.245-.367-.49-.367-.857 0-.367.122-.612.367-.857.245-.245.49-.367.857-.367.367 0 .612.122.857.367.245.245.367.49.367.857 0 .367-.122.612-.367.857z' },
    { name: 'GitHub', href: 'https://github.com/iqbolshoh', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/iqbolshoh', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary-500/10 to-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img 
                  src="/assets/images/logo_2.png" 
                  className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-glow-red transition-all duration-300 group-hover:scale-105" 
                  alt="Logo" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="font-sans font-bold text-xl">
                <span className="text-white">Templates</span>
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">.uz</span>
              </div>
            </Link>
            <p className="text-secondary-300 text-sm leading-relaxed mb-6">
              Bizning platformamiz yordamida oʻzingiz uchun professional veb-sayt yarating. Tez, oson va ishonchli!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-glow-red transition-all duration-300 group"
                  title={social.name}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h5 className="font-sans font-bold text-white mb-6 relative">
              <span className="relative z-10">Havolalar</span>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
            </h5>
            <ul className="space-y-3">
              {footerLinks.main.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-secondary-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm block group"
                    >
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm block group"
                    >
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="font-sans font-bold text-white mb-6 relative">
              <span className="relative z-10">Foydali</span>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
            </h5>
            <ul className="space-y-3">
              {footerLinks.useful.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-secondary-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm block group"
                    >
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm block group"
                    >
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-sans font-bold text-white mb-6 relative">
              <span className="relative z-10">Biz bilan bogʻlaning</span>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
            </h5>
            <p className="text-secondary-300 text-sm mb-6 italic leading-relaxed">
              Dasturchi kerakmi? Veb-sayt yaratish, yangilash yoki shaxsiy va biznes veb-saytlari uchun hozir biz bilan bogʻlaning!
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:support@templates.uz" className="text-secondary-300 hover:text-white transition-colors text-sm">
                  support@templates.uz
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:+998997799333" className="text-secondary-300 hover:text-white transition-colors text-sm">
                  +998 99 779 93 33
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-secondary-800/50 to-secondary-700/50 rounded-2xl p-4 border border-secondary-700">
              <h6 className="font-semibold text-white mb-2 text-sm">Yangiliklar</h6>
              <p className="text-secondary-400 text-xs mb-3">Eng so'nggi yangiliklar va takliflardan xabardor bo'ling</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="flex-1 px-3 py-2 bg-secondary-700 text-white text-xs rounded-l-lg border border-secondary-600 focus:border-primary-500 focus:outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs rounded-r-lg hover:from-primary-600 hover:to-primary-700 transition-colors">
                  Obuna
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} Templates.uz. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Maxfiylik siyosati
              </a>
              <a href="#terms" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Foydalanish shartlari
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-secondary-400 text-sm">Onlayn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;