import React from 'react'
import { withRouter } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'
import Icon from './Icon'

const GoBack = ({ history }) => (
  <div className='aux-go-back'>
    <div className='container'>
      <button className='btn-go-back btn' type='button' onClick={history.goBack}>
        <Icon id='arrow' />
        <Translate id='ui.back' />
      </button>
    </div>
  </div>
)

export default withRouter(withLocalize(GoBack))
