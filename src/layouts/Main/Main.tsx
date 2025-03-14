'use client'

import type { ReactElement, ReactNode } from 'react'

import React from 'react'
import { Toaster } from 'sonner'

import Box from '@/components/Box'

import { fetchUser } from '@/lib/fetchUser'
import { useUserStore } from '@/store/userStore'

import Header from './Header'
import SideBar from './SideBar'

const MainLayout = ({ children }: { children: ReactNode }): ReactElement => {
  const setUser = useUserStore((state) => state.setUser)

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUser()

        setUser(data.user)
      } catch (error) {
        console.error('Error fetchData:', error)
      }
    }

    loadData()
  }, [setUser])

  return (
    <Box
      className='flex'
      component='section'
    >
      <SideBar />

      <Box className='h-screen flex-1 overflow-y-auto bg-[var(--gray-background)]'>
        <Header />

        {children}
      </Box>

      <Toaster theme='light' richColors />
    </Box>
  )
}

export default MainLayout
