import React, { Component } from 'react'
import { withLocalize, Translate } from 'react-localize-redux'
import ReactJWPlayer from 'react-jw-player'
import Modal from '../components/Modal'
import { introVideoConfig, jwConfig } from '../util/config'

@withLocalize
class Intro extends Component {
  state = {
    showVideo: false
  }

  toggleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    })
  }

  render () {
    const { showVideo } = this.state
    return (
      <section className='section-intro' id='intro'>
        <div className='intro-container container'>
          <div className='intro-image-wrap' onClick={this.toggleVideo}>
            <img className='intro-image' src='http://cdnus.melaleuca.com/microsites/peak-performance/images/boxes.jpg' />
            <i className='fa fa-play-circle'></i>
          </div>
          <div className='intro-copy'>
            <h2 className='intro-title'>
              <Translate id='intro.title' />
            </h2>
            <p className='intro-description'>
              <Translate id='intro.description' />
            </p>
          </div>
        </div>
        {showVideo &&
          <Modal handleDismiss={this.toggleVideo}>
            <ReactJWPlayer {...jwConfig} {...introVideoConfig} />
          </Modal>
        }
      </section>
    )
  }
}

export default Intro
