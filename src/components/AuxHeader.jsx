import React from 'react'
import { withLocalize, Translate } from 'react-localize-redux'
import GoBack from './GoBack'

const AuxHeader = ({ history }) => (
  <header className='aux-header'>
    <div className='container'>
      <h1 className='aux-header-title'>
        <Translate id='aux.title' />
      </h1>
    </div>
    <GoBack />
  </header>
)

export default withLocalize(AuxHeader)
