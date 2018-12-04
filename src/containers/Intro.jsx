import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';

// import { } from '../util/config'

@withLocalize
class Intro extends Component {
  render () {
    return (
      <section className='section-intro' id='intro'>
        <div className='intro-container container'>
          <div className='intro-image-wrap'>
            {/* TODO: Replace CDN path with variable from Webpack */}
            <img className='intro-image' src='http://cdnctus.melaleuca.com/microsites/peak-performance/images/boxes.png' />
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
      </section>
    )
  }
}

export default Intro;