/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'Pale-blue': 'hsl(225, 100%, 94%)',
        'Bright-blue': 'hsl(245, 75%, 52%)',
        // Neutral
        'Very-pale-blue': 'hsl(225, 100%, 98%)',
        'Desaturated-blue': 'hsl(224, 23%, 55%)',
        'Dark-blue': 'hsl(223, 47%, 23%)',
      }
    },
  },
  plugins: [],
}