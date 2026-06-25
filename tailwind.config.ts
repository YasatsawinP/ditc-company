import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F48E2E',
        'primary-hover': '#E86230',
        secondary: '#694535',
        'secondary-hover': '#B8775D',
        background: '#FFFFFF',
        surface: '#F0F0E9',
        success: '#0B9B0B',
        error: '#D93838',
        warning: '#FFE137',
        info: '#FF7744',
        border: 'rgba(0,0,0,0.10)',
      },
      borderRadius: {
        hard: '2px',
        soft: '8px',
        medium: '16px',
        large: '24px',
      },
      boxShadow: {
        subtle: '0 2px 4px rgba(0,0,0,0.16)',
        medium: '0 4px 8px rgba(0,0,0,0.14)',
        strong: '0 8px 16px rgba(0,0,0,0.15)',
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
