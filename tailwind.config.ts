import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        foreground: '#0F172A',
        accent: '#2563EB',
        muted: '#64748B'
      },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
