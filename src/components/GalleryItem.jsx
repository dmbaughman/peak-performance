import React from 'react'
import PropTypes from 'prop-types'
import { withLocalize, Translate } from 'react-localize-redux'
import { gallery } from '../util/config'
import Icon from './Icon'

const GalleryItem = ({ item, activeVideo, loadMore, playVideo }) => {
  const renderSwitch = (item) => {
    switch (item.type) {
      case 'video':
        return (
          <div className='gallery-thumbnail-wrap' onClick={() => playVideo(item.videos[activeVideo])}>
            <img className='gallery-thumbnail' src={item.videos[activeVideo].image} />
            <i className='gallery-play-icon fa fa-play-circle'></i>
            {item.videos[activeVideo].quote &&
              <div className='gallery-quote'>
                <blockquote className='gallery-quote-text'>{item.videos[activeVideo].quote}</blockquote>
                <cite className='gallery-quote-cite'>&ndash;{item.videos[activeVideo].name}</cite>
              </div>
            }
          </div>
        )
      case 'text':
        return (
          <div>
            <h2 className='gallery-title'>
              <Translate id={item.title} data={{name: gallery[1][0].videos[activeVideo].name}} />
            </h2>
          </div>
        )
      case 'button':
        return (
          <button className='gallery-show-more btn btn-primary' type='button' onClick={loadMore}>
            <Translate id={item.label} />
            <Icon id='arrow' />
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
