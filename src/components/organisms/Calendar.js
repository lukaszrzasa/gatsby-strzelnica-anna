import React from 'react'
import styled from 'styled-components'
import CalendarHeader from '../molecules/CalendarHeader'
import CalendarBody from '../molecules/CalendarBody'

const Wrapper = styled.div`
  width: 21rem;
`;

const Calendar = () => {
  return (
    <Wrapper>
      <CalendarHeader />
      <CalendarBody />
    </Wrapper>
  )
}

export default Calendar