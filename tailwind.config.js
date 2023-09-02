/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "backgroundImage": {
        "jungle-img": "url('^assets/img/olivier-guillard-FKJgBUDoVC0-unsplash.jpg')",
        "cat-img": "url('^assets/img/kawaiies-plushies-plush-softtoy-blue-gray-shark-cat-dog-pet-bed-house-hideout-pet-beds-blue-medium-891472.jpg')"
      }
    },
  },
  plugins: [],
}