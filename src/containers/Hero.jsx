import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';
import ReactJWPlayer from 'react-jw-player';

import { heroPlayer } from '../util/config'

@withLocalize
class Hero extends Component {
  state = {
    steps: 4,
    activeStep: 0
  }

  handleStepClick = (index) => {
    this.setState({
      activeStep: index
    })
  }

  render () {
    const { steps, activeStep } = this.state;
    return (
      <section className='section-hero'>
        <ReactJWPlayer
          className='hero-video'
          playerId='hero-player'
          playlist={heroPlayer.playlist.hero}
          playerScript={heroPlayer.script}
          customProps={heroPlayer.config}
        />
        <ol className='hero-steps'>
          {Array(steps).fill().map((step, index) => (
            <li className={`hero-steps-item${index === activeStep ? ' active' : ''}`} onClick={() => this.handleStepClick(index)} key={index}>
              <Translate id={`hero.steps.${index + 1}`} />
            </li>
          ))}
        </ol>
        <h1 className='hero-title'>
          <Translate id='hero.title' />
        </h1>
        <div className='hero-scroll'>
          <a className='hero-scroll-link' href='#intro'>
            <Translate id='ui.scroll' />
            <span className='arrow'></span>
          </a>
        </div>
      </section>
    )
  }
}

export default Hero;
