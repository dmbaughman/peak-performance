import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';

import { images, links, detailsItems } from '../util/config'

@withLocalize
class Details extends Component {
  render () {
    const detailsItem = (item, key) => (
      <div className='details-item' key={key}>
        <div className='details-image-wrap'>
          <img className='details-image' src={item.image.url} alt={item.image.alt} />
          <div className='details-learn-more'>
            <button className='details-learn-more-link'>
              <Translate id={`details.${item.sectionId}.infoLink`} />
            </button>
            <img className='details-learn-more-logo' src={item.logo.url} alt={item.logo.alt} />
          </div>
        </div>
        <div className='details-copy'>
          <h2 className='details-title'>
            <Translate id={`details.${item.sectionId}.title`} />
          </h2>
          <p className='details-description'>
            <Translate id={`details.${item.sectionId}.description`} />
          </p>
        </div>
      </div>
    )
    return (
      <section className='section-details'>
        <div className='container'>
          {detailsItems.map((item, index) => detailsItem(item, index))}
        </div>
      </section>
    )
  }
}

export default Details;
