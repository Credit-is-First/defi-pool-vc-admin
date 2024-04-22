import React, { InputHTMLAttributes } from 'react'
import './BaseCheckbox.css'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const BaseCheckbox: React.FC<BaseInputProps> = ({ className, label, ...rest }) => {
  return (
    <label className={`base-checkbox ${className}`}>
      <input type='checkbox' {...rest} />
      <span className='checkmark' />
      {label}
    </label>
  )
}

export default BaseCheckbox
