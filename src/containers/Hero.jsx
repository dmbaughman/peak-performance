import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';
import ReactJWPlayer from 'react-jw-player';

import Icon from '../components/Icon'
import VideoPlayer from '../components/VideoPlayer'
import { heroVideoConfig, heroSlides } from '../util/config'
import { getNewActive } from '../util'

class Hero extends Component {
  state = {
    active: 0
  }

  handleStepClick = (index, time) => {
    const videoEl = document.getElementById('js-hero-video');
    this.setState({
      active: index
    })
    videoEl.currentTime = time;
  }

  handleTimeUpdate = (event) => {
    const { currentTime } = event.target;
    heroSlides.forEach((slide, index) => {
      if (currentTime >= slide.time && currentTime <= slide.time + .25) {
        this.setState({active: index});
      }
    })
  }

  //
  // Mobile slide advancement
  //

  componentDidMount () {
    if (window.matchMedia('(max-width: 991px)').matches) {
      this.setState({
        intervalId: setInterval(this.timer, 4000)
      })
    }
  }

  componentWillUnmount () {
    if (window.matchMedia('(max-width: 991px)').matches) clearInterval(this.state.intervalId)
  }

  timer = () => {
    this.setState({
      active: getNewActive(this.state.active, heroSlides.length)
    })
  }


  render () {
    const { active } = this.state;
    return (
      <section className='section-hero'>
        <h2 className='hero-tagline'>
          <Translate id='hero.tagline' />
        </h2>
        <ol className='hero-steps' role='tablist'>
          {heroSlides.map((slide, index) => (
            <li
              className={`hero-steps-item${index === active ? ' active' : ''}`}
              onClick={() => this.handleStepClick(index, slide.time)}
              role='tab'
              aria-selected={index === active}
              aria-controls='hero-slide-panel'
              tabIndex={index}
              key={index}></li>
          ))}
        </ol>
        <VideoPlayer className='hero-video' id='js-hero-video' handleTimeUpdate={this.handleTimeUpdate} {...heroVideoConfig} />
        <div className='hero-slide-panel' id='hero-slide-panel'>
          {heroSlides.map((slide, index) => {
            return (
              <div
                className={`hero-slide ${index === active ? 'active' : ''}`}
                style={{backgroundImage: `url('${slide.mobileImg}')`}}
                key={slide.id}>
                <h1 className='hero-title'>
                  <Translate id={`hero.titles.${slide.id}`} />
                </h1>
              </div>
            )
          })}
        </div>
        <div className='hero-scroll'>
          <a className='hero-scroll-link' href='#intro'>
            <Translate id='ui.scroll' />
            <Icon id='arrow' />
          </a>
        </div>
      </section>
    )
  }
}

export default Hero;
