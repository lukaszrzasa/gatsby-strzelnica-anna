import { color } from '../theme';

const getColor = (variant, defaultColor) => {
  if(Object.keys(color).indexOf(variant) === -1) {
    return defaultColor || color.default;
  }
  return color[variant];
}

export default getColor;