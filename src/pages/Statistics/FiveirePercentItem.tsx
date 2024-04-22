import clsx from 'clsx'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import fiveireIconSrc from 'src/assets/icons/5ire-icon.png'
import { BaseProps } from 'src/types'

type Props = {
  percent: number
} & BaseProps

function FiveirePercentItem({ percent, className, ...others }: Props) {
  const navigate = useNavigate()
  const handleProjectItem = useCallback(() => {
    navigate('/published-projects/project')
  }, [])

  return (
    <div
      className={clsx(
        'hover flex items-center justify-between h-[70px] bg-listBg px-[10px] md:px-[23px] rounded-[20px]',
        className,
      )}
      {...others}
      onClick={handleProjectItem}
    >
      <div className='flex items-center'>
        <img src={fiveireIconSrc} width={47} alt='5ire icon' />
        <div className='ul-text ml-[15px]'>5ire</div>
      </div>
      {percent >= 0 ? (
        <div className='text-accent'>+{percent}%</div>
      ) : (
        <div className='text-danger'>{percent}%</div>
      )}
    </div>
  )
}

export default FiveirePercentItem
