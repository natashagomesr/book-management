/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
            },
        },
        extend: {
            keyframes: {
                rightToLeft: {
                    '0%': { transform: 'translateX(1000px)' },
                },
            },
            animation: {
                rightToLeft: 'rightToLeft 0.3s ease-in-out',
            },
        },
    },
    plugins: [],
};
