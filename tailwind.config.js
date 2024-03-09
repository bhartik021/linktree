/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "toggle-handle-color": "#fff",
        "text-color-light-mode": "#000",
        "stroke-color-light-mode": "rgba(0, 0, 0, 0.5)",
        "surface-color-light-mode": "rgba(0, 0, 0, 0.05)",
        darkslategray: {
          "100": "rgba(51, 51, 51, 0.5)",
          "200": "rgba(51, 51, 51, 0.05)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-md": "Inter",
      },
      borderRadius: {
        "980xl": "999px",
        "9980xl": "9999px",
      },
    },
    fontSize: {
      base: "15px",
      inherit: "inherit",
    },
    screens: {
      mq276: {
        raw: "screen and (max-width: 276px)",
      },
    },
  },
}

