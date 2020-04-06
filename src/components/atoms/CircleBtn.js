import styled from 'styled-components'

const CircleBtn = styled.button`
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 50%;
  background-color: ${({theme}) => theme.color.grey};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none !important;
  }
  padding: 0;
`;


export default CircleBtn;