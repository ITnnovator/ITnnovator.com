/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#f36c4a',
                'brand-secondary': '#7c3aed', // Defaulting to Violet (User can update this)
            }
        },
    },
    plugins: [],
};
