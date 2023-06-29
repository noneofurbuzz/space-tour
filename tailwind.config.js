/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        up:{
          "0%" : {bottom : "0%"},
          "100%" : {bottom : "100%"},
        },
        height : {
          "0%" : {height : "14rem",width:"14rem",},
          "100%" : {height : "14rem",width : "14rem" }
        }
      },
      animation : {
        "move" : "up infinite 5s ease-in-out",
        "height" : "height 1 2s ease-in-out"
        },
      backgroundImage : {
        "stars" : "url('/images/stars.gif')",
        "bg-mobile" : "url('/images/home/background-home-mobile.jpg')"
      },
      fontFamily : {
        "barlow" : ["barlow","sans"],
        "belle" : ["belle","sans"],
        "reg" : ["reg","sans"]
      },
      colors : {
        "light-gray" : "#D0D6F9",
        "dark-black" : "#0B0D17",
        "dark-gray" : "hsla(0,0%,59%,0.2)"
      },
      fontSize : {
        "7xl": "5rem",
        "xl-1" : "1.25rem"
      },
      scale : {
        "80" : "0.8"
      }
      }
    },
  plugins: [],
}

