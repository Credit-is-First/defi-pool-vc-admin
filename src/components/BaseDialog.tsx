import React, { useEffect } from 'react'
import { BaseProps } from 'src/types'
import closeIconSrc from 'src/assets/icons/close-icon.svg'
import clsx from 'clsx'

export type BaseDialogProps = { open?: boolean; center?: boolean; onClose?: () => void } & BaseProps

function BaseDialog({ open, className, onClose, center, children }: BaseDialogProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <div
      className={clsx(
        'fixed z-50 inset-0 bg-black bg-opacity-90 overflow-y-auto h-full w-full px-4',
        { hidden: !open },
        { 'flex items-center justify-center': center },
      )}
    >
      <div
        className={clsx(
          `w-full relative mx-auto bg-mainBg shadow-dialog p-6 sm:p-8 lg:p-[46px] ${className}`,
          { 'md:mt-[140px] my-4': !center },
        )}
      >
        <img
          className='absolute cursor-pointer w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] top-[24px] right-[17px]'
          src={closeIconSrc}
          alt='close icon'
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default BaseDialog
