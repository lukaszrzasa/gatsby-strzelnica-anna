import styled from 'styled-components';
import { size, mediaQuery } from '../../theme/theme'
import getColor from '../../theme/helpers/getColor'
import PropTypes from 'prop-types';
import { darken } from 'polished'

const { lg, md, sm } = size;

const Button = styled.button`
  padding: ${lg/2}rem ${lg}rem;
  border-radius: ${lg*2}rem;
  font-size: ${lg}rem;
  line-height: ${lg}rem;
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
    padding: ${md/2}rem ${md}rem;
    border-radius: ${md*2}rem;
    font-size: ${md}rem;
    line-height: ${md}rem;
  }
  
  // ${mediaQuery.mobile} {
  //   padding: ${sm/2}rem ${sm}rem;
  //   border-radius: ${sm*2}rem;
  //   font-size: ${sm}rem;
  //   line-height: ${sm}rem;
  // }
`;

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
}

export default Button;