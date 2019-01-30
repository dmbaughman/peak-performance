import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize } from 'react-localize-redux'
import translations from '../util/translations'
import { languages } from '../util/config'
import Helmet from 'react-helmet'

class Localizer extends Component {
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
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <html lang={this.props.match.params.lang} />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default withRouter(withLocalize(Localizer))
