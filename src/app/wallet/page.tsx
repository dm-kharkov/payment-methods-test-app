import type { Metadata } from 'next'

import type { ReactElement } from 'react'

import WalletCards from '@/sections/WalletCards'
import WalletHistory from '@/sections/WalletHistory'

export const metadata: Metadata = {
  title: 'Wallet Page',
  description: 'Manage Payment Methods'
}

const WalletPage = (): ReactElement => {
  return (
    <section className='w-full flex flex-col gap-[120px] pb-[80px]'>
      <WalletCards />
      <WalletHistory />
    </section>
  )
}

export default WalletPage