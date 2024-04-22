import React from 'react'
import { isBrowser } from 'react-device-detect'
import { BaseProps } from 'src/types'

type Props = { contentClass?: string } & BaseProps

function ScrollView({ className, children, contentClass = '', ...others }: Props) {
  return (
    <div className={`relative ${className}`} {...others}>
      <div className={`h-full ${contentClass}`}>{children}</div>
      {isBrowser && (
        <div className='absolute top-0 right-[5px] bottom-0 w-[1px] bg-listBg -z-[1]' />
      )}
    </div>
  )
}

export default ScrollView
