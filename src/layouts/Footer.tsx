import React from 'react'
import Logo from 'src/assets/images/logo.png'
import Socials from 'src/components/Socials'
import { BaseProps } from 'src/types'

function AdminFooter({ className }: BaseProps) {
  return (
    <div className={`flex flex-col-reverse xs:flex-row items-center justify-center ${className}`}>
      <div className='py-5 text-center xs:text-left'>
        <div className='w-[55px] h-[55px] inline-block'>
          <img src={Logo} alt='logo' />
        </div>
        <nav className='mt-[10px]'>DeFi pool LLC</nav>
        <Socials className='mt-[20px]' />
        <div>
          <nav className='mt-[20px]'>Prpopose a progect:</nav>
          <nav className='font-normal mt-[10px]'>support@defipool.com</nav>
        </div>
        <nav className='mt-[20px] text-subtitle'>2023</nav>
      </div>
    </div>
  )
}

export default AdminFooter
