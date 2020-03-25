import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getColor from '../../theme/helpers/getColor'

const Icon = styled(FontAwesomeIcon)`
  color: ${({color}) => getColor(color, 'inherit')}
`;

Icon.proTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;