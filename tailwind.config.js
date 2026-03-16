/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['VT323', 'monospace'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'bg-base': '#07070F',
        'bg-elevated': '#0D0D1A',
        'accent-blue': '#4F8EF7',
        'accent-purple': '#9B5CF6',
        'accent-magenta': '#EC4899',
        'accent-teal': '#2DD4BF',
        'text-primary': '#E8E8FF',
        'text-secondary': '#7A8499',
        'text-muted': '#3D4455',
        'text-code': '#A8B4C8',
      },
      maxWidth: { 'content': '680px' },
    },
  },
  plugins: [],
}
