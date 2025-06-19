/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neon': {
          'cyan': '#00ffff',
          'blue': '#0080ff',
          'green': '#00ff00',
          'pink': '#ff0080',
          'purple': '#8000ff',
        },
        'dark': {
          '900': '#000000',
          '800': '#0a0a0a',
          '700': '#1a1a1a',
          '600': '#2a2a2a',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typewriter': 'typewriter 3s steps(30) 1s 1 normal both',
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 0.3s infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { 'box-shadow': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '30ch' }
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};