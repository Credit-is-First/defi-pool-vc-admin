import React from 'react'
import GradientWrraper from '../GradientWrapper'
import searchIconSrc from 'src/assets/icons/search-icon.svg'
import { BaseProps } from 'src/types'
import clsx from 'clsx'

function BaseSearchInput({ className }: BaseProps) {
  return (
    <GradientWrraper
      borderWidth={1}
      className={clsx('flex rounded-full text-sm px-[25px] items-center', className)}
    >
      <input
        type='text'
        placeholder='Search'
        className='border-none outline-none bg-transparent h-[42px] flex-auto placeholder-gray-500'
      />
      <img src={searchIconSrc} alt='search icon' />
    </GradientWrraper>
  )
}

export default BaseSearchInput
