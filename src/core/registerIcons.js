import {
  faBars,
  faBullseye, faCalendarAlt,
  faDollarSign, faHistory,
  faHome, faIdCard, faInfoCircle, faMedal,
  faStar,
  faStarHalf,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const registerIcons = () => {
  library.add(
    faStarHalf,
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
