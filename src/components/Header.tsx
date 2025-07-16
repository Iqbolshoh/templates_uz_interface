import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
  flagIcon?: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'uz',
    name: 'Oʻzbekcha',
    flag: '🇺🇿',
    flagIcon: '/assets/images/flags/uz.svg'
  });

  const navItems: NavItem[] = [
    { label: 'Bosh sahifa', href: '/' },
    { label: 'Shablonlar', href: '/templates' },
    { label: 'Narxlar', href: '/pricing' },
    { label: 'Xizmatlar', href: '/services' },
    { label: 'Bogʻlanish', href: '/contact' },
  ];

  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧', flagIcon: '/assets/images/flags/gb.svg' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', flagIcon: '/assets/images/flags/ru.svg' },
    { code: 'uz', name: 'Oʻzbekcha', flag: '🇺🇿', flagIcon: '/assets/images/flags/uz.svg' },
    { code: 'tj', name: 'Тоҷикӣ', flag: '🇹🇯', flagIcon: '/assets/images/flags/tj.svg' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    // Here you would typically also change the application language
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary font-heading font-bold text-xl">
              <img src="/assets/images/logo_2.png" className="w-12 h-12" alt="Logo" />
              <span>
                <span className="text-secondary-700">Templates</span>
                <span className="text-primary-500">.uz</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${isActive(item.href)
                    ? 'text-primary-500 font-semibold'
                    : 'text-secondary-600 hover:text-primary-500'
                    }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${isActive(item.href) ? 'w-full' : ''
                    }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-secondary-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                {selectedLanguage.flagIcon ? (
                  <img
                    src={selectedLanguage.flagIcon}
                    alt={selectedLanguage.name}
                    className="w-5 rounded-sm"
                  />
                ) : (
                  <span className="text-lg">{selectedLanguage.flag}</span>
                )}
                <span className="text-sm">{selectedLanguage.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="flex items-center px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 w-full text-left"
                      onClick={() => handleLanguageChange(language)}
                    >
                      {language.flagIcon ? (
                        <img
                          src={language.flagIcon}
                          alt={language.name}
                          className="w-5 mr-2 rounded-sm"
                        />
                      ) : (
                        <span className="mr-2">{language.flag}</span>
                      )}
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <Link
              to="/login"
              className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-sm py-2 px-4 rounded transition-colors"
            >
              Kirish
            </Link>
            <Link
              to="/register"
              className="bg-primary-500 text-white hover:bg-primary-600 text-sm py-2 px-4 rounded transition-colors"
            >
              Roʻyxatdan oʻtish
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-600 hover:text-primary-500 focus:outline-none focus:text-primary-500"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${isActive(item.href)
                    ? 'text-primary-500 font-semibold'
                    : 'text-secondary-600 hover:text-primary-500'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/login"
                    className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-center py-2 px-4 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kirish
                  </Link>
                  <Link
                    to="/register"
                    className="bg-primary-500 text-white hover:bg-primary-600 text-center py-2 px-4 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Roʻyxatdan oʻtish
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;