import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../atoms/Icon'
import styled from 'styled-components'
import { Heading } from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import getColor from '../../theme/helpers/getColor'
import Indent from '../atoms/Indent'

export const getStars = (amount) => {
  if( amount === 0.5 ) return (<Icon icon="star-half-alt"/>);
  else return [...Array(amount)].map((e,i) => (<Icon key={i} icon="star"/>));
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({theme}) => theme.mediaQuery.mobile} {
    flex-direction: column;
  }
`;

const Header = styled.div`
  width: 45%;
  text-align: right;
  ${({theme}) => theme.mediaQuery.mobile} {
    width: 100%;
    text-align: left;
  }
`;

const Details = styled.div`
  width: 55%;
  ${({theme}) => theme.mediaQuery.mobile} {
    width: 100%;
  }
`;

const PriceDesktop = styled.div`
  color: ${({variant}) => getColor(variant)};
  ${({theme}) => theme.mediaQuery.mobile} {
    display: none;
  }
`;

const PriceMobile = styled.div`
  color: ${({variant}) => getColor(variant)};
  display: none;
  ${({theme}) => theme.mediaQuery.mobile} {
    display: block;
  }
`;


const TrainingOfferItem = ({stars, variant, title, description, price, children}) => {
  return (
    <Wrapper data-testid="training-offer-item-wrapper">
      <Header data-testid="heading">
        {getStars(stars)}
        <Heading data-testid="training-title">{title}</Heading>
        <Indent size="md">
          <Paragraph data-testid="training-description">{description}</Paragraph>
        </Indent>
        <PriceDesktop data-testid="price" variant={variant}>{price} zł</PriceDesktop>
      </Header>
      <Details>
        {children}
        <PriceMobile>{price} zł</PriceMobile>
      </Details>
    </Wrapper>
  )
}

TrainingOfferItem.propTypes = {
  stars: PropTypes.oneOf([.5, 1, 2, 3]).isRequired,
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default TrainingOfferItem