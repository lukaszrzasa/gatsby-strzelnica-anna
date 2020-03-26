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

export const size = {
  xxl: 3.583,
  xl: 2.986,
  lg: 2.488, // btn
  md: 2.074, // small btn
  sm: 1.728,
  xs: 1.444,
};

export const breakpoint = {
  mobile: 1200,
  smallDesktop:1600,
  desktop: 999999,
};

export const mediaQuery = {
  mobile: `@media (max-width: ${breakpoint.mobile}px)`,
  smallDesktop: `@media (max-width: ${breakpoint.smallDesktop}px)`,
  desktop: `@media (max-width: ${breakpoint.desktop}px)`,
};

const theme = {
  color,
  size,
  breakpoint,
  mediaQuery,
};

export default theme;