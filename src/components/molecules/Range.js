import React from 'react'
import PropTypes from 'prop-types'
import CircleBtn from '../atoms/CircleBtn'
import Icon from '../atoms/Icon'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin: 0 .5rem;
  }
`;


const Range = ({ evSetValue, min, max, step, stepLarge, format, value }) => {
  const handleClick = (amount) => {
    const newValue = value+amount;
    if(newValue < min) evSetValue(min);
    else if(newValue > max) evSetValue(max);
    else evSetValue(newValue);
  }

  return (
    <Wrapper>
      {stepLarge && <CircleBtn onClick={()=>handleClick(-stepLarge)}>
        -{stepLarge}
      </CircleBtn>}
      <CircleBtn onClick={()=>handleClick(-step)}>
        <Icon icon="minus"/>
      </CircleBtn>
      <div>
        {format ? format(value) : value}
      </div>
      <CircleBtn onClick={()=>handleClick(step)}>
        <Icon icon="plus"/>
      </CircleBtn>
      {stepLarge && <CircleBtn onClick={()=>handleClick(stepLarge)}>
        +{stepLarge}
      </CircleBtn>}
    </Wrapper>
  )
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  stepLarge: PropTypes.number,
  format: PropTypes.func,
  evSetValue: PropTypes.func.isRequired,
}

export default Range