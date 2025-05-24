/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' if you prefer OS-level setting
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-default)', // Use CSS variable for primary color
        'primary-hover': 'var(--primary-hover-default)',
        secondary: 'var(--text-secondary)', // For text
        'light-bg': 'var(--color-light)',
        'dark-bg': '#111827', // gray-900
        'card-light': 'var(--color-light)',
        'card-dark': '#1f2937', // gray-800
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideUp: 'slideUp 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      spacing: {
        'section': '4rem', // Example custom spacing
      },
      borderRadius: {
        'container': '0.5rem', // Example custom border radius
      }
    },
  },
  plugins: [],
};
