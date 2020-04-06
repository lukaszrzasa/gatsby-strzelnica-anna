import React from 'react'
import styled from 'styled-components'
import HeaderButton from '../atoms/calendar/HeaderButton'
import Icon from '../atoms/Icon'
import HeaderInfo from '../atoms/calendar/HeaderInfo'
import HeaderWeekDay from '../atoms/calendar/HeaderWeekDay'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../../store/actions'


const Wrapper = styled.div``;

const Nav = styled.div`
  display: flex;
`;

const WeekDays = styled(Wrapper)`
  display: flex;
`;

const monthNames = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
const weekDays = ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'];

const CalendarHeader = () => {
  const { year, month } = useSelector(({reservation}) => reservation);
  const dispatch = useDispatch();

  const handleClick = (dir) => {
    let m = month + dir;
    let y = year;
    if(m < 0) {
      m = 11;
      y--;
    } else if(m>11){
      m = 0;
      y++;
    }
    dispatch(setDate(y,m,1));
  }

  return (
    <Wrapper data-testid="calendar-heading">
      <Nav data-testid="calendar-navigation">
        <HeaderButton
          data-testid="calendar-navigation-button-1"
          onClick={()=>handleClick(-1)}
        >
          <Icon icon="times"/>
        </HeaderButton>
        <HeaderInfo data-testid="calendar-navigation-name">
          {`${monthNames[month]} ${year}`}
        </HeaderInfo>
        <HeaderButton
          data-testid="calendar-navigation-button-2"
          onClick={()=>handleClick(1)}
        >
          <Icon icon="times"/>
        </HeaderButton>
      </Nav>
      <WeekDays data-testid="calendar-heading-weekdays-wrapper">
        {weekDays.map((name, k) => <HeaderWeekDay
          data-testid="calendar-heading-weekday"
          key={k}
        >
          {name}
        </HeaderWeekDay>)}
      </WeekDays>
    </Wrapper>
  )
};

export default CalendarHeader