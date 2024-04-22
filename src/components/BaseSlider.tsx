import React from 'react'
import { BaseProps } from 'src/types'

type Props = { min?: number; max?: number; value: number } & BaseProps

function BaseSlider({ min = 0, max = 100, value, className, style, ...others }: Props) {
  const right = 100 - (value / (max - min)) * 100

  return (
    <div
      className={`relative min-h-5 overflow-hidden rounded-[9999px] ${className}`}
      {...others}
      style={{
        background:
          'linear-gradient(180deg, rgba(39, 39, 39, 0.27) 7.09%, rgba(57, 57, 57, 0.51) 38.26%, rgba(90, 90, 90, 0.79) 68.96%, #202020 94.18%)',
        ...style,
      }}
    >
      <div
        className='absolute left-0 top-0 bottom-0'
        style={{
          background:
            'linear-gradient(180deg, rgba(2, 164, 255, 0.3) 7.09%, rgba(3, 203, 255, 0.45) 38.26%, rgba(14, 201, 255, 0.86) 68.96%, #02CFFF 94.18%)',
          right: `${right}%`,
        }}
      ></div>
    </div>
  )
}

export default BaseSlider
