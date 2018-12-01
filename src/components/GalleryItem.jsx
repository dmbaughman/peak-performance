import React from 'react'
import PropTypes from 'prop-types'
import { withLocalize, Translate } from 'react-localize-redux'

const GalleryItem = ({ item }) => {
  const renderSwitch = (item) => {
    switch (item.type) {
      case 'video':
        return (
          <img className={`gallery-thumbnail`} src={item.thumbnail} />
        )
      case 'text':
        return (
          <div>
            <h2 className='gallery-title'>
              <Translate id={item.title} />
            </h2>
            <p className='gallery-description'>
              <Translate id={item.description} />
            </p>
          </div>
        )
      case 'showMore':
        return (
          <button className='gallery-show-more btn' type='button'>
            <Translate id={item.label} />
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className={`gallery-item ${item.type} ${item.size}`}>
      {renderSwitch(item)}
    </div>
  )
}

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default withLocalize(GalleryItem)
