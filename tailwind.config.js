/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07070A', // Deepest background
          900: '#0B0B10', // Primary background
          850: '#111118', // Card background
          800: '#171722', // Card elevated background
          750: '#1E1E2C', // Border / subtle highlight
          700: '#2A2A3E', // Active borders
          600: '#3D3D58',
        },
        brand: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          lavender: '#C4B5FD',
          accent: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        slate: {
          850: '#151c2c',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 30px -5px rgba(139, 92, 246, 0.12), 0 8px 16px -6px rgba(0, 0, 0, 0.6)',
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.25)',
        'glow-md': '0 0 25px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
