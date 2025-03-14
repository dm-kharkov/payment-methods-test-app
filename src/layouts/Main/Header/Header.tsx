import type { ReactElement } from 'react'

import React from 'react'

import AppBar from '@/components/AppBar'
import Button from '@/components/Button'
import Toolbar from '@/components/Toolbar'

import { ArrowLeftIcon } from '@/icons/ArrowLeft'

import UserMenu from './UserMenu'

const MainLayoutHeader = (): ReactElement => {
  const handleButtonClick = () => {
    alert('back to malik')
  }

  return (
    <AppBar position='sticky'>
      <Toolbar className='flex justify-between'>
        <Button
          variant='text'
          onClick={handleButtonClick}
          startIcon={<ArrowLeftIcon />}
          disableRipple
        >
          back to malik
        </Button>

        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default MainLayoutHeader