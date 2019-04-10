import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Page from './Page'
import AuxPage from '../components/AuxPage'


class App extends Component {
  render () {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path='/' exact render={() => <Redirect to='/en' />} />
            <Route path='/:lang' exact component={Page} />
            <Route path='/:lang/:pageId' exact component={AuxPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
