import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindForms from "@tailwindcss/forms";
import tailwindTypo from "@tailwindcss/typography";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    tailwindForms,
    tailwindTypo,
    tailwindAspectRatio
  ],
}