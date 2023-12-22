import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary_black': '#04103b',
      'primary_purple': {
        200:'#f5f3ff',
        600:'#5041bc'
      },
      'primary_green': '#43be83',
      'primary_orange ': '#ff8057',
      'primary_white': '#ffffff'
    }
  },
  plugins: [],
}
export default config
