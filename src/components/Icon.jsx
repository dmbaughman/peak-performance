import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ id }) => (
  <svg className={`icon icon-${id}`}>
    <use href={`#${id}`} />
  </svg>
)

Icon.propTypes = {

}

export default Icon
