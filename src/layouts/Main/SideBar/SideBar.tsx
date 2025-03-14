import type { ReactElement } from 'react'

import React from 'react'

import Box from '@/components/Box'
import LogoIcon from '@/icons/Logo'

import MainMenu from './Menu'
import UserInfo from './UserInfo'

const MainLayoutSideBar = (): ReactElement => {
  return (
    <Box
      component='aside'
      className='w-[380px] h-screen overflow-y-auto shrink-0 flex flex-col px-[80px] py-[30px] bg-[#0F0F0F] text-white'
    >
      <LogoIcon className='shrink-0 mb-[55px]' />

      <UserInfo className='mb-[100px]' />

      <MainMenu />
    </Box>
  )
}

export default MainLayoutSideBar
