import type { ReactElement, ReactNode } from 'react'

import React from 'react'

import Typography from '@/components/Typography'

const ContentSection = (
  {
    children,
    title
  }: {
    children: ReactNode,
    title: string
  }): ReactElement => {
  return (
    <section className='w-[min(760px,_100%)] mx-auto'>
      <Typography variant='h2' mb='40px'>
        {title}
      </Typography>

      {children}
    </section>
  )
}

export default ContentSection