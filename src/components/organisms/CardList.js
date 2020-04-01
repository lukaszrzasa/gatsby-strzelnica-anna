import React from 'react'
import PropTypes from 'prop-types'
import CardListHeader from '../molecules/CardListHeader'
import CardListItem from '../molecules/CardListItem'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
`;

const ItemsWrapper = styled.div`
  border: solid 1px ${({theme}) => theme.color.grey};
  border-top: none;
  border-radius: 0 0 1rem 1rem;
`


const CardList = ({ header:{ title, subtitle }, items }) => {
  return (
    <Wrapper>
      <CardListHeader
        title={title}
        subtitle={subtitle}
      />
      <ItemsWrapper>
        {items.map( ({icon, name}, index) => <CardListItem
          key={index}
          icon={icon}
          name={name}
        /> )}
      </ItemsWrapper>
    </Wrapper>
  )
}

CardList.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
}

export default CardList