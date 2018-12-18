import React from 'react'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import { chart } from '../util/config'

const Chart = ({ children, handleDismiss }) => (
  <div className='chart'>
    <img className='chart-logo' src={chart.logo.url} alt={chart.logo.alt} />
    <h2 className='chart-title'>
      <Translate id='details.chart.title' />
    </h2>
    <p className='chart-lead'>
      <Translate id='details.chart.lead' />
    </p>
    <img className='chart-illustration' src={chart.illustration.url} alt={chart.illustration.alt} />
    <p className='chart-description'>
      <Translate id='details.chart.description' />
    </p>
    <figure className='chart-figure'>
      <img className='chart-figure-image' src={chart.figure.url} alt={chart.figure.alt} />
      <figcaption className='chart-figure-caption'>
        <Translate id='details.chart.caption' />
      </figcaption>
    </figure>
  </div>
)



Chart.propTypes = {

}

export default Chart
