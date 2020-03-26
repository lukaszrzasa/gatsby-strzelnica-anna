import { faStar, faStarHalf, faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

export const registerIcons = () => {
  library.add(
    faStarHalf,
    faTimes,
    faStar,
  );
};
