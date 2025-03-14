'use client'

import type { ReactElement, ReactNode } from 'react'

import React from 'react'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@/constants/theme'
import MainLayout from '@/layouts/Main'

import './globals.scss'

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
