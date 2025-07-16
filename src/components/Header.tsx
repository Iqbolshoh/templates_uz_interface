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
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
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
  };

  return (
<<<<<<< HEAD
    <nav className="bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <img 
                  src="/assets/images/logo_2.png" 
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl shadow-lg group-hover:shadow-glow-red transition-all duration-300 group-hover:scale-105" 
                  alt="Logo" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="font-sans font-bold text-lg sm:text-2xl">
                <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Templates</span>
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">.uz</span>
=======
    <nav className="bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Professional Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src="/assets/images/logo_2.png" 
                  className="w-14 h-14 rounded-2xl shadow-xl group-hover:shadow-red-500/25 transition-all duration-300 group-hover:scale-105 border-2 border-gray-200 group-hover:border-red-500" 
                  alt="Logo" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="font-black text-2xl">
                <span className="text-black">Templates</span>
                <span className="text-red-600">.uz</span>
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
              </div>
            </Link>
          </div>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
<<<<<<< HEAD
                  className={`relative px-3 sm:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-3/4 ${
=======
                  className={`relative px-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl group ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-50 shadow-lg'
                      : 'text-black hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-3/4 ${
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                    isActive(item.href) ? 'w-3/4' : ''
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Language Selector & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-2 sm:px-3 py-2 text-gray-700 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-50"
=======
          {/* Professional Language Selector & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-3 px-4 py-3 text-black hover:text-red-600 transition-colors rounded-xl hover:bg-red-50 border-2 border-gray-200 hover:border-red-500"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                {selectedLanguage.flagIcon ? (
                  <img
                    src={selectedLanguage.flagIcon}
                    alt={selectedLanguage.name}
<<<<<<< HEAD
                    className="w-4 sm:w-5 h-3 sm:h-4 rounded-sm shadow-sm"
                  />
                ) : (
                  <span className="text-base sm:text-lg">{selectedLanguage.flag}</span>
                )}
                <span className="text-xs sm:text-sm font-medium">{selectedLanguage.name}</span>
=======
                    className="w-6 h-5 rounded-sm shadow-sm"
                  />
                ) : (
                  <span className="text-xl">{selectedLanguage.flag}</span>
                )}
                <span className="text-sm font-bold">{selectedLanguage.name}</span>
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                <svg
                  className={`w-3 sm:w-4 h-3 sm:h-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
<<<<<<< HEAD
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 backdrop-blur-lg">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="flex items-center px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 w-full text-left transition-colors"
=======
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 py-2 z-50 backdrop-blur-xl">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="flex items-center px-6 py-4 text-sm text-black hover:bg-red-50 hover:text-red-600 w-full text-left transition-colors font-semibold"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                      onClick={() => handleLanguageChange(language)}
                    >
                      {language.flagIcon ? (
                        <img
                          src={language.flagIcon}
                          alt={language.name}
<<<<<<< HEAD
                          className="w-4 sm:w-5 h-3 sm:h-4 mr-2 sm:mr-3 rounded-sm shadow-sm"
                        />
                      ) : (
                        <span className="mr-2 sm:mr-3">{language.flag}</span>
=======
                          className="w-6 h-5 mr-4 rounded-sm shadow-sm"
                        />
                      ) : (
                        <span className="mr-4 text-xl">{language.flag}</span>
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                      )}
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Professional Auth Buttons */}
            <Link
              to="/login"
<<<<<<< HEAD
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-red-600 border-2 border-red-200 hover:border-red-300 rounded-lg transition-all duration-300 hover:bg-red-50 hover:scale-105"
=======
              className="px-6 py-3 text-sm font-bold text-black border-2 border-black hover:bg-black hover:text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
            >
              Sign In
            </Link>
            <Link
              to="/register"
<<<<<<< HEAD
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow-red"
=======
              className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-red-500/25"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
            >
              Get Started
            </Link>
          </div>

          {/* Professional Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
              className="p-2 text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600 rounded-lg hover:bg-gray-50 transition-colors"
=======
              className="p-3 text-black hover:text-red-600 focus:outline-none focus:text-red-600 rounded-xl hover:bg-red-50 transition-colors border-2 border-gray-200 hover:border-red-500"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Professional Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg border-t border-gray-100 rounded-b-xl shadow-lg">
=======
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t-2 border-gray-100 rounded-b-2xl shadow-2xl">
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
<<<<<<< HEAD
                  className={`block px-3 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors rounded-lg ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
=======
                  className={`block px-6 py-4 text-base font-bold transition-colors rounded-xl ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-50'
                      : 'text-black hover:text-red-600 hover:bg-red-50'
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
<<<<<<< HEAD
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <Link
                    to="/login"
                    className="text-center py-2 sm:py-3 px-4 text-red-600 border-2 border-red-200 hover:border-red-300 rounded-lg transition-colors hover:bg-red-50 text-sm sm:text-base"
=======
              <div className="pt-6 pb-3 border-t-2 border-gray-100">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/login"
                    className="text-center py-4 px-6 text-black border-2 border-black hover:bg-black hover:text-white rounded-xl transition-colors font-bold"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
<<<<<<< HEAD
                    className="text-center py-2 sm:py-3 px-4 text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg transition-colors shadow-lg text-sm sm:text-base"
=======
                    className="text-center py-4 px-6 text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl transition-colors shadow-xl font-bold"
>>>>>>> 253b0391559935d4a8ace1d5569206c230ddbb77
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
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