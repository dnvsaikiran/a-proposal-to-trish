/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f5f5f5",
        accent: "#1a1a1a",
        muted: "#e5e5e5",
        dark: "#000000",
        romantic: {
          white: "#FFFDF5",
          cream: "#FDF5E6",
          ivory: "#FFFFF0",
          pearl: "#F8F9FA",
        }
      },
      fontFamily: {
        royal: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        signature: ["'Dancing Script'", "cursive"],
        hindi: ["'Tiro Devanagari Hindi'", "serif"],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'woosh': 'woosh 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        woosh: {
          '0%, 100%': { transform: 'translateX(-5%)' },
          '50%': { transform: 'translateX(5%)' },
        }
      },
      boxShadow: {
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'huge': '0 50px 100px -20px rgba(0, 0, 0, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
