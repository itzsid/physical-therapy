/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Serif Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", 'sans-serif'],
      },
      colors: {
        brand: {
          forest: '#1B3A2D',
          sage: '#6B8F71',
          mint: '#A8D5BA',
          cream: '#FAF6F1',
          warm: '#F0E6D8',
          terracotta: '#C4704B',
          charcoal: '#2C2C2C',
          stone: '#8C8577',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(27,58,45,0.06), 0 1px 2px rgba(27,58,45,0.04)',
        'card-hover': '0 8px 24px rgba(27,58,45,0.1), 0 2px 8px rgba(27,58,45,0.05)',
        'elevated': '0 12px 32px rgba(27,58,45,0.12), 0 4px 12px rgba(27,58,45,0.06)',
      },
      borderRadius: {
        'pill': '100px',
        '2xl': '1rem',
        '3xl': '1.25rem',
        'card': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
