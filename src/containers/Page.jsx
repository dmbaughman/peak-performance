import React, { Component } from 'react'
import Localizer from './Localizer'
import IconSprite from '../components/IconSprite'
import Hero from './Hero'
import Quiz from './Quiz'
import Intro from './Intro'
import Gallery from './Gallery'
import Contents from './Contents'
import Details from './Details'
import Footer from './Footer'

const Page = () => (
  <Localizer>
    <main>
      <IconSprite />
      <Hero />
      <Quiz />
      <Intro />
      <Gallery />
      <Contents />
      <Details />
      <Footer />
    </main>
  </Localizer>
)

export default Page
