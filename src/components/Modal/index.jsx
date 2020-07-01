import React from 'react';
import { createPortal } from 'react-dom';

import './index.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children }) => createPortal(
  <div className="modal">
    {children}
  </div>,
  modalRoot,
);

export default Modal;
