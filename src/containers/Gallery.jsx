import React, { Component } from 'react'
import GalleryItem from '../components/GalleryItem'
import { gallery } from '../util/config'

class Gallery extends Component {
  state = {
    activeVideo: 0
  }

  loadMore = () => {
    this.setState({
      activeVideo: this.state.activeVideo ? 0 : 1
    })
  }

  render () {
    const { activeVideo } = this.state
    return (
      <section className='section-gallery'>
        <div className='gallery-groups'>
          {gallery.map((group, groupIndex) => (
            <div className={`gallery-group group-${ groupIndex + 1}`} key={ groupIndex }>
              {group.map((item, itemIndex) => (
                <GalleryItem item={ item } activeVideo={ activeVideo } loadMore={ this.loadMore } key={ itemIndex } />
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Gallery
