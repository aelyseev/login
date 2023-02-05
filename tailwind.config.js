module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      display: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      body: ['Helvetica', 'Arial', 'sans-serif'],
      mono: ['Courier New', 'Courier', 'monospace'],
    },
  },
  content: ["./*.html", "./src/**/*.css", "./src/**/*.tsx"],
  plugins: [require("@tailwindcss/forms")],
};
