import React, { InputHTMLAttributes } from 'react'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BaseInput: React.FC<BaseInputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={`gradient-bottom-border border-0 outline-0 bg-transparent placeholder-gray-500 px-2 py-1 ${className}`}
      {...rest}
    />
  )
}

export default BaseInput
