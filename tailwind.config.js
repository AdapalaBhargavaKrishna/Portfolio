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
      animation: {
        "background-shine": "background-shine 4s linear infinite",
      },
      keyframes: {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      }

    },
  },
  plugins: [],
}