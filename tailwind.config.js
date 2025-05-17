/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Bubblegum Sans"', 'cursive'],
        'body': ['"Quicksand"', 'sans-serif'],
      },
      keyframes: {
        "background-shine": {
          "from": { backgroundPosition: "0 0" },
          "to": { backgroundPosition: "-200% 0" },
        },
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        "background-shine": "background-shine 4s linear infinite",
        'gradient-x': 'gradient-x 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
