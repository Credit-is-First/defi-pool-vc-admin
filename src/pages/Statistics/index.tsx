import React from 'react'
import ringSrc from './image/ring_1.png'
import ring2Src from './image/ring_2.png'
import ScrollView from 'src/components/ScrollView'
import FiveirePercentItem from './FiveirePercentItem'
import { fireItems } from './dummyData'
import BaseSearchInput from 'src/components/inputs/BaseSearchInput'

function StatisticsPage() {
  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-[22px]'>
        <div className='col-span-1 aspect-square bg-cardBg  rounded-[15px] lg:rounded-[30px] flex flex-col items-center justify-center px-[78px]'>
          <h1 className='mt-[20px] text-accent text-[40px] xs:text-[48px] 2xl:text-[70px]'>2000</h1>
          <div className='relative mt-[33px] xl:mt-[24px] mb-[37px]'>
            <img src={ringSrc} className='min-w-[203px]' height={'100%'} alt='ring 1' />
            <div className='absolute inset-[25%] flex flex-col justify-between items-center'>
              <span>1</span>
              <h4 className='text-accent'>245</h4>
              <span>&nbsp;</span>
            </div>
          </div>
        </div>
        <div className='col-span-1 aspect-square bg-cardBg  rounded-[15px] lg:rounded-[30px] px-[40px] flex flex-col justify-evenly items-center'>
          <h1 className='text-[#86DDF1] text-[40px] xs:text-[48px] 2xl:text-[70px]'>1 500 000</h1>
          <div className='h-[17px] bg-[#86DDF1] rounded-full w-full'></div>
          <h1 className='text-accent text-[40px] xs:text-[48px] 2xl:text-[70px]'>250 000</h1>
        </div>
        <div className='col-span-1 aspect-square bg-cardBg  rounded-[15px] lg:rounded-[30px] px-[40px] flex flex-col justify-evenly items-center'>
          <h1 className='text-[40px] xs:text-[48px] 2xl:text-[70px]'>1 800 500</h1>
          <div className='h-[17px] bg-[#0B90AF] rounded-full w-full'></div>
          <h1 className='text-[40px] xs:text-[48px] 2xl:text-[70px]'>700 000</h1>
        </div>
        <div className='col-span-1 aspect-square bg-cardBg  rounded-[15px] lg:rounded-[30px] flex flex-col items-center justify-center px-[78px]'>
          <h1 className='text-accent mt-[20px] text-[40px] xs:text-[48px] 2xl:text-[70px]'>142</h1>
          <div className='relative mt-[24px] mb-[37px]'>
            <img src={ring2Src} alt='ring 2' className='min-w-[203px]' height={'100%'} />
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
              <h4 className='text-accent text-[40px] xs:text-[48px] 2xl:text-[70px]'>135</h4>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:col-span-2 relative h-[400px] xl:h-auto pb-0 xl:pb-[40%] bg-transparent sm:bg-cardBg  rounded-[15px] lg:rounded-[30px] mb-[34px] sm:mb-[42px]'>
          <div className='absolute inset-0 sm:inset-[28px]'>
            <BaseSearchInput className='mr-0 md:mr-[39px] mb-[14px]' />
            <ScrollView
              className='block flex-auto'
              style={{ height: 'calc(100% - 56px)' }}
              contentClass='px-1 md:pr-[30px] overflow-y-auto'
            >
              <div className='grid gap-[18px] py-1'>
                {fireItems.map((precent, index) => (
                  <FiveirePercentItem key={index} percent={precent} />
                ))}
              </div>
            </ScrollView>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsPage
