import React from 'react'
import { BaseProps } from 'src/types'

type Props = {
  dotColor: string
  text: string
} & BaseProps

function LiItem({ dotColor, text, className, ...others }: Props) {
  return (
    <div className={`flex items-center ${className}`} {...others}>
      <span className={`${dotColor} w-[8px] h-[8px] rounded-[4px] inline-block mr-1`} />
      <span>{text}</span>
    </div>
  )
}

export default LiItem
