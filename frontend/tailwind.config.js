/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Color-Yellow": "#FBE666",
        "Color-Gray": "#757575",
      },
      screens: {
        ph: { max: "767px" },
        // => @media (min-width: 475px) { ... }

        tab: { max: "991px" },
        // => @media (min-width: 768px) { ... }

        laptop: { max: "1199px" },
        // => @media (min-width: 992px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}
