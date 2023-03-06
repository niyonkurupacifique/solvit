/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },

    extend: {
      colors: {
        vuejs: "#9bf542",
        ano: "#f4b254",
        blackk: "#1f1818",
        bordercolor: "#73765E",
        headercolor: "#64665B",
        hovercolor: "#CC305A",
        bgHoverColor: "#E3C3C6",
        headcolor:"#DBDCDD",
      },
      fontFamily: {
        CNNfont: "CNN,",
      },
      fontSize: {
        CNNfontSize: "36px",
      },
      fontWeight: {
        CNNfONTweight: "500",
      },

      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
