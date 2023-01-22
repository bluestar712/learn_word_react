import React from 'react';

const Modal = ({children, open = false}: ModalProps) => {
  if (!open) {
    return null
  }
  return (
    <dialog open={open}>
      {children}
    </dialog>
  );
};

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {

}

export default Modal;
