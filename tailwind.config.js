/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './docs/controls/tailwind-css/**/*.{js,jsx,ts,tsx,mdx}',
    './src/demo/tailwind-css/**/*.js',
  ],
  // darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
  ],
}
