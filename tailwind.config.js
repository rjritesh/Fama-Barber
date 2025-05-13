/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
 sans: ['Poppins'],
        display: ['Poppins'],
      },
      colors: {
        primary: {
          50: '#fdf4e7',
          100: '#fbe8cf',
          200: '#f7d19f',
          300: '#f3ba6f',
          400: '#efa33f',
          500: '#eb8c0f',
          600: '#bc700c',
          700: '#8d5409',
          800: '#5e3806',
          900: '#2f1c03',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#d6d6d6',
          300: '#c2c2c2',
          400: '#adadad',
          500: '#999999',
          600: '#7a7a7a',
          700: '#5c5c5c',
          800: '#3d3d3d',
          900: '#1f1f1f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'service': '0 10px 25px -5px rgba(235, 140, 15, 0.1), 0 8px 10px -6px rgba(235, 140, 15, 0.05)',
      },
    },
  },
  plugins: [],
}