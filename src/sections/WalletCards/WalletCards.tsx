'use client'

import type { ReactElement } from 'react'
import type { PaymentMethodDataProps } from '@/lib/fetchPaymentMethods'

import React from 'react'

import ContentSection from '@/sections/Content'
import Skeleton from '@/components/Skeleton'
import Typography from '@/components/Typography'

import { fetchPaymentMethods } from '@/lib/fetchPaymentMethods'
import { usePaymentMethodStore } from '@/store/paymentMethodStore'

import CardItem from './CardItem'
import AddCard from './AddCard'

const WalletCardsSection = (): ReactElement => {
  const setPaymentMethods = usePaymentMethodStore((state) => state.setPaymentMethods)
  const paymentMethods = usePaymentMethodStore((state) => state.paymentMethods)

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPaymentMethods()

        setPaymentMethods(data.paymentMethods as PaymentMethodDataProps[])
      } catch (error) {
        console.error('Error fetchPaymentMethods:', error)
      }
    }

    loadData()
  }, [setPaymentMethods])

  return (
    <ContentSection title='payment methods.'>
      <Typography
        variant='caption'
        mb='20px'
        sx={{ display: 'inline-block' }}
      >
        saved cards
      </Typography>

      <ul className='flex flex-col gap-[8px]'>
        {paymentMethods?.length === 0
          ? (
            Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>
                <Skeleton

                  variant='rounded'
                  width='100%'
                  height='72px'
                  sx={{ bgcolor: 'lightgray' }}
                />
              </li>
            ))
          ) : (
            paymentMethods?.map((paymentMethod) => (
              <li key={paymentMethod.id}>
                <CardItem {...paymentMethod} />
              </li>
            ))
          )}
      </ul>

      <AddCard />
    </ContentSection>
  )
}

export default WalletCardsSection