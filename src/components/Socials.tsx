import React from 'react'
import { ReactComponent as TelegramIcon } from 'src/assets/icons/telegram-icon.svg'
import { ReactComponent as TwitterIcon } from 'src/assets/icons/twitter-icon.svg'
import { ReactComponent as InstagramIcon } from 'src/assets/icons/instagram-icon.svg'
import { ReactComponent as GithubIcon } from 'src/assets/icons/github-icon.svg'
import { ReactComponent as DiscordIcon } from 'src/assets/icons/discord-icon.svg'
import { BaseProps } from 'src/types'

type Props = {
  size?: number
} & BaseProps

function Socials({ size = 30, className, ...others }: Props) {
  return (
    <div className={`grid grid-flow-col auto-cols-min gap-[10px] ${className}`} {...others}>
      <TelegramIcon style={{ width: size, height: size }} />
      <TwitterIcon style={{ width: size, height: size }} />
      <InstagramIcon style={{ width: size, height: size }} />
      <GithubIcon style={{ width: size, height: size }} />
      <DiscordIcon style={{ width: size, height: size }} />
    </div>
  )
}

export default Socials
