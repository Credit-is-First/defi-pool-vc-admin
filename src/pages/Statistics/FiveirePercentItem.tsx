import clsx from 'clsx'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import fiveireIconSrc from 'src/assets/icons/5ire-icon.png'
import { BaseProps } from 'src/types'
import { ReactComponent as Close } from 'src/assets/icons/close.svg'

type Props = {
  percent: number
  closable?: boolean
} & BaseProps

function FiveirePercentItem({ percent, className, closable, ...others }: Props) {
  const navigate = useNavigate()
  const handleProjectItem = useCallback(() => {
    navigate('/published-projects/project')
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
              <Close className='ml-[10px] sm:hidden' />
            </span>
          )}
        </div>
      </div>
      {closable && (
        <span onClick={(e) => e.stopPropagation()}>
          <Close className='hidden sm:block ml-[18px]' />
        </span>
      )}
    </div>
  )
}

export default FiveirePercentItem
