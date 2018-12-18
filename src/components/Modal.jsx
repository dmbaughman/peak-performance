import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, handleDismiss }) => (
  <div className='modal'>
    <div className='modal-inner'>
      <button className='modal-close' onClick={handleDismiss}>
        <i className='fa fa-times-circle'></i>
      </button>
      { children }
    </div>
    <div className='modal-backdrop' onClick={handleDismiss} />
  </div>
)



Modal.propTypes = {

}

export default Modal
