import React from 'react'
import styled from 'styled-components'
import CalendarHeader from '../molecules/CalendarHeader'
import CalendarBody from '../molecules/CalendarBody'

const Wrapper = styled.div`
  width: 21rem;
`;

export const getMonthLength = (y, m) => {
  if(m===0) {
    y--;
    m=12;
  }
  if([1,3,5,7,8,10,12].indexOf(m)!==-1) return 31;
  if([4,6,9,11].indexOf(m)!==-1) return 30;
  if(y%400===0) return 29;
  if(y%4===0 && y%100!==0) return 29
  return 28;
}

export const getFirstWeekDay = (y, m) => {
  return 2;
}

const monthNames = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];

const Calendar = () => {
  const year = 2020;
  const month = 4;
  return (
    <Wrapper>
      <CalendarHeader
        heading={`${monthNames[month-1]} ${year}`}
      />
      <CalendarBody
        prevLength={getMonthLength(year, month-1)}
        currentLength={getMonthLength(year, month)}
        currentMonth={month}
        currentYear={year}
        currentStartOn={getFirstWeekDay(year, month)}
        data={{}}
      />
    </Wrapper>
  )
}

export default Calendar