/** @type {import('tailwindcss').Config} */

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
                flip2: {
                    '0%': { marginTop: '-180px' },
                    '5%': { marginTop: '-90px' },
                    '50%': { marginTop: '-90px' },
                    '55%': { marginTop: '0px' },
                    '99.99%': { marginTop: '0px' },
                    '100%': { marginTop: '-180px' },
                },

                flip3: {
                    '0%': { marginTop: '-270px' },
                    '5%': { marginTop: '-180px' },
                    '33%': { marginTop: '-180px' },
                    '38%': { marginTop: '-90px' },
                    '66%': { marginTop: '-90px' },
                    '71%': { marginTop: '0px' },
                    '99.99%': { marginTop: '0px' },
                    '100%': { marginTop: '-270px' },
                },
                flip4: {
                    '0%': { marginTop: '-360px' },
                    '5%': { marginTop: '-270px' },
                    '25%': { marginTop: '-270px' },
                    '30%': { marginTop: '-180px' },
                    '50%': { marginTop: '-180px' },
                    '55%': { marginTop: '-90px' },
                    '75%': { marginTop: '-90px' },
                    '80%': { marginTop: '0px' },
                    '99.99%': { marginTop: '0px' },
                    '100%': { marginTop: '-360px' },
                },

                flip5: {
                    '0%': { marginTop: '-450px' },
                    '5%': { marginTop: '-360px' },
                    '20%': { marginTop: '-360px' },
                    '25%': { marginTop: '-270px' },
                    '40%': { marginTop: '-270px' },
                    '45%': { marginTop: '-180px' },
                    '60%': { marginTop: '-180px' },
                    '65%': { marginTop: '-90px' },
                    '80%': { marginTop: '-90px' },
                    '85%': { marginTop: '0px' },
                    '99.99%': { marginTop: '0px' },
                    '100%': { marginTop: '-450px' },
                },
            },
            animation: {
                watering: 'wiggle 1.2s linear infinite',
                pulse: 'pulse 1.5s infinite',
                writing: 'writing 0.5s 0s 1 normal both',
                flip2: 'flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite',
                flip3: 'flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite',
                flip4: 'flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite',
                flip5: 'flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite',
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
