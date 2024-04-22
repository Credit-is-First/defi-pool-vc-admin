import React from 'react'
import { ReactComponent as WalletIcon } from 'src/assets/icons/wallet-icon.svg'
import BaseButton from 'src/components/buttons/BaseButton'
import { BaseProps } from 'src/types'

function ConnectWalletBtn({ className }: BaseProps) {
  return (
    <BaseButton className={`text-sm ${className}`}>
      <div className='pr-[10px]'>
        <WalletIcon />
      </div>
      <div className='gradient-text'>CONNECT WALLET</div>
    </BaseButton>
  )
}

export default ConnectWalletBtn
