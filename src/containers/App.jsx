import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';
import { renderToStaticMarkup } from "react-dom/server";

import translations from '../util/translations';
import { languages } from '../util/config'

import Hero from './Hero';
import Intro from './Intro';
import Gallery from './Gallery';
import Contents from './Contents';
import Details from './Details';
import Footer from './Footer';

@withLocalize
class App extends Component {
  componentDidMount() {
    this.props.initialize({
      languages: languages,
      translation: translations,
      options: { renderToStaticMarkup, renderInnerHtml: true }
    })
  }

  render () {
    return (
      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Contents />
        <Details />
        <Footer />
      </main>
    )
  }
}

export default App;
