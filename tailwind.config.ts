import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dominant: 'var(--dominant)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      fontFamily:{
        inter:['var(--font-inter)'],
        merri:['var(--font-merriweather)'],
      },
    },
  },
  plugins: [],
} satisfies Config
