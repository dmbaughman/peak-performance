import React, { Component } from 'react'
import { withLocalize, Translate } from 'react-localize-redux'
import ReactJWPlayer from 'react-jw-player'
import Modal from '../components/Modal'
import Chart from '../components/Chart'

import { images, links, detailsItems, jwConfig } from '../util/config'

@withLocalize
class Details extends Component {
  state = {
    showVideo: false,
    showChart: false,
    videoConfig: {}
  }

  toggleChart = () => {
    this.setState({
      showChart: !this.state.showChart
    })
  }

  toggleVideo = videoConfig => {
    this.setState({
      showVideo: !this.state.showVideo
    })
    if (typeof videoConfig !== 'undefined') {
      this.setState({
        videoConfig
      })
    }
  }

  render () {
    const { showVideo, showChart, videoConfig } = this.state
    const detailsItem = (item, key) => (
      <div className='details-item' key={key}>
        <div className='details-image-wrap'>
          <img className='details-image' src={item.image.url} alt={item.image.alt} />
          <div className='details-learn-more'>
            <button className='details-learn-more-link' onClick={this.toggleChart}>
              <Translate id={`details.${item.sectionId}.infoLink`} />
            </button>
            <img className='details-learn-more-logo' src={item.logo.url} alt={item.logo.alt} />
          </div>
        </div>
        <div className='details-copy'>
          <h2 className='details-title'>
            <Translate id={`details.${item.sectionId}.title`} />
          </h2>
          <p className='details-description'>
            <Translate id={`details.${item.sectionId}.description`} />
          </p>
          <button className='btn btn-primary' type='button' onClick={() => this.toggleVideo(item.video)}>
            <Translate id='ui.watch' />
            <svg className='icon icon-arrow'>
              <use href='#arrow' />
            </svg>
          </button>
        </div>
      </div>
    )
    return (
      <section className='section-details'>
        <div className='container'>
          {detailsItems.map((item, index) => detailsItem(item, index))}
        </div>
        {showVideo &&
          <Modal handleDismiss={this.toggleVideo}>
            <ReactJWPlayer {...jwConfig} {...videoConfig} />
          </Modal>
        }
        {showChart &&
          <Modal handleDismiss={this.toggleChart}>
            <Chart />
          </Modal>
        }
      </section>
    )
  }
}

export default Details
