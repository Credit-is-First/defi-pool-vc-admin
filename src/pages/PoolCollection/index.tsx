import React from 'react'
import BaseButton from 'src/components/buttons/BaseButton'
import BaseRoundedInput from 'src/components/inputs/BaseRoundedInput'
import TextEditor from './components/TextEditor'

function PoolCollectionPage() {
  return (
    <div>
      <TextEditor className='h-[745px]' placeholder='Название проекта' />
      <div className='text-center'>
        <BaseButton className='inline-block w-full xs:w-[309px] h-[59px] text-[16px] mt-[30px]'>
          предварительный просмотр
        </BaseButton>
      </div>
      <div className='grid mt-[49px] gap-[15px]'>
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Сеть сбора пула'
        />
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Валюта сбора пула'
        />
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Сумма сбора пула'
        />
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Максимальное время сбора пула '
        />
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Размер комиссии '
        />
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Адрес получателя пула '
        />
        <BaseRoundedInput
          borderWidth={1}
          className='h-[55px] px-[21px] text-[14px]'
          placeholder='Адрес получателя комиссии '
        />
      </div>
      <div className='text-center'>
        <BaseButton className='inline-block w-full xs:w-[193px] h-[59px] text-[16px] mt-[30px] mb-[67px]'>
          СОЗДАТЬ
        </BaseButton>
      </div>
    </div>
  )
}

export default PoolCollectionPage
