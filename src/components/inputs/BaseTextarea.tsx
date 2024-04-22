import React, { TextareaHTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

interface BaseInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: string | number
  textareaClass?: string
}
function BaseTextarea({
  className,
  height = 102,
  style,
  textareaClass,
  ...others
}: BaseInputProps) {
  return (
    <GradientWrraper borderWidth={2} className={`rounded-[10px] ${className}`}>
      <textarea
        className={`border-0 outline-0 bg-transparent placeholder-gray-500 w-full h-full mb-[-6px] p-3 ${textareaClass}`}
        style={{ ...style, height }}
        {...others}
      />
    </GradientWrraper>
  )
}

export default BaseTextarea
