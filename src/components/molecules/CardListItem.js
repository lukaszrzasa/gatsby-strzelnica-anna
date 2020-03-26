import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Icon from '../atoms/Icon'
import { H5 } from '../atoms/Heading'

const Wrapper = styled.div`
  border-bottom: solid 1px ${({theme}) => theme.color.grey};
  display: flex;
`;

const IconWrapper = styled.div`
  width: 40px;
  text-align: center;
`;

const CardListItem = ({ icon, name, ...props }) => (
  <Wrapper data-testid="card-list-item">
    <IconWrapper>
      <Icon icon={icon}/>
    </IconWrapper>
    <H5 data-testid="list-item-name">{name}</H5>
  </Wrapper>
);

CardListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CardListItem