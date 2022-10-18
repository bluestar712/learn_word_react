import React from 'react';
import classes from './Modal.module.css'

interface ModalProps {
    visible?: boolean
    children: React.ReactNode
}

const Modal = ({visible, children}: ModalProps) => {
    // const ref = useRef(null)
    //
    // const showModal = () => ref.current?.showModal()
    // const closeModal = () => ref.current?.close()
    //
    //
    // useEffect(() => {
    //     if (visible) {
    //         showModal()
    //     } else {
    //         console.log('close')
    //         closeModal()
    //     }
    //
    // }, [visible])

    return (
        <dialog
            className={classes.modal}
            // ref={ref}
        >
            {children}
        </dialog>
    );
};

export default Modal;