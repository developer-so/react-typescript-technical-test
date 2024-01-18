/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/preline/preline.js',
    // './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '600px',
      // => @media (min-width: 768px) { ... }

      'lg': '988px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1265px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('preline/plugin')
  ],
}

