/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D92332',
          'red-dark': '#B91F2D',
          'red-light': '#FEECEE',
          charcoal: '#191C22',
          'charcoal-light': '#242831',
          soft: '#F6F7F9',
          border: '#E7E9ED',
          muted: '#686D75',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(25, 28, 34, 0.05), 0 1px 4px -1px rgba(25, 28, 34, 0.03)',
        'card': '0 4px 20px -2px rgba(25, 28, 34, 0.06), 0 2px 6px -1px rgba(25, 28, 34, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(217, 35, 50, 0.12), 0 4px 12px -2px rgba(25, 28, 34, 0.06)',
        'header': '0 2px 16px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

