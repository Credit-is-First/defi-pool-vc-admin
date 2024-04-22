import React from 'react'
import ConnectWalletBtn from 'src/components/buttons/ConnectWalletBtn'
import Logo from 'src/assets/images/logo.png'
import { BaseProps } from 'src/types'
import clsx from 'clsx'

function AdminHeader({ className }: BaseProps) {
  return (
    <div className={clsx('flex items-center justify-between py-[26px] bg-mainBg z-10', className)}>
      <img className='w-[55px] h-[55px]' src={Logo} alt='logo' />
      <ConnectWalletBtn className='w-[247px] h-[44px]' />
    </div>
  )
}

export default AdminHeader
