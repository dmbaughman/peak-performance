import React, { Component } from 'react'
import { withLocalize, Translate } from 'react-localize-redux'
import VisibilitySensor from 'react-visibility-sensor'

import { contentsList } from '../util/config'

@withLocalize
class Contents extends Component {
  state = {
    activeSlide: 0,
    isVisible: false,
    intervalId: null,
    showContents: false
  }

  componentDidMount () {
  }


  handleVisibility = (isVisible) => {
    if (isVisible) {
      this.setState({
        isVisible: true
      })

      this.setState({
        intervalId: setInterval(this.slideTimer, 7000)
      })
    }
  }

  slideTimer = () => {
    if (this.state.activeSlide <= contentsList.length) {
      this.setState({
        activeSlide: this.state.activeSlide + 1
      })
    } else {
      // Stop Timer
      clearInterval(this.state.intervalId)
      // Reveal static content
      this.setState({
        showContents: true
      })
    }
  }

  render () {
    const { activeSlide, isVisible } = this.state
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
          <div className='container'>
            {contentsList.map((item, index) => (
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
                  <img className='contents-image' src={item.img.url} alt={item.img.altText} />
                }
              </div>
            ))}
          </div>
        </VisibilitySensor>
      </section>
    )
  }
}

export default Contents
