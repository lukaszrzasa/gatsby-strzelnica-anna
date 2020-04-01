import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Day from '../atoms/calendar/Day'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;




const CalendarBody = ({
  prevLength,
  currentLength,
  currentStartOn,
  currentMonth,
  currentYear,
  data,
}) => {


  const handleClick = (m, d) => {
    console.log(currentYear, m,d);
  };

  let days = [];
  for(let i=0-currentStartOn, month=currentMonth-1; i<42-currentStartOn ;i++){
    if (i === 0 || i === currentLength) month++;
    let day = i<0 ? prevLength+i+1 : (i%currentLength)+1;//handle day from prevMonth and currentMonth
    days.push(<Day
      data-testid="calendar-day"
      isNotCurrentMonth={i<0 || i>=currentLength}
      key={i}
      status={data[`${month}-${i}`]}
      onClick={() => handleClick(month, day)}
    >
      {day}
    </Day>);
  }
  return (
    <Wrapper>
      {console.log(currentStartOn, prevLength, currentLength)}
      {days}
    </Wrapper>
  )
}

const monthLength = [28,29,30,31];

CalendarBody.propTypes = {
  prevLength: PropTypes.oneOf(monthLength).isRequired, // length of the month
  currentLength: PropTypes.oneOf(monthLength).isRequired,
  currentStartOn: PropTypes.oneOf([0,1,2,3,4,5,6]).isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.string),
}

export default CalendarBody