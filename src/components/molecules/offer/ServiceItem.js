import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H3, H4 } from '../../atoms/Heading'
import Color from '../../atoms/Color'

const Wrapper = styled.div`
  
`;

const Price = styled.div`
  padding-top: 5px;
  text-align: right;
  max-width: 60%;
`;


const ServiceItem = ({name, description, priceStr, promo}) => {
  return (
    <Wrapper>
      <H3>
        <Color color="grey">
          <stong>{name}</stong>
          {description}
        </Color>
      </H3>
      <Price>
        <H3>
          <strong>{priceStr}</strong>
        </H3>
        {promo && <H4>
          <Color color="red">{promo}</Color>
        </H4>}
      </Price>
    </Wrapper>
  )
}

ServiceItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceStr: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
}

export default ServiceItem