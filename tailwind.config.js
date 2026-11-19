/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surv: {
          bg: '#05070a',
          surface: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          accent: '#f59e0b', // emergency amber
          green: '#10b981',  // safe phosphor green
          red: '#ef4444',    // trauma red
          cyan: '#06b6d4',   // engineering cyan
          text: '#f0f6fc',
          muted: '#8b949e',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}
