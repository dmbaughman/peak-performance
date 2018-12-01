import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withLocalize } from 'react-localize-redux'
import { renderToStaticMarkup } from 'react-dom/server'

import translations from '../util/translations'
import { languages } from '../util/config'

import IconSprite from '../components/IconSprite'
import Hero from './Hero'
import Intro from './Intro'
import Gallery from './Gallery'
import Contents from './Contents'
import Details from './Details'
import Footer from './Footer'

class App extends Component {
  componentDidMount () {
    this.props.initialize({
      languages: languages,
      translation: translations,
      options: { renderToStaticMarkup, renderInnerHtml: true }
    })
  }

  render () {
    return (
      <main>
        <IconSprite />
        <Hero />
        <Intro />
        <Gallery />
        <Contents />
        <Details />
        <Footer />
      </main>
    )
  }
}

App.propTypes = {
  initialize: PropTypes.func.isRequired
}

export default withLocalize(App)
