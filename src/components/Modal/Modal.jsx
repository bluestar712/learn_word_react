import React from 'react';
import './Modal.css'

const Modal = ({visible, children}) => {
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
            className={'modal'}
            // ref={ref}
        >
            {children}
        </dialog>
    );
};

export default Modal;