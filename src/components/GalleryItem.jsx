import React from 'react'
import PropTypes from 'prop-types'
import { withLocalize, Translate } from 'react-localize-redux'

const GalleryItem = ({ item, activeVideo, loadMore }) => {
  const renderSwitch = (item) => {
    switch (item.type) {
      case 'video':
        return (
          <div className='gallery-thumbnail-wrap'>
            <img className='gallery-thumbnail' src={item.videos[activeVideo].thumbnail} />
            {item.videos[activeVideo].quote &&
              <div className='gallery-quote'>
                <blockquote className='gallery-quote-text'>&ldquo;{item.videos[activeVideo].quote}&rdquo;</blockquote>
                <cite className='gallery-quote-cite'>&ndash;{item.videos[activeVideo].name}</cite>
              </div>
            }
          </div>
        )
      case 'text':
        return (
          <div>
            <h2 className='gallery-title'>
              <Translate id={item.title} />
            </h2>
          </div>
        )
      case 'button':
        return (
          <button className='gallery-show-more btn btn-primary' type='button' onClick={loadMore}>
            <Translate id={item.label} />
            <svg className='icon icon-arrow'>
              <use href='#arrow' />
            </svg>
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className={`gallery-item ${item.type} ${item.size} ${item.largeScreen ? 'hidden-md-down' : ''}`}>
      {renderSwitch(item)}
    </div>
  )
}

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default withLocalize(GalleryItem)
