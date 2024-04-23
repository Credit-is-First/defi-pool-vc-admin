import React, { InputHTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string | number
  inputClass?: string
  startItem?: React.ReactNode
  borderWidth?: number
}

const BaseRoundedInput: React.FC<BaseInputProps> = ({
  height = 47,
  style,
  className,
  inputClass,
  startItem,
  borderWidth = 2,
  ...rest
}) => {
  return (
    <GradientWrraper
      borderWidth={borderWidth}
      className={`rounded-[10px] flex items-center  ${className}`}
    >
      <input
        className={`border-0 focus:border-0 outline-0 focus:outline-0 ring-0 focus:ring-0 bg-transparent placeholder-gray-500 px-2 py-1 w-full ${inputClass}`}
        style={{
          ...style,
          height,
        }}
        {...rest}
      />
      {startItem && <div className='pr-[10px] leading-none text-disactive'>{startItem}</div>}
    </GradientWrraper>
  )
}

export default BaseRoundedInput
