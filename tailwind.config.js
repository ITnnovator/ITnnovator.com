/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#829dff', // Malibu
                'brand-secondary': '#a855f7', // Purple
                malibu: '#829dff', // Alias for brand used in recent updates
            }
        },
    },
    plugins: [],
};
