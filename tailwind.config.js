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
          "50%" : {bottom : "43.4%"},
          "100%" : {bottom : "100%"}
        },
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
        "white-1" : "hsla(0, 100%, 100%,0.1)",
        "dark-black" : "#0B0D17",
        "dark-gray" : "hsla(0,0%,59%,0.2)",
        "dark-gray-1" : "hsla(0,0%,59%,0.1)",
        "gray" :"#979797"
      },
      fontSize : {
        "7xl": "5rem",
        "xl-1" : "1.25rem",
        "8xl" : "9.375rem"
      },
      scale : {
        "80" : "0.8"
      },
      width :{
        "100" : "28rem",
        "71" : "17rem"
      },
      height:{
        "71" : "17rem"
      },
      borderWidth:{
        "0.5" : "1px"
      },
      screens:{
        "xs": "580px"
      }
    
      }
    },
  plugins: [],
}

