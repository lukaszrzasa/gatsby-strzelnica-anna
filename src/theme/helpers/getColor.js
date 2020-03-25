import { color } from '../theme';

const getColor = (variant) => {
  if(Object.keys(color).indexOf(variant) === -1) {
    return color.default;
  }
  return color[variant];
}

export default getColor;