import {
  faAt,
  faBars,
  faBullseye, faCalendarAlt, faChalkboard, faCheck, faClock, faColumns,
  faDollarSign, faGlasses, faHardHat, faHeadphones,
  faHome, faIdCard, faInfoCircle, faLeaf, faMapMarkerAlt, faMedal, faPhone, faShieldAlt,
  faStar,
  faStarHalfAlt,
  faTimes, faUserShield,
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
    faAt,
    faClock,
    faPhone,
    faMapMarkerAlt,
    faChalkboard,
    faUserShield,
    faHeadphones,
    faGlasses,
    faShieldAlt,
    faCheck,
    faColumns,
    faHardHat,
    faLeaf,
  );
};
