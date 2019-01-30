import React from 'react'
import { withRouter } from 'react-router-dom'
import { Translate } from 'react-localize-redux'
import Localizer from '../containers/Localizer'
import AuxHeader from './AuxHeader'
import AuxFooter from './AuxFooter'
import IconSprite from '../components/IconSprite'

const AuxPage = ({ pageId, match }) => (
  <Localizer>
    <div className='aux-page'>
      <IconSprite />
      <AuxHeader />
      <main className='aux-page-contents container'>
        <Translate id={`aux.${match.params.pageId}`} />
      </main>
      <AuxFooter />
    </div>
  </Localizer>
)

export default withRouter(AuxPage)
