import React from 'react'
import ScrollView from 'src/components/ScrollView'
import BaseSearchInput from 'src/components/inputs/BaseSearchInput'
import FiveirePercentItem from '../Statistics/FiveirePercentItem'
import { fireItems } from '../Statistics/dummyData'

function PublishedProject() {
  return (
    <div className='h-admin-content flex flex-col pb-[24px] md:pb-[29px]'>
      <div className='bg-cardBg rounded-[15px] lg:rounded-[30px] w-full h-full p-[7px] md:p-[24px]'>
        <BaseSearchInput className='mr-0 md:mr-[57px] mb-[14px]' />
        <ScrollView
          className='block flex-auto h-full'
          style={{ height: 'calc(100% - 56px)' }}
          contentClass='px-1 md:pr-[44px] overflow-y-auto'
        >
          <div className='grid gap-[18px] py-1'>
            {fireItems.map((precent, index) => (
              <FiveirePercentItem
                key={index}
                closable
                className='flex-auto w-full sm:mr-[18px]'
                percent={precent}
              />
            ))}
          </div>
        </ScrollView>
      </div>
    </div>
  )
}

export default PublishedProject
