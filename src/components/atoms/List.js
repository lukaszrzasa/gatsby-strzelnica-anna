import React from 'react'
import PropTypes from 'prop-types'

const List = ({items}) => {
  return (
    <ul>
      {items.map((e,i) => <li key={i}>{e}</li>)}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default List