import React, { Component } from 'react'
import { withLocalize, Translate } from 'react-localize-redux'
import VisibilitySensor from 'react-visibility-sensor'

import { contentsIntro, supplements } from '../util/config'

@withLocalize
class Contents extends Component {
  state = {
    activeSlide: 0,
    isVisible: false,
    intervalId: null,
    showSupplements: false,
    activeSupplement: 0
  }


  handleVisibility = (isVisible) => {
    if (isVisible && !this.state.isVisible) {
      this.setState({
        isVisible: true,
        intervalId: setInterval(this.slideTimer, 6000)
      })
    }
  }

  slideTimer = () => {
    if (this.state.activeSlide < contentsIntro.length) {
      this.setState({
        activeSlide: this.state.activeSlide + 1
      })
    } else {
      // Stop Timer
      clearInterval(this.state.intervalId)
    }
    if (this.state.activeSlide === contentsIntro.length) {
      // Reveal static content
      this.setState({
        showSupplements: true
      })
    }
  }

  handleSupplementClick = (index) => {
    this.setState({
      activeSupplement: index
    })
  }

  render () {
    const { activeSlide, isVisible, showSupplements, activeSupplement } = this.state
    const getDisplayClasses = (index) => {
      if (isVisible) {
        switch (index) {
          case activeSlide:
            return 'active'
          case activeSlide - 1:
            return 'fade-out'
          default:
            return ''
        }
      }
      return null
    }
    return (
      <section className='section-contents'>
        <VisibilitySensor onChange={this.handleVisibility}>
          <span className='contents-visibility-sensor'>&nbsp;</span>
        </VisibilitySensor>
        <div className='container'>
          {contentsIntro.map((item, index) => (
            <div className={`contents-slide ${item.id} ${getDisplayClasses(index)}`} key={item.id}>
              <h2 className='contents-title'>
                <Translate id={`contents.${item.id}.title`} />
              </h2>
              <h2 className='contents-head'>
                <Translate id={`contents.${item.id}.head`} />
              </h2>
              {item.subhead &&
                <h2 className='contents-subhead'>
                  <Translate id={`contents.${item.id}.subhead`} />
                </h2>
              }
              {item.items &&
                <ul className='contents-list'>
                  {item.items.map((listItem) => (
                    <li className='contents-list-item' key={listItem}>
                      <Translate id={`contents.${item.id}.items.${listItem}`} />
                    </li>
                  ))}
                </ul>
              }
              {item.img &&
                <div className='contents-image-wrap'>
                  <img className='contents-image' src={item.img.url} alt={item.img.altText} />
                </div>
              }
              {item.afterthought &&
                <span className={`contents-afterthought ${item.afterthought.largeScreen ? 'hidden-md-down' : ''}`}>
                  <Translate id={`contents.${item.id}.afterthought`} />
                </span>
              }
              {item.ribbon &&
                <img className='contents-ribbon hidden-md-down' src={item.ribbon} alt='' />
              }
            </div>
          ))}
          <div className={`contents-supplements ${showSupplements ? 'active' : ''}`}>
            <h2 className='contents-title'>
              <Translate id='contents.supplements.title' />
            </h2>
            <ol className='supplements-list'>
              {supplements.map((supplement, index) => (
                <li className={`supplements-list-item ${activeSupplement === index ? 'active' : ''}`} onClick={() => this.handleSupplementClick(index)} key={supplement.id}>
                  <img className='supplements-image' src={supplement.image.url} alt={supplement.image.alt} />
                </li>
              ))}
            </ol>
            <ol className='supplements-info'>
              {supplements.map((supplement, index) => (
                <li className={`supplements-info-item ${activeSupplement === index ? 'active' : ''}`} key={supplement.id}>
                  <h3 className='supplements-info-title'>
                    <Translate id={`contents.supplements.${supplement.id}.title`} />
                  </h3>
                  <div className='supplements-info-description'>
                    <Translate id={`contents.supplements.${supplement.id}.description`} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    )
  }
}

export default Contents
