import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize } from 'react-localize-redux'
import translations from '../util/translations'
import { languages } from '../util/config'

import IconSprite from '../components/IconSprite'
import Hero from './Hero'
import Quiz from './Quiz'
import Intro from './Intro'
import Gallery from './Gallery'
import Contents from './Contents'
import Details from './Details'
import Footer from './Footer'

class Page extends Component {
  componentDidMount () {
    const { lang } = this.props.match.params
    this.props.initialize({
      languages: languages,
      translation: translations,
      options: {
        defaultLanguage: lang,
        renderToStaticMarkup,
        renderInnerHtml: true
      }
    })
  }

  render () {
    return (
      <main>
        <IconSprite />
        <Hero />
        <Quiz />
        <Intro />
        <Gallery />
        <Contents />
        <Details />
        <Footer />
      </main>
    )
  }

}

Page.propTypes = {
  lang: PropTypes.string
}

export default withLocalize(Page)
