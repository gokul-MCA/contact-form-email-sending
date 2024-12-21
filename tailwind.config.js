/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
};
