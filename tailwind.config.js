/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    gridColumn: {
      'span-16': 'span 16 / span 16',
    }
  },
  plugins: [],
};
