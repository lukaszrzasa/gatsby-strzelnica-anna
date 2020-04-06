import React from 'react'
import styled from 'styled-components'
import Day from '../atoms/calendar/Day'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../../store/actions'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const getFirstDay = (y, m) => ((new Date(y, m)).getDay() + 6 ) % 7;// 0=Mon, 6=Sun
export const getDaysInMonth = (y,m) => 32 - new Date(y, m, 32).getDate();//trick from  https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

const CalendarBody = () => {
  const { year, month } = useSelector(({reservation}) => reservation);
  const { monthStatus } = useSelector(({calendarData}) => calendarData);
  const dispatch = useDispatch();

  const firstDay = getFirstDay(year, month);
  const currentMonthLength = getDaysInMonth(year, month);
  const prevMonthLength = getDaysInMonth(year, month-1);
  const rows = Math.ceil((firstDay + getDaysInMonth(year, month))/7); // how many rows should be created

  const handleClick = (y, m, d) => {
    dispatch(setDate(y,m,d));
  };


  const getDayConfig = (y,m,d) => {
    if(m<0) m = `0${m}`;
    if(d<0) d = `0${d}`;
    return monthStatus.find(({day}) => day === `${y}-${m}-${d}`);
  }

  const getDaysObj = () => {
    let isCurrent = false;
    let m = new Date(year, month-1).getMonth(); // helper month
    let y = new Date(year, month-1).getFullYear(); // helper year
    let d = prevMonthLength - firstDay; // helper day
    let result = [];
    for(let i = 0; i < rows*7; i++){
      if(i === firstDay || i === firstDay + currentMonthLength) {
        m++;// next month
        d = 0;// reset day
        isCurrent = !isCurrent; // switch isCurrent
        if(m === 12){ // if last month was december - add 1 to year & ser month to 0
          m = 0;
          y++;
        }
      }
      d++;
      const { status } = getDayConfig(y, m, d) || 1;
      result.push({
        y,
        m,
        d,
        isCurrent,
        status,
      });
    }
    return result;
  };

  const DaysArray = () => (<>{
    getDaysObj().map(
      ({
         y,
         m,
         d,
         isCurrent,
         status,
      }) => <Day
        data-testid="calendar-day"
        isCurrentMonth={isCurrent}
        key={`${y}-${m}-${d}`}
        status={status}
        onClick={() => handleClick(y, m, d)}
      >
        {d}
      </Day>
    )
  }</>);

  return (
    <Wrapper>
      <DaysArray/>
    </Wrapper>
  )
}

const monthLength = [28,29,30,31];

export default CalendarBody