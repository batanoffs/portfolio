/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    listStyleImage: {
            none: 'none',
            line: `url("./src/components/assets/line.svg")`,
          },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-10deg)'
          },
          '50%': {
              transform: 'rotate(10deg)'
          },
      }
      },
      animation: {
        'watering': 'wiggle 1.2s linear infinite',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'blue': '#020921',
        'hover-blue': '#0d142b',
        'white': '#e5e5e5',
        'text-blue': '#808AA9',
        "pink": '#a251db',
      },
      cursor: {
        waterCan: 'url(https://img.icons8.com/doodle/48/watering-can--v1.png), pointer',
      },
    }
  },
  plugins: [],
}