import React from 'react'
import TextEditor from '../PoolCollection/components/TextEditor'
import BaseButton from 'src/components/buttons/BaseButton'

function BlogPage() {
  return (
    <div className='min-h-admin-content flex flex-col'>
      <TextEditor className='flex-auto' placeholder='Название проекта' />
      <div className='text-center pb-[26px]'>
        <BaseButton className='inline-block w-full xs:w-[309px] h-[59px] text-[16px] mt-[30px]'>
          предварительный просмотр
        </BaseButton>
      </div>
    </div>
  )
}

export default BlogPage
