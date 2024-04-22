import React from 'react'
import { Link } from 'react-router-dom'
import BaseButton, { BaseButtonProps } from './BaseButton'

type Props = { to: string } & BaseButtonProps

function BaseLinkButton({ to, children, ...others }: Props) {
  return (
    <Link to={to}>
      <BaseButton {...others}>{children}</BaseButton>
    </Link>
  )
}

export default BaseLinkButton
