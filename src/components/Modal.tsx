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

type ModalProps = React.DialogHTMLAttributes<HTMLDialogElement>

export default Modal;
