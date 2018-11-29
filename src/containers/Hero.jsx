import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';
import ReactJWPlayer from 'react-jw-player';

import { player } from '../util/config'

@withLocalize
class Hero extends Component {
  render () {
    return (
      <section>
        <ReactJWPlayer
          playerId='hero-player'
          playlist={player.playlist.hero}
          playerScript={player.script}
          customProps={player.config}
        />
      </section>
    )
  }
}

export default Hero;
