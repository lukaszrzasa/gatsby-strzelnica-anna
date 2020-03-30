import {
  faBars,
  faBullseye, faCalendarAlt,
  faDollarSign,
  faHome, faIdCard, faInfoCircle, faMedal,
  faStar,
  faStarHalfAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const registerIcons = () => {
  library.add(
    faStarHalfAlt,
    faTimes,
    faStar,
    faTimes,
    faInstagram,
    faFacebook,
    faYoutube,
    faBars,
    faHome,
    faDollarSign,
    faBullseye,
    faCalendarAlt,
    faMedal,
    faIdCard,
    faInfoCircle,
  );
};
