/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': {
          100: '#111111',  // dark grey (background)
          60: '#8A8A8A',   // mid grey (improved contrast)
        },
        'arkiste': {
          dark: '#111111',
          grey: '#6A6A6A',
          green: '#00857F',
          lila: '#C5AFE5',
          orange: '#F99128'
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'fade-in-out': 'fadeInOut 0.5s ease-in-out',
        'bounce': 'bounce 1s infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '300%': '300%',
      },
    },
  },
  plugins: [],
}; 