import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

export type BaseButtonProps = {
  hideBorder?: boolean
  name?: string
  uppercase?: boolean
  borderWidth?: number
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function BaseButton({
  className,
  hideBorder,
  children,
  borderWidth = 3,
  uppercase = true,
  name,
  ...others
}: BaseButtonProps) {
  return (
    <GradientWrraper
      borderWidth={borderWidth}
      hideBorder={hideBorder}
      className={`cursor-pointer hover rounded-[200px] ${className}`}
    >
      <button
        name={name}
        className={`gradient-text flex items-center justify-center ${uppercase ? 'uppercase' : ''} w-full h-full`}
        {...others}
      >
        {children}
      </button>
    </GradientWrraper>
  )
}

export default BaseButton
