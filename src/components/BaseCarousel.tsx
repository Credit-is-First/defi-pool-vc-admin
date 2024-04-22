import React, { useCallback, useState } from 'react'
import Carousel, { CarouselProps, ResponsiveType } from 'react-multi-carousel'
import { isBrowser } from 'react-device-detect'
import 'react-multi-carousel/lib/styles.css'
import { ReactComponent as LeftArrow } from 'src/assets/icons/arrow-icon.svg'

type Props = { responsive?: ResponsiveType } & Omit<CarouselProps, 'responsive'>

const defaultResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
    partialVisibilityGutter: 15,
  },
  labtop: {
    breakpoint: { max: 1280, min: 960 },
    items: 3,
    partialVisibilityGutter: 15,
  },
  tablet: {
    breakpoint: { max: 960, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

function BaseCarousel({ className = '', itemClass = '', children, responsive, ...others }: Props) {
  const [carousel, setCarousel] = useState<Carousel | null>(null)

  const next = useCallback(() => {
    if (
      !carousel ||
      carousel.state.currentSlide >= carousel.state.totalItems - carousel.state.slidesToShow
    )
      return
    carousel.goToSlide(carousel.state.currentSlide + 1)
  }, [carousel])

  const prev = useCallback(() => {
    if (!carousel || carousel.state.currentSlide <= 0) return
    carousel.goToSlide(carousel.state.currentSlide - 1)
  }, [carousel])

  return (
    <>
      <Carousel
        {...others}
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
        ref={(el) => setCarousel(el)}
        arrows={false}
        className={className}
        itemClass={`px-[1px] flex justify-center select-none ${itemClass}`}
        responsive={responsive || defaultResponsive}
        draggable
        partialVisible
        customTransition='all 1s'
      >
        {children}
      </Carousel>
      {isBrowser && (
        <div className='flex justify-between mt-[40px]'>
          <LeftArrow className={'cursor-pointer'} onClick={prev} />
          <LeftArrow className={'cursor-pointer transform -scale-x-100'} onClick={next} />
        </div>
      )}
    </>
  )
}

export default BaseCarousel
