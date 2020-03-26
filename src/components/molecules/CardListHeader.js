import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { H5 } from '../atoms/Heading'
import Color from '../atoms/Color'

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.color.dark};
  display: flex;
  justify-content: space-between;
  h5 {
    margin: 0;
  }
`;


const CardListHeader = ({title, subtitle}) => {
  return (
    <Wrapper data-testid="card-list-header">
      <H5 data-testid="title">{title}</H5>
      <H5 data-testid="subtitle"><Color color="gold">{subtitle}</Color></H5>
    </Wrapper>
  )
}

CardListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default CardListHeader