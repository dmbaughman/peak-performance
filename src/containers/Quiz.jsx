import React, { Component } from 'react'
import { Translate } from 'react-localize-redux'
import { symptoms } from '../util/config'
import { getNewActive } from '../util'

class Quiz extends Component {
  state = {
    symptoms: symptoms,
    active: 0,
    intervalId: null
  }

  componentDidMount () {
    this.setState({
      intervalId: setInterval(this.timer, 3000)
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    this.setState({
      active: getNewActive(this.state.active, this.state.symptoms.length)
    })
  }

  getStatusClassName = (index) => {
    const { active, symptoms } = this.state
    switch (index) {
      case active:
        return 'active'
      case (active % (symptoms.length - 1)) + (symptoms.length - 1):
      case active - 1:
        return 'prev'
      case active + 1:
      case active % (symptoms.length - 1):
        return 'next'
      default:
        return ''
    }
  }

  render () {
    const { symptoms } = this.state
    return (
      <section className='section-quiz'>
        <div className='quiz-inner'>
          <p className='quiz-lead'>
            <Translate id='quiz.lead' />
          </p>
          <ol className='quiz-symptoms'>
            {symptoms.map((symptom, index) => (
              <li className={`quiz-symptom ${this.getStatusClassName(index)}`} key={index}>
                <Translate id={`quiz.symptoms.${symptom}`} />
              </li>
            ))}
          </ol>
          <ol className='quiz-symptoms hidden'>
            {symptoms.map((symptom, index) => (
              <li className='quiz-symptom' key={index}>
                <Translate id={`quiz.symptoms.${symptom}`} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    )
  }
}

export default Quiz
