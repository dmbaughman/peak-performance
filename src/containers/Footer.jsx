import React, { Component } from 'react'
import { withLocalize, Translate } from 'react-localize-redux'
import LanguageToggle from '../components/LanguageToggle'
// import { } from '../util/config'


const Footer = () => (
  <footer className='footer'>
    <div className='footer-upper'>
      <div className='container'>
        <h2 className='footer-title'>
          <Translate id='footer.title' />
        </h2>
        <p className='footer-lead'>
          <Translate id='footer.lead' />
        </p>
      </div>
    </div>
    <div className='footer-lower'>
      <div className='container'>
        <p className='footer-contact'>
          <Translate id='footer.contact' />
        </p>
      </div>
      <p className='footer-disclaimer'>
        <Translate id='footer.disclaimer' />
      </p>
      <p className='footer-copyright'>
        <Translate id='footer.copyright' data={{ year: new Date().getFullYear() }} />
      </p>
      <LanguageToggle />
    </div>
  </footer>
)

export default withLocalize(Footer)
