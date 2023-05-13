import {clsx} from 'clsx'
import React, {HTMLProps} from 'react'

type SpinnerProps = HTMLProps<HTMLDivElement>

export default function Spinner({className}: SpinnerProps) {
  return (
    <div className={clsx('flex items-center justify-center p-8', className)}>
      <div className='h-16 w-16 animate-spin rounded-full border-b-2 border-blue'/>
    </div>
  )
}
