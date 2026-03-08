/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      // Sobrescribir valores infinitos problemáticos
      maxWidth: {
        'none': '999999px',
      },
    },
  },
  plugins: [
    require("flyonui")
  ],
}
