import styled from 'styled-components'

const Flex2Equal = styled.div`
  display: flex;
  margin-right: -1rem;
  margin-left: -1rem;
  justify-content: center;
  > * {
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
  }
`;
export default Flex2Equal;
