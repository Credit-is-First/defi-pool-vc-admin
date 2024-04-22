import React from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

type Props = { underline?: boolean; external?: boolean; to: string } & Omit<LinkProps, 'to'>

function BaseLink({ to, className, underline, children, external, ...others }: Props) {
  const { pathname } = useLocation()

  if (external) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noreferrer'
        className={`hover:text-accent ${underline ? 'underline' : ''} ${className}`}
        {...others}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={to}
      className={`hover:text-accent ${pathname === to ? 'text-accent' : ''} ${underline ? 'underline' : ''} ${className}`}
      {...others}
    >
      {children}
    </Link>
  )
}

export default BaseLink
