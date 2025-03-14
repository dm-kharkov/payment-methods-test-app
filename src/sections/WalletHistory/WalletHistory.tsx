'use client'

import type { ReactElement } from 'react'
import type { PaymentHistoryDataProps } from '@/lib/fetchPaymentHistory'

import React from 'react'

import Skeleton from '@/components/Skeleton'
import ContentSection from '@/sections/Content'

import { fetchPaymentHistory } from '@/lib/fetchPaymentHistory'
import { usePaymentHistoryStore } from '@/store/paymentHistoryStore'

import HistoryItem from './HistoryListItem'

const WalletHistorySection = (): ReactElement => {
  const setPaymentHistory = usePaymentHistoryStore((state) => state.setPaymentHistory)
  const paymentHistory = usePaymentHistoryStore((state) => state.paymentHistory)

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPaymentHistory()

        setPaymentHistory(data.paymentMethods as PaymentHistoryDataProps[])
      } catch (error) {
        console.error('Error fetchPaymentMethods:', error)
      }
    }

    loadData()
  }, [setPaymentHistory])

  return (
    <ContentSection title='billing history.'>
      <ul className='flex flex-col gap-[8px]'>
        {paymentHistory?.length === 0
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
            paymentHistory?.map((paymentHistoryItem) => (
              <li key={paymentHistoryItem.id}>
                <HistoryItem {...paymentHistoryItem} />
              </li>
            ))
          )}
      </ul>
    </ContentSection>
  )
}

export default WalletHistorySection