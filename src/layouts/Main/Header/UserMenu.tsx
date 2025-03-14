'use client'

import type { ReactElement } from 'react'

import React from 'react'

import Box from '@/components/Box'
import IconButtonWithMenu from '@/components/IconButtonWithMenu'

import { ArrowDownIcon } from '@/icons/ArrowDown'
import { NotificationIcon } from '@/icons/Notification'

import { useUserStore } from '@/store/userStore'

import UserAvatar from './UserAvatar'

const settings = ['Profile', 'Logout']

const MainLayoutHeaderUserMenu = (): ReactElement => {
  const user = useUserStore((state) => state.user)

  const handleButtonClick = (item: string): void => {
    alert(`${item} item clicked`)
  }

  return (
    <Box className='flex items-center gap-x-[16px]'>
      <NotificationIcon />

      <IconButtonWithMenu
        className='flex items-center gap-x-[14px]'
        aria-label='user menu actions'
        ariaControls='menu-appbar'
        list={settings}
        disabled={!user}
        onItemClick={handleButtonClick}
      >
        <>
          <UserAvatar user={user} />
          <ArrowDownIcon />
        </>
      </IconButtonWithMenu>
    </Box>
  )
}

export default MainLayoutHeaderUserMenu