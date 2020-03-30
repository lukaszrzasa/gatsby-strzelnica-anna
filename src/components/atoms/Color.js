import styled from 'styled-components';
import getColor from '../../theme/helpers/getColor'
import PropTypes from 'prop-types';

const Color = styled.span`
  color: ${({color}) => getColor(color)};
`;

export const ColorBlock = styled.div`
  color: ${({color}) => getColor(color)};
`;

Color.proTypes = {
  color: PropTypes.string.isRequired,
};

ColorBlock.proTypes = {
  color: PropTypes.string.isRequired,
};

export default Color;
