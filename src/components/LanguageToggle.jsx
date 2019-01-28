import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

class LanguageToggle extends Component {
  state = {
    langCode: ''
  }

  componentDidUpdate() {
    const { activeLanguage } = this.props
    if (activeLanguage && activeLanguage.code !== this.state.langCode) {
      this.setState({ langCode: activeLanguage.code })
    }
  }

  chooseLanguage = (event) => {
    this.props.setActiveLanguage(event.target.value)
    this.props.history.push(`/${event.target.value}`)
  }

  render () {
    const { languages, activeLanguage } = this.props;
    return (
      <div className='custom-select language-toggle'>
        <select value={this.state.langCode} onChange={this.chooseLanguage}>
          {languages.map(lang => (
            <option value={lang.code} key={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default withRouter(withLocalize(LanguageToggle))
