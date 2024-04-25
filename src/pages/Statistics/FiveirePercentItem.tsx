import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fiveireIconSrc from 'src/assets/icons/5ire-icon.png'
import { BaseProps } from 'src/types'
import { ReactComponent as Close } from 'src/assets/icons/close.svg'
import BaseDialog from 'src/components/BaseDialog'
import BaseButton from 'src/components/buttons/BaseButton'

type Props = {
  percent: number
  closable?: boolean
} & BaseProps

function FiveirePercentItem({ percent, className, closable, ...others }: Props) {
  const navigate = useNavigate()
  const handleProjectItem = useCallback(() => {
    navigate('/published-projects/project')
  }, [])

  const [open, setOpen] = useState(false)

  const handleRemove = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div className={clsx('flex items-center w-full', className)}>
      <div
        className='hover flex flex-auto items-center justify-between h-[70px] bg-listBg px-[10px] md:px-[23px] rounded-[20px]'
        {...others}
        onClick={handleProjectItem}
      >
        <div className='flex items-center'>
          <img src={fiveireIconSrc} width={47} alt='5ire icon' />
          <div className='ul-text ml-[15px]'>5ire</div>
        </div>
        <div
          className={clsx(
            { 'text-accent': percent >= 0, 'text-danger': percent < 0 },
            'flex items-center',
          )}
        >
          {percent >= 0 && '+'}
          {percent}%
          {closable && (
            <span onClick={(e) => e.stopPropagation()}>
              <Close className='ml-[10px] sm:hidden cursor-pointer' onClick={handleRemove} />
            </span>
          )}
        </div>
      </div>
      {closable && (
        <span onClick={(e) => e.stopPropagation()}>
          <Close className='hidden sm:block ml-[18px] cursor-pointer' onClick={handleRemove} />
        </span>
      )}

      <BaseDialog open={open} onClose={handleClose} center className='rounded-xl max-w-xs !p-6'>
        <h5 className='mb-8'>Удалить</h5>
        <div className='flex justify-end gap-2'>
          <BaseButton className='text-sm w-[70px] h-[30px]' borderWidth={2}>
            Да
          </BaseButton>
          <BaseButton className='text-sm w-[70px] h-[30px]' borderWidth={2}>
            Нет
          </BaseButton>
        </div>
      </BaseDialog>
    </div>
  )
}

export default FiveirePercentItem
