# tailwind-auro-proof-of-concept

This is a simple proof of concept that creates a [Tailwind theme](https://tailwindcss.com/docs/theme) from the [Auro design tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens). The key file to look at here is [tailwind.config.js](tailwind.config.js), which contains the theme itself. There's also a simple demonstration of usage in [App.js](src/App.js).

A more polished version of this would:

1. Include _all_ of the Auro design tokens. (Most are implemented here, but not all)
2. Export a theme that could be simply dropped into a tailwind.config.js

## Running locally

This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). To run:

1. Clone the repo
2. Run `npm i`
3. Run `npm run start`
