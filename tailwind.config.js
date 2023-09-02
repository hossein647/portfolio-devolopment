/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "backgroundImage": {
        "jungle-img": "url('^assets/img/olivier-guillard-FKJgBUDoVC0-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}