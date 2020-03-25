import styled from 'styled-components';
import PropTypes from 'prop-types';

const Indent = styled.div`
  padding-left: ${({theme, size}) => theme.fontSize[`h${7-size}`]}rem;
`;
Indent.propTypes = {
  size: PropTypes.oneOf([1,2,3,4,5,6]),
};

Indent.defaultProps = {
  size: 1
}