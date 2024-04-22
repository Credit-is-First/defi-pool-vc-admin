import React from 'react'
import BaseSearchInput from 'src/components/inputs/BaseSearchInput'
import FiveirePercentItem from '../Statistics/FiveirePercentItem'
import fiveireChartSrc from 'src/assets/images/5ire_chart.png'

function Project() {
  return (
    <div>
      <BaseSearchInput className='mb-[20px] sm:mb-[29px]' />
      <FiveirePercentItem percent={238} />

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-[20px] sm:gap-[22px] mt-[20px] sm:mt-[48px]'>
        <div className='col-span-1 aspect-square bg-cardBg rounded-[30px] px-[40px] flex flex-col justify-evenly items-center'>
          <h1 className='text-accent text-[40px] xs:text-[48px] 2xl:text-[70px]'>1 500 000</h1>
          <div className='h-[17px] bg-[#86DDF1] rounded-full w-full'></div>
          <h1 className='text-accent text-[40px] xs:text-[48px] 2xl:text-[70px]'>2 000</h1>
        </div>
        <div className='col-span-1 aspect-square bg-cardBg rounded-[30px] px-[40px] flex flex-col justify-evenly items-center'>
          <h1 className='text-[40px] xs:text-[48px] 2xl:text-[70px]'>347</h1>
          <div className='h-[17px] bg-[#0B90AF] rounded-full w-full'></div>
          <h1 className='text-[40px] xs:text-[48px] 2xl:text-[70px]'>4</h1>
        </div>
      </div>

      <div className='md:col-span-1 lg:col-span-2 overflow-x-hidden'>
        <div className='mt-5 sm:mt-[80px] flex justify-between sm:justify-end items-center'>
          <div className='flex items-center pl-2'>
            <input
              id='fire_500'
              type='radio'
              name='fire-500'
              value={500}
              checked
              className='w-[20px] h-[20px]'
            />
            <label htmlFor='fire_500' className='ml-[25px]'>
              $500
            </label>
          </div>
          <div className='flex items-center'>
            <input
              id='fire_5000'
              type='radio'
              name='fire-500'
              className='w-[20px] h-[20px] ml-[30px]'
              value={5000}
            />
            <label htmlFor='fire_5000' className='ml-[25px]'>
              $5000
            </label>
          </div>
        </div>
        <div className='mt-[40px] sm:mt-0 mr-[-15px] lg:mr-[-25px]'>
          <img src={fiveireChartSrc} width='100%' alt='5ire chart' />
        </div>
      </div>
    </div>
  )
}

export default Project
