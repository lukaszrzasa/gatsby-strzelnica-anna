import styled from 'styled-components';

const Container = styled.div`
  width: 1400px;
  box-sizing: border-box;
  margin: 0 auto;
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    width: 1180px;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    width: 100%;
    padding: 0 1rem;
  }
`;

export default Container;