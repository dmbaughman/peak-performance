import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {

  componentDidMount () {
    document.getElementById('body').classList.add('modal-open');
  }

  componentWillUnmount () {
    document.getElementById('body').classList.remove('modal-open');
  }

  render () {
    const { handleDismiss, children } = this.props;
    return (
      <div className='modal'>
        <div className='modal-backdrop' onClick={handleDismiss} />
        <div className='modal-inner'>
          <button className='modal-close' onClick={handleDismiss}>
            <i className='fa fa-times-circle'></i>
          </button>
          { children }
        </div>
      </div>
    )
  }
}





Modal.propTypes = {

}

export default Modal
