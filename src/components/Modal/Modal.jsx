import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdpropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

   render() {
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <div onClick={this.handleBackdropClick}>
        <div> src={largeImageURL} alt={tags} </div>
      </div>,
      modalRoot
    );
  }
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  tag: PropTypes.string,
  onBackdpropClick: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

export default Modal;