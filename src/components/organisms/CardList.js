import React from 'react'
import PropTypes from 'prop-types'
import CardListHeader from '../molecules/CardListHeader'
import CardListItem from '../molecules/CardListItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const CardList = ({ header:{ title, subtitle }, items }) => {
  return (
    <Wrapper>
      <CardListHeader
        title={title}
        subtitle={subtitle}
      />
      {items.map( ({icon, name}, index) => <CardListItem
        key={index}
        icon={icon}
        name={name}
      /> )}
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