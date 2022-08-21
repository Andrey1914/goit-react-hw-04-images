import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBoard } from './ModalStyled';

const modalRoot = document.querySelector('#root');

export default function Modal({ url, onToggleModal }) {
  useEffect(() => {
    const backdrop = document.querySelector('#backdrop');
    window.addEventListener('keydown', closeModal);
    backdrop.addEventListener('click', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      onToggleModal();
    }
  };

  return createPortal(
    <Backdrop id="backdrop">
      <ModalBoard>
        <img src={url} alt="" />
      </ModalBoard>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
