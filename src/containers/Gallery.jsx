import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ReactJWPlayer from 'react-jw-player'
import GalleryItem from '../components/GalleryItem'
import Modal from '../components/Modal'
import { gallery, jwConfig } from '../util/config'


class Gallery extends Component {
  state = {
    activeVideo: 0,
    showVideo: false,
    videoConfig: {}
  }

  toggleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    })
  }

  playVideo = (videoConfig) => {
    this.setState({
      videoConfig
    })
    if (!this.state.showVideo) {
      this.toggleVideo()
    }
  }

  loadMore = () => {
    this.setState({
      activeVideo: this.state.activeVideo ? 0 : 1
    })
  }

  render () {
    const { activeVideo, showVideo, videoConfig } = this.state
    const { lang } = this.props.match.params
    if (lang === 'en') {
      return (
        <section className='section-gallery'>
          <div className='gallery-groups'>
            {gallery.map((group, groupIndex) => (
              <div className={`gallery-group group-${ groupIndex + 1}`} key={ groupIndex }>
                {group.map((item, itemIndex) => (
                  <GalleryItem item={ item } activeVideo={ activeVideo } loadMore={ this.loadMore } playVideo={ this.playVideo } key={ itemIndex } />
                ))}
              </div>
            ))}
          </div>
          {showVideo &&
            <Modal handleDismiss={ this.toggleVideo }>
              <ReactJWPlayer {...jwConfig} {...videoConfig} />
            </Modal>
          }
        </section>
      )
    }
    return null
  }
}

export default withRouter(Gallery)
