import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0052FF', // Modern Fintech Blue
          orange: '#FF8A00', // Primary Orange
          white: '#FFFFFF',
          dark: '#0F172A', // Text Dark
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Perfect Fourth (1.333) scale
        xs: '0.75rem', // 12px
        sm: '1rem', // 16px (Base)
        base: '1rem',
        lg: '1.333rem', // ~21.3px
        xl: '1.777rem', // ~28.4px
        '2xl': '2.369rem', // ~37.9px
        '3xl': '3.157rem', // ~50.5px
        '4xl': '4.209rem', // ~67.3px
        '5xl': '5.61rem', // ~89.7px
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0052FF 0%, #003BB5 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(0, 82, 255, 0.05) 0%, rgba(255, 138, 0, 0.05) 100%)',
      },
    },
  },
  plugins: [typography],
}
export default config

