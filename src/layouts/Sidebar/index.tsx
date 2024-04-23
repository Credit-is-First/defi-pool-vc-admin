import React, { useCallback } from 'react'
import GradientWrraper from 'src/components/GradientWrapper'
import { BaseProps } from 'src/types'
import MenuItem from './components/MenuItem'
import clsx from 'clsx'
import { ReactComponent as LeftArrow } from 'src/assets/icons/arrow-icon.svg'

type Props = {
  showMenuTitle: boolean
  onOpen?: React.Dispatch<React.SetStateAction<boolean>>
} & BaseProps

function AdminSidebar({ className, showMenuTitle, onOpen }: Props) {
  const handleToggle = useCallback(() => {
    onOpen && onOpen((prev: boolean) => !prev)
  }, [onOpen])

  return (
    <div className={clsx('select-none', className)}>
      <GradientWrraper
        borderWidth={1}
        className={
          'h-full right-0 rounded-[15px] lg:rounded-[30px] rounded-l-none lg:rounded-l-none shadow-sidebar left-[-1px] px-5 md:px-10 lg:px-20 xl:px-[100px] py-[36px] bg-mainBg'
        }
      >
        <div className='grid gap-[19px]'>
          <div className='sm:hidden flex justify-end w-full'>
            <LeftArrow
              className={clsx('mt-[-30px] cursor-pointer text-center w-[23px]', {
                'transform -scale-x-100': !showMenuTitle,
              })}
              onClick={handleToggle}
            />
          </div>
          <MenuItem
            showText={showMenuTitle}
            to='/pool-collection'
            icon='first'
            text='Запуск сбора пула'
          />
          <MenuItem
            showText={showMenuTitle}
            to='/upcoming-projects'
            icon='second'
            text='Ближайшие проекты '
          />
          <MenuItem showText={showMenuTitle} to='/blog' icon='third' text='Блог ' />
          <MenuItem showText={showMenuTitle} to='/statistics' icon='fourth' text='Статистика' />
          <MenuItem
            showText={showMenuTitle}
            to='/published-projects'
            icon='fifth'
            text='Опубликованные проекты'
          />
        </div>
      </GradientWrraper>
    </div>
  )
}

export default AdminSidebar
