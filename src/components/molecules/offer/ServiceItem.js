import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H4, Heading } from '../../atoms/Heading'
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
      <Heading data-testid="service-name">
        <Color color="grey">
          <strong>{name}</strong>
          {description}
        </Color>
      </Heading>
      <Price>
        <Heading data-testid="service-price">
          <strong>{priceStr}</strong>
        </Heading>
        {promo && <H4 data-testid="service-promo">
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