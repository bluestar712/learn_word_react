import React from 'react';

type ModalProps = React.DialogHTMLAttributes<HTMLDialogElement>

export default function Modal({children, open = false}: ModalProps) {
  if (!open) {
    return null
  }
  return (
    <dialog open={open}>
      {children}
    </dialog>
  );
}
