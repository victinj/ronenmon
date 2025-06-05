// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure it scans all your source files
  ],
  theme: {
    extend: {
      colors: {
        'space-deep-blue': '#0B0725',
        'cosmic-purple': '#240046',
        'midnight-indigo': '#1D1A3D',
        'nebula-blue': '#1E295B',
        'void-purple': '#3C1B5F',
        'starfire-pink': '#FF00A0',
        'hyperdrive-cyan': '#00FFFF',
        'quasar-gold': '#FFD700',
        'nova-orange': '#FF8C00',
        'starlight-white': '#F0F8FF',
        'nebula-gray': '#A0AEC0',
        'pulsar-purple': '#7B00FF',
        'comet-tail-blue': '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fallback sans-serif
        display: ['Irish Grover', 'cursive'], // Primary display font
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-glow': 'subtleGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        subtleGlow: {
            '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.3), 0 0 10px rgba(255, 0, 160, 0.2)' },
            '50%': { boxShadow: '0 0 15px rgba(0, 255, 255, 0.5), 0 0 20px rgba(255, 0, 160, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}