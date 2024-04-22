import React, { useCallback } from 'react'
import { clsx } from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  icon: string
  text: string
  to: string
  showText?: boolean
}

function MenuItem({ icon, text, to, showText = true }: Props) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const iconSrc =
    '/assets/icons/sidebar/' + icon + (pathname.startsWith(to) ? '-hover.svg' : '.svg')

  const handleClick = useCallback(() => navigate(to), [to])

  return (
    <div className='flex cursor-pointer' onClick={handleClick}>
      <img src={iconSrc} alt='sidebar icon' />
      <span
        className={clsx(
          { hidden: !showText },
          'text-lg ml-[20px]',
          { 'gradient-text': pathname.startsWith(to) },
          { 'text-white': !pathname.startsWith(to) },
        )}
      >
        {text}
      </span>
    </div>
  )
}

export default MenuItem
