import React from 'react'
import { BaseProps } from 'src/types'

type Props = { borderWidth?: number; hideBorder?: boolean } & BaseProps

function GradientWrraper({
  borderWidth = 3,
  hideBorder = false,
  className,
  children,
  ...others
}: Props) {
  return (
    <div className={'relative ' + className} {...others}>
      {!hideBorder && (
        <div
          className='gradient-border pointer-events-none'
          style={{ position: 'absolute', '--b': borderWidth + 'px' } as React.CSSProperties}
        />
      )}
      {children}
    </div>
  )
}

export default GradientWrraper
