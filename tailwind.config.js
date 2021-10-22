const auro = require('@alaskaairux/design-tokens/dist/tokens/JSObject--allTokens');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: auro.breakpoint.sm.value,
      md: auro.breakpoint.md.value,
      lg: auro.breakpoint.lg.value,
    },
    backgroundColor: {
      lightest: auro.color.background.lightest.value,
      lighter: auro.color.background.lighter.value,
      darker: auro.color.background.darker.value,
      darkest: auro.color.background.darkest.value,
    },
    borderColor: {
      primary: {
        on: {
          light: auro.color.border.primary.onLight.value,
          dark: auro.color.border.primary.onDark.value,
        },
      },
      active: {
        on: {
          light: auro.color.border.active.onLight.value,
          dark: auro.color.border.active.onDark.value,
        },
      },
      error: {
        on: {
          light: auro.color.border.error.onLight.value,
          dark: auro.color.border.error.onDark.value,
        },
      },
      disabled: {
        on: {
          light: auro.color.border.disabled.onLight.value,
          dark: auro.color.border.disabled.onDark.value,
        },
      },
      focus: {
        on: {
          light: auro.color.border.Focus.onLight.value,
          dark: auro.color.border.Focus.onDark.value,
        },
      },
      divider: {
        on: {
          light: auro.color.border.divider.onLight.value,
          dark: auro.color.border.divider.onDark.value,
        },
      },
    },
    textColor: {
      primary: {
        on: {
          light: auro.color.text.primary.onLight.value,
          dark: auro.color.text.primary.onDark.value,
        },
      },
      secondary: {
        on: {
          light: auro.color.text.secondary.onLight.value,
          dark: auro.color.text.secondary.onDark.value,
        },
      },
      link: {
        on: {
          light: auro.color.text.link.onLight.value,
          dark: auro.color.text.secondary.onDark.value,
        },
      },
      error: {
        on: {
          light: auro.color.text.error.onLight.value,
          dark: auro.color.text.error.onDark.value,
        },
      },
      disabled: {
        on: {
          light: auro.color.text.disabled.onLight.value,
          dark: auro.color.text.disabled.onDark.value,
        },
      },
    },
    fontFamily: {
      default: auro.font.family.default.value,
      mono: auro.font.family.mono.value,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
