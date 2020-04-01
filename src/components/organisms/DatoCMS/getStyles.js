import { NO_BOTTOM_MARGIN, TEXT_CENTER, TEXT_RIGHT } from './types'

const getStyles = (str) => {
  const options = str.split(':').map(e => e.trim());
  let result = {}
  options.forEach(option => {
    switch( option ){
      case TEXT_RIGHT:
        result.textAlign = 'right';
        break;
      case TEXT_CENTER:
        result.textAlign = 'center';
        break;
      case NO_BOTTOM_MARGIN:
        result.marginBottom = '0';
        break;
      default:
        console.warn(`Unknown property: "${option}"`); //it cannot be visible for users
    }
  });
  return result;
};

export default getStyles;