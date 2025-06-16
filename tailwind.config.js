/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22c1c3',
        secondary: '#ff6f61',
        accent: '#ffd166',
        dark: '#333333',
        light: '#ffffff'
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'dots-pattern': "url('https://images.pexels.com/photos/5824630/pexels-photo-5824630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
};