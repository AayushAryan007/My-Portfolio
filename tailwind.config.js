/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // https://csstailwind.com/3-ways-to-add-background-image-in-tailwindcss/#:~:text=You%20can%20add%20a%20custom,that%20adds%20a%20background%20image.
        //to add custom background image
        "hero-pattern": "url('/src/assets/HeroBg.png')",
        "about-pattern": "url('/src/assets/AboutBg.png')",
        "work-pattern": "url('/src/assets/WorkBg.png')",
        "skills-pattern": "url('/src/assets/SkillsBg.png')",
        "project-pattern": "url('/src/assets/ProjectBg.png')",
        "contact-pattern": "url('/src/assets/ContactBg.png')",
      },
    },
  },
  plugins: [],
};
