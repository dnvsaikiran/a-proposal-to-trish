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
        secondary: "#f5f5f5", // Soft White/Gray
        accent: "#1a1a1a",    // Deep Black
        muted: "#e5e5e5",     // Silver/Light Gray
        dark: "#000000",      // Pure black
      },
      fontFamily: {
        royal: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        signature: ["'Dancing Script'", "cursive"],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
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
