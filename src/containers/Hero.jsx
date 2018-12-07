import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';
import ReactJWPlayer from 'react-jw-player';

import Icon from '../components/Icon'
import VideoPlayer from '../components/VideoPlayer'
import { heroVideoConfig, heroSlides } from '../util/config'
import { getNewActive } from '../util'

class Hero extends Component {
  state = {
    stepCount: heroSlides.length,
    activeStep: 0,
    intervalId: null
  }

  componentDidMount () {
    this.setState({
      intervalId: setInterval(this.timer, 8000)
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    this.setState({
      activeStep: getNewActive(this.state.activeStep, heroSlides.length)
    })
  }

  handleStepClick = (index) => {
    this.setState({
      activeStep: index
    })
  }

  render () {
    const { stepCount, activeStep } = this.state;
    return (
      <section className='section-hero'>
        <h2 className='hero-tagline'>
          <Translate id='hero.tagline' />
        </h2>
        <ol className='hero-steps'>
          {Array(stepCount).fill().map((step, index) => (
            <li className={`hero-steps-item${index === activeStep ? ' active' : ''}`} onClick={() => this.handleStepClick(index)} key={index}></li>
          ))}
        </ol>
        {heroSlides.map((slide, index) => {
          const videoConfig = {...heroVideoConfig, ...slide.video}
          return (
            <div className={`hero-slide ${index === activeStep ? 'active' : ''}`} key={slide.id}>
              <VideoPlayer className='hero-video' {...videoConfig} />
              <h1 className='hero-title'>
                <Translate id={`hero.titles.${slide.id}`} />
              </h1>
            </div>
          )
        })}
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
