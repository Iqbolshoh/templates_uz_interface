/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#fed7d7',
          200: '#feb2b2',
          300: '#fc8181',
          400: '#f56565',
          500: '#e53e3e', // Asosiy qizil
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#63171b',
          DEFAULT: '#e53e3e',
          dark: '#c53030',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#495057', // O'rta qora
          600: '#343a40',
          700: '#212529', // To'q qora
          800: '#1a1a1a',
          900: '#0d0d0d',
          DEFAULT: '#495057',
          dark: '#343a40',
        },
        accent: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#ffffff', // Toza oq
          600: '#f8f9fa',
          700: '#e9ecef',
          800: '#dee2e6',
          900: '#ced4da',
          DEFAULT: '#ffffff',
        },
        dark: '#212529',
        'light-text': '#6b7280',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: "16px",
        '2xl': "24px",
        '3xl': "32px",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'custom-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        soft: "0 4px 14px rgba(0, 0, 0, 0.08)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        hard: "0 20px 50px rgba(0, 0, 0, 0.15)",
        glow: "0 0 20px rgba(229, 62, 62, 0.3)" // Qizil glow efekti
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        }
      }
    },
  },
  plugins: [],
}