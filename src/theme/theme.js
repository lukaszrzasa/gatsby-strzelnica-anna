export const skewImgHeight = {
  mobile: 100,
  desktop: 100,
};

export const color = {
  blue: '#1e6cc5',
  violet: '#723dce',
  green: '#5dbe13',
  orange: '#fa7921',
  red: '#e55934',
  gold: '#fec107',
  grey: '#eeeeee',
  white: '#ffffff',
  dark: '#333',
  black: '#000000',
  default: '#000000',
};

export const fontSize = {
  h1:3.583,
  h2:2.986,
  h3:2.488, // btn
  h4:2.074, // small btn
  h5:1.728,
  h6:1.444,
};

export const breakpoint = {
  mobile: 900,
  smallDesktop:1400,
  desktop: 999999,
};

export const mediaQuery = {
  mobile: `@media (max-width: ${breakpoint.mobile}px)`,
  smallDesktop: `@media (max-width: ${breakpoint.smallDesktop}px)`,
  desktop: `@media (max-width: ${breakpoint.desktop}px)`,
};

const theme = {
  color,
  fontSize,
  breakpoint,
  mediaQuery,
};

export default theme;