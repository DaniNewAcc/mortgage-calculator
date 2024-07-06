/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'lime': "hsl(var(--clr-lime) / <alpha-value>)",
        'red': "hsl(var(--clr-red) / <alpha-value>)",
        'slate100': "hsl(var(--clr-slate-100) / <alpha-value>)",
        'slate300': "hsl(var(--clr-slate-300) / <alpha-value>)",
        'slate500': "hsl(var(--clr-slate-500) / <alpha-value>)",
        'slate700': "hsl(var(--clr-slate-700) / <alpha-value>)",
        'slate900': "hsl(var(--clr-slate-900) / <alpha-value>)",
        'altSlate': "hsl(var(--clr-slate-alt) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

