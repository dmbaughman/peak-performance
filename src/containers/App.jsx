import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Page from './Page'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/en' />} />
          <Route path='/:lang' component={Page} />
        </Switch>
      </Router>
    )
  }
}

export default App
