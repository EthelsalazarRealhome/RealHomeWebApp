/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        wavefont: ['Wavefont', 'cursive'],
        RubikMonoOne: ['Rubik Mono One']
      },
    },
  },
  plugins: [
    // Use @import to include Google Fonts directly in Tailwind CSS
    function ({ addBase, theme }) {
      addBase({
        '@import url("https://fonts.googleapis.com/css2?family=Anton&family=Merriweather:ital@1&family=Space+Grotesk:wght@500&family=Wavefont&display=swap");': {},
        '@import url("https://fonts.googleapis.com/css2?family=Anton&family=Merriweather:ital@1&family=Rubik+Mono+One&family=Space+Grotesk:wght@500&family=Wavefont&display=swap");': {},
      });
    },
  ],
};

