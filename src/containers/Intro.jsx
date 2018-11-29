import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';

// import { } from '../util/config'

@withLocalize
class Intro extends Component {
  render () {
    return (
      <h1>Intro</h1>
    )
  }
}

export default Intro;
