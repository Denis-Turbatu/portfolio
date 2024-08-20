/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/App.vue",
    "./src/components/*.vue",
    "./src/pages/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },
      container: {
        center: true
      },
      leading: {
        12: "3rem"
      },
      colors: {
        platinum: "#e5e6e8",
        raisin: "#111111",
        ceris: "#DB385C",
        orange: "#fb7151",
        lavanda: "#9455fd"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Oswald", "sans-serif"]
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "gray"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(32) infinite alternate, blink .7s infinite"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
