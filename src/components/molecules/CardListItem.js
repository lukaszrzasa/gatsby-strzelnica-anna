import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../atoms/Icon'

const Wrapper = styled.div`
  border-bottom: solid 1px ${({theme}) => theme.color.grey};
  display: flex;
  padding: 1.2rem 2rem;
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
    <span data-testid="list-item-name">{name}</span>
  </Wrapper>
);

CardListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CardListItem