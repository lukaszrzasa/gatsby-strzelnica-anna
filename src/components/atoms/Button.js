import styled from 'styled-components';
import { fontSize, mediaQuery } from '../../theme/theme'
import getColor from '../../theme/helpers/getColor'
import PropTypes from 'prop-types';
import { darken } from 'polished'

const { h3, h4, h5 } = fontSize;

const Button = styled.button`
  padding: ${h3/2}rem ${h3}rem;
  border-radius: ${h3*2}rem;
  font-size: ${h3}rem;
  line-height: ${h3}rem;
  color: ${({color}) => getColor(color)};
  background-color: ${({variant}) => getColor(variant)};
  border: solid 1px ${({variant}) => darken(0.1, getColor(variant))};
  transition: background-color .3s, border-color .3s;
  cursor: pointer;
  
  &:hover {
    background-color: ${({variant}) => darken(0.2, getColor(variant))};
    border-color: ${({variant}) => darken(0.3, getColor(variant))};
  }
  
  ${mediaQuery.smallDesktop} {
    padding: ${h4/2}rem ${h4}rem;
    border-radius: ${h4*2}rem;
    font-size: ${h4}rem;
    line-height: ${h4}rem;
  }
  
  ${mediaQuery.mobile} {
    padding: ${h5/2}rem ${h5}rem;
    border-radius: ${h5*2}rem;
    font-size: ${h5}rem;
    line-height: ${h5}rem;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
}

export default Button;