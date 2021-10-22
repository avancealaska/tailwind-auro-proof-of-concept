const auro = require('@alaskaairux/design-tokens/dist/tokens/JSObject--allTokens');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      alert: {
        notification: {
          on: {
            light: auro.color.alert.notification.onLight.value,
            dark: auro.color.alert.notification.onDark.value,
          },
        },
        warning: {
          on: {
            light: auro.color.alert.warning.onLight.value,
          },
        },
        error: {
          on: {
            light: auro.color.alert.error.onLight.value,
            dark: auro.color.alert.error.onDark.value,
          },
        },
        success: {
          on: {
            light: auro.color.alert.success.onLight.value,
            dark: auro.color.alert.success.onDark.value,
          },
        },
        advisory: {
          on: {
            light: auro.color.alert.advisory.onLight.value,
            dark: auro.color.alert.advisory.onDark.value,
          },
        },
      },
      base: {
        white: {
          DEFAULT: auro.color.base.white.value,
          'opacity-40': auro.color.base['white-opacity-40'].value,
        },
        black: {
          DEFAULT: auro.color.base.black.value,
          'opacity-15': auro.color.base['black-opacity-15'].value,
        },
      },
      brand: {
        midnight: {
          100: auro.color.brand.midnight[100].value,
          200: auro.color.brand.midnight[200].value,
          300: auro.color.brand.midnight[300].value,
          400: auro.color.brand.midnight[400].value,
          500: auro.color.brand.midnight[500].value,
        },
        atlas: {
          100: auro.color.brand.atlas[100].value,
          200: auro.color.brand.atlas[200].value,
          300: auro.color.brand.atlas[300].value,
          400: auro.color.brand.atlas[400].value,
          500: auro.color.brand.atlas[500].value,
        },
        breeze: {
          100: auro.color.brand.breeze[100].value,
          200: auro.color.brand.breeze[200].value,
          300: auro.color.brand.breeze[300].value,
          400: auro.color.brand.breeze[400].value,
          500: auro.color.brand.breeze[500].value,
        },
        tropical: {
          100: auro.color.brand.tropical[100].value,
          200: auro.color.brand.tropical[200].value,
          300: auro.color.brand.tropical[300].value,
          400: auro.color.brand.tropical[400].value,
          500: auro.color.brand.tropical[500].value,
        },
        alpine: {
          100: auro.color.brand.alpine[100].value,
          200: auro.color.brand.alpine[200].value,
          300: auro.color.brand.alpine[300].value,
          400: auro.color.brand.alpine[400].value,
          500: auro.color.brand.alpine[500].value,
        },
        flamingo: {
          100: auro.color.brand.flamingo[100].value,
          200: auro.color.brand.flamingo[200].value,
          300: auro.color.brand.flamingo[300].value,
          400: auro.color.brand.flamingo[400].value,
          500: auro.color.brand.flamingo[500].value,
        },
        canyon: {
          100: auro.color.brand.canyon[100].value,
          200: auro.color.brand.canyon[200].value,
          300: auro.color.brand.canyon[300].value,
          400: auro.color.brand.canyon[400].value,
          500: auro.color.brand.canyon[500].value,
        },
        goldcoast: {
          100: auro.color.brand.goldcoast[100].value,
          200: auro.color.brand.goldcoast[200].value,
          300: auro.color.brand.goldcoast[300].value,
          400: auro.color.brand.goldcoast[400].value,
          500: auro.color.brand.goldcoast[500].value,
        },
        neutral: {
          100: auro.color.brand.neutral[100].value,
          200: auro.color.brand.neutral[200].value,
          300: auro.color.brand.neutral[300].value,
          400: auro.color.brand.neutral[400].value,
          500: auro.color.brand.neutral[500].value,
        },
        gray: {
          100: auro.color.brand.gray[100].value,
          200: auro.color.brand.gray[200].value,
          300: auro.color.brand.gray[300].value,
          400: auro.color.brand.gray[400].value,
          500: auro.color.brand.gray[500].value,
        },
      },
      icon: {
        primary: {
          on: {
            light: auro.color.icon.primary.onLight.value,
            dark: auro.color.icon.primary.onDark.value,
          },
        },
        emphasis: {
          on: {
            light: auro.color.icon.emphasis.onLight.value,
            dark: auro.color.icon.emphasis.onDark.value,
          },
        },
        accent: {
          on: {
            light: auro.color.icon.accent.onLight.value,
            dark: auro.color.icon.accent.onDark.value,
          },
        },
        disabled: {
          on: {
            light: auro.color.icon.disabled.onLight.value,
            dark: auro.color.icon.disabled.onDark.value,
          },
        },
      },
      state: {
        error: {
          100: auro.color.state.error[100].value,
          500: auro.color.state.error[500].value,
        },
        success: {
          100: auro.color.state.success[100].value,
          500: auro.color.state.success[500].value,
        },
        warning: {
          500: auro.color.state.warning[500].value,
        },
      },
      ui: {
        default: {
          on: {
            light: auro.color.ui.default.onLight.value,
            dark: auro.color.ui.default.onDark.value,
          },
        },
        hover: {
          on: {
            light: auro.color.ui.hover.onLight.value,
            dark: auro.color.ui.hover.onDark.value,
          },
        },
        active: {
          on: {
            light: auro.color.ui.active.onLight.value,
            dark: auro.color.ui.active.onDark.value,
          },
        },
        disabled: {
          on: {
            light: auro.color.ui.disabled.onLight.value,
            dark: auro.color.ui.disabled.onDark.value,
          },
        },
      },
    },
    screens: {
      sm: auro.breakpoint.sm.value,
      md: auro.breakpoint.md.value,
      lg: auro.breakpoint.lg.value,
    },
    backgroundColor: (theme) => {
      return {
        ...theme('colors'),
        lightest: auro.color.background.lightest.value,
        lighter: auro.color.background.lighter.value,
        darker: auro.color.background.darker.value,
        darkest: auro.color.background.darkest.value,
      };
    },
    borderColor: (theme) => {
      return {
        ...theme('colors'),
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
      };
    },
    textColor: (theme) => {
      return {
        ...theme('colors'),
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
      };
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
