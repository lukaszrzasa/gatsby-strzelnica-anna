import React from 'react'
import styled from 'styled-components'
import HeaderButton from '../atoms/calendar/HeaderButton'
import Icon from '../atoms/Icon'
import HeaderInfo from '../atoms/calendar/HeaderInfo'
import HeaderWeekDay from '../atoms/calendar/HeaderWeekDay'
import PropTypes from 'prop-types'


const Wrapper = styled.div``;

const Nav = styled.div`
  display: flex;
`;

const WeekDays = styled(Wrapper)`
  display: flex;
`;

const weekDays = ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'];

const CalendarHeader = ({heading}) => {
  return (
    <Wrapper data-testid="calendar-heading">
      <Nav data-testid="calendar-navigation">
        <HeaderButton data-testid="calendar-navigation-button-1">
          <Icon icon="times"/>
        </HeaderButton>
        <HeaderInfo data-testid="calendar-navigation-name">
          {heading}
        </HeaderInfo>
        <HeaderButton data-testid="calendar-navigation-button-2">
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

CalendarHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default CalendarHeader