import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const Backdrop = ({ children, isOpen, onClose }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      className={isOpen ? 'shared-backdrop' : 'shared-backdrop is-hidden'}
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Backdrop;
