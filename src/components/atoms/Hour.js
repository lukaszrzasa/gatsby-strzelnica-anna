import React from 'react'
import PropTypes from 'prop-types'

const Hour = ({hour}) => {
  const [hh, mm] = hour.split(':')
  return (
    <span>
      {hh}
      <sup><small>{mm}</small></sup>
    </span>
  )
}

Hour.propTypes = {
  hour: PropTypes.string.isRequired,
}

export default Hour