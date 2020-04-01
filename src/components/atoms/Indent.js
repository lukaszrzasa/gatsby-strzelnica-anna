import styled from 'styled-components';
import PropTypes from 'prop-types';

const Indent = styled.div`
  padding-left: ${({theme, size}) => theme.size[size]}rem;
`;
Indent.propTypes = {
  size: PropTypes.string.isRequired,
};

Indent.defaultProps = {
  size: 1
}

export default Indent;