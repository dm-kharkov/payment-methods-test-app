'use client'

import type { ReactElement } from 'react'

import React from 'react'

import { usePathname } from 'next/navigation'

import Typography from '@/components/Typography'

const LayoutPage = (): ReactElement => {
  const pathname = usePathname()

  const title = pathname.replaceAll('/', '').toUpperCase()

  return (
    <section className='w-full h-full flex justify-center'>
      <Typography variant='h1' mt={10}>
        {`${title} Page`}
      </Typography>
    </section>
  )
}

export default LayoutPage