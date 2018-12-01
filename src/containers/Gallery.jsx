import React, { Component } from 'react'
import GalleryItem from '../components/GalleryItem'
import { gallery } from '../util/config'

class Gallery extends Component {
  render () {
    return (
      <section className='section-gallery'>
        <div className='gallery-groups container'>
          {gallery.map((group, groupIndex) => (
            <div className={`gallery-group group-${groupIndex + 1}`} key={groupIndex}>
              {group.map((item, itemIndex) => (
                <GalleryItem item={item} key={itemIndex} />
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Gallery
