import flowbite from "flowbite-react/tailwind";


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", 
  "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transperant: "transparent",
        myyellow: "#ffbe0b",
        myblack: "#191716",
        mywhite: "#fcfaf9 ",
        bgblack: "rgba(60,60,60)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
