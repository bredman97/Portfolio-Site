const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgMain' : "url('./assets/server.png')",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

