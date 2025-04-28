module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(3, 4, 5)",
        myShadow2: "-4.1px -5px 0 0 rgb(3, 4, 5)",
        myShadow3: "4.1px 5px 0 0 rgb(3, 4, 5)",   // Bottom Right
        myShadow4: "-4.1px 5px 0 0 rgb(3, 4, 5)",  // Bottom Left
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        kalam: ['Kalam', 'cursive'],

      },
      screens: {
        'xxxs': '480px', //custom 480px breakpoint!
      },
      animation: {
        pullRope: 'pullRope 2s ease-out forwards',
        lightOn: 'lightOn 2s ease-out forwards'
      },
      keyframes: {
        pullRope: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: '100px', opacity: '1' }
        },
        lightOn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
    },
  },
  plugins: [],
};
