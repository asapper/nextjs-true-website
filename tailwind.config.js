module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'waves': "url('/img/waves-bg.jpg')",
      }),
      fontFamily: theme => ({
        'poppins': 'Poppins, sans-serif',
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
