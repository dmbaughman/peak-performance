import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

class LanguageToggle extends Component {
  state = {
    langCode: ''
  }

  chooseLanguage = (event) => {
    this.setState({
      langCode: event.target.value
    })
    this.props.setActiveLanguage(event.target.value)
  }

  render () {
    const { languages, activeLanguage, setActiveLanguage } = this.props;
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

export default withLocalize(LanguageToggle)
