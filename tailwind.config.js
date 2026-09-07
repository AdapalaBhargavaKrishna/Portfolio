/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F2EB',
          50: '#FFFFFF',
          100: '#FFFDF8',
          200: '#F5F2EB',
          300: '#E8E2D6',
          400: '#D6CCBA',
        },
        charcoal: {
          DEFAULT: '#2D241E',
          light: '#4A3B32',
          muted: '#7A6B63',
        },
        accent: {
          DEFAULT: '#8C593B',
          soft: 'rgba(140, 89, 59, 0.08)',
          hover: '#6B4226',
        },
        border: '#E8E2D6',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'display': ['clamp(3.5rem, 8vw, 7.5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'heading': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
