import React from 'react'
import PropTypes from 'prop-types'

const VideoPlayer = ({ sources, handleTimeUpdate, ...rest}) => (
  <video onTimeUpdate={handleTimeUpdate} {...rest}>
    {sources.map((source, index) => (
      <source src={source.url} type={source.type} key={index} />
    ))}
  </video>
)



VideoPlayer.propTypes = {

}

export default VideoPlayer
