// tailwind.config.js
export default {
  darkMode: 'class',
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        slide: 'slide 20s linear infinite',
      },
    }
  },
}
