/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Clash Display', 'sans-serif'],
        cal: ['CalSans', 'sans-serif'],
        matter: ['Matter', 'sans-serif'],
      },
      colors: {
        light: {
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
        dark: {
          950: '#0a0c10',
          900: '#111318',
          800: '#1a1d24',
          700: '#242832',
          600: '#2f3542',
          500: '#3d4354',
          400: '#4b5366',
          300: '#5b6478',
          200: '#6c768c',
          100: '#8490a5',
          50: '#9ca8bd',
        },
        neon: {
          blue: '#00f6ff',
          purple: '#8b5cf6',
          pink: '#ec4899',
        },
        accent: {
          light: '#2563eb', // Blue for light theme
          dark: '#00f6ff',  // Neon blue for dark theme
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, rgba(139, 92, 246, 0.05), rgba(0, 246, 255, 0.05))',
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 246, 255, 0.15)',
        'neon-strong': '0 0 30px rgba(0, 246, 255, 0.3)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(0, 246, 255, 0.15)',
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(0, 246, 255, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}
