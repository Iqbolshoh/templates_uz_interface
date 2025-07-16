/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Ultra-modern vibrant color palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        neon: {
          pink: '#ff0080',
          blue: '#00d4ff',
          green: '#00ff88',
          purple: '#8b5cf6',
          yellow: '#fbbf24',
          orange: '#f97316',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'rotate-in': 'rotate-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'shimmer': 'shimmer 2.5s infinite',
        'wave': 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(-100%)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(-100%)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            transform: 'translate(0%, 0%)',
          },
          '25%': {
            transform: 'translate(-100%, 0%)',
          },
          '50%': {
            transform: 'translate(-100%, -100%)',
          },
          '75%': {
            transform: 'translate(0%, -100%)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%': { 
            boxShadow: '0 0 20px #ff0080, 0 0 40px #ff0080, 0 0 60px #ff0080',
            textShadow: '0 0 10px #ff0080',
          },
          '100%': { 
            boxShadow: '0 0 40px #ff0080, 0 0 80px #ff0080, 0 0 120px #ff0080',
            textShadow: '0 0 20px #ff0080',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(255, 0, 128, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(255, 0, 128, 0.6)',
          },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'rotate-in': {
          '0%': { opacity: '0', transform: 'rotate(-180deg) scale(0.5)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
        'neon-gradient': 'linear-gradient(45deg, #ff0080, #00d4ff, #00ff88, #8b5cf6)',
        'aurora': 'linear-gradient(45deg, #ff0080 0%, #00d4ff 25%, #00ff88 50%, #8b5cf6 75%, #fbbf24 100%)',
        'cyber-mesh': 'radial-gradient(circle at 25% 25%, #ff0080 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00d4ff 0%, transparent 50%)',
        'holographic': 'linear-gradient(45deg, #ff0080, #00d4ff, #00ff88, #8b5cf6, #fbbf24, #f97316)',
      },
      boxShadow: {
        'neon-pink': '0 0 20px #ff0080, 0 0 40px #ff0080, 0 0 60px #ff0080',
        'neon-blue': '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff',
        'neon-green': '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88',
        'neon-purple': '0 0 20px #8b5cf6, 0 0 40px #8b5cf6, 0 0 60px #8b5cf6',
        'cyber': '0 0 30px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(255, 0, 128, 0.2)',
        'hologram': '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(0, 212, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-strong': '0 8px 32px 0 rgba(31, 38, 135, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
    },
  },
  plugins: [],
};