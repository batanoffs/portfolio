/** @type {import('tailwindcss').Config} */
// import watercan from "./watercan.svg"

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                writing: {
                    '0%': {
                        height: '0%',
                        width: '0',
                    },
                    '100%': {
                        height: '100%',
                        width: '100%',
                    },
                },
            },
            animation: {
                watering: 'wiggle 1.2s linear infinite',
                pulse: 'pulse 1.5s infinite',
                writing: 'writing 0.5s 0s 1 normal both',
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                blue: '#020921',
                'hover-blue': '#0d142b',
                white: '#e5e5e5',
                'text-blue': '#808AA9',
                pink: '#a251db',
            },
            cursor: {
                waterCan: 'url(https://img.icons8.com/doodle/48/watering-can--v1.png), pointer',
            },
        },
    },
    plugins: [],
    corePlugins: {
        scrollBehavior: true,
    },
}
