/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Inclut tous les fichiers dans src/app
    "./src/components/**/*.{js,ts,jsx,tsx}", // Inclut les composants si vous en ajoutez
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [],
};
