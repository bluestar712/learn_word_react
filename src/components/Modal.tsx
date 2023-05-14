import React, {useEffect, useRef} from 'react'

interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
  open: boolean
}

const Modal = ({open, children, className = ''}: ModalProps): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (open) {
        ref.current.showModal()
      } else {
        ref.current.close()
      }
    }
    return () => ref.current?.close();
  }, [open])

  return <dialog ref={ref} className={className}>{children}</dialog>
}

export default Modal
