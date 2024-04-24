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
    colors: {
      'blue': '#020921',
      'white': '#e5e5e5',
      'gray-blue': '#808AA9',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {

      'small': ['1rem', { //20
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'base': ['1.25rem', { //20
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
      'lg': ['1.5rem', { //24
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
      'xl': ['2.75rem', { //48
        lineHeight: '1',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
    },
    listStyleImage: {
            none: 'none',
            line: `url("./src/components/assets/line.svg")`,
          },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}