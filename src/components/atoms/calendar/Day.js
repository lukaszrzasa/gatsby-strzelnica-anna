import styled, { css } from 'styled-components'


const Day = styled.div`
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  border-radius: 50%;
  background-color: transparent;
  ${({isToday}) => isToday && css`
    background-color: teal;
  `}
  ${({isSelected}) => isSelected && css`
    background-color: blue;
  `}
  ${({isNotCurrentMonth}) => isNotCurrentMonth && css`
    color: #aaa;
  `}
`;

export default Day;