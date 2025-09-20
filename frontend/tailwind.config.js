/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ✅ scans all your React/Vite files
  ],
  theme: {
    extend: {
      colors:{
        primary: '#5f6FFF',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'

      }

    }, // customize colors, fonts, spacing here
  },
  plugins: [],
}
