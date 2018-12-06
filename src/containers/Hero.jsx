import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';
import ReactJWPlayer from 'react-jw-player';

import Icon from '../components/Icon'
import VideoPlayer from '../components/VideoPlayer'
import { heroPlayer } from '../util/config'

class Hero extends Component {
  state = {
    stepCount: 4,
    activeStep: 0
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
        <VideoPlayer className='hero-video' {...heroPlayer} />
        <h2 className='hero-tagline'>
          <Translate id='hero.tagline' />
        </h2>
        <ol className='hero-steps'>
          {Array(stepCount).fill().map((step, index) => (
            <li className={`hero-steps-item${index === activeStep ? ' active' : ''}`} onClick={() => this.handleStepClick(index)} key={index}></li>
          ))}
        </ol>
        <h1 className='hero-title'>
          <Translate id='hero.title' />
        </h1>
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
