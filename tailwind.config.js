const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');
const {bgImage, pxToRem} = require('./helpers');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Barlow', ...fontFamily.sans],
        serif: ['Bellefair', ...fontFamily.serif],
        display: ['Barlow Condensed', ...fontFamily.sans],
      },
      fontSize: {
        h1: [pxToRem(150), pxToRem(171.9)],
        h2: [pxToRem(100), pxToRem(114.6)],
        h3: [pxToRem(56), pxToRem(64.18)],
        h4: [pxToRem(32), pxToRem(36.67)],
        h5: [pxToRem(28), pxToRem(33.6)],
        'subheading-1': [pxToRem(28), pxToRem(32.09)],
        'subheading-2': [pxToRem(14), pxToRem(16.8)],
        nav: [pxToRem(16), pxToRem(19.2)],
        body: [pxToRem(18), pxToRem(32)],
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
      spacing: {
        12.5: pxToRem(50),
      },
      backgroundImage: {
        'home-mobile': bgImage('/home/background-home-mobile.jpg'),
        'home-tablet': bgImage('/home/background-home-tablet.jpg'),
        'home-desktop': bgImage('/home/background-home-desktop.jpg'),

        'destination-mobile': bgImage(
          '/destination/background-destination-mobile.jpg'
        ),
        'destination-tablet': bgImage(
          '/destination/background-destination-tablet.jpg'
        ),
        'destination-desktop': bgImage(
          '/destination/background-destination-desktop.jpg'
        ),

        'crew-mobile': bgImage('/crew/background-crew-mobile.jpg'),
        'crew-tablet': bgImage('/crew/background-crew-tablet.jpg'),
        'crew-desktop': bgImage('/crew/background-crew-desktop.jpg'),

        'technology-mobile': bgImage(
          '/technology/background-technology-mobile.jpg'
        ),
        'technology-tablet': bgImage(
          '/technology/background-technology-tablet.jpg'
        ),
        'technology-desktop': bgImage(
          '/technology/background-technology-desktop.jpg'
        ),
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
