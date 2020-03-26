import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getColor from '../../theme/helpers/getColor'
import React from 'react'

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({color}) => getColor(color, 'inherit')}
`;

const Icon = props => <StyledIcon data-testid="icon" {...props}/>

Icon.proTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  color: PropTypes.string,
};

export default Icon;