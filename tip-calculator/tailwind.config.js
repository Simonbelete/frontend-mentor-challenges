module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        white: "hsl(0, 0%, 100%)",
        cyan: {
          dark: "hsl(183, 100%, 15%)",
          "grayish-dark-1": "cyan: hsl(186, 14%, 43%)",
          "grayish-dark-2": "cyan: hsl(186, 14%, 56%)",
          "grayish-light-1": "hsl(185, 41%, 84%)",
          "grayish-light-2": "hsl(185, 41%, 97%)",
        },
      },
    },
    fontFamily: {
      "space-mono": ["Space Mono", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
