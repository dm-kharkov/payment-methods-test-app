import type { ReactElement } from 'react'
import type { PaymentMethodDataProps } from '@/lib/fetchPaymentMethods'

import React from 'react'
import Image from 'next/image'

import { notifySuccess, notifyError } from '@/lib/toast'

import Box from '@/components/Box'
import IconButtonWithMenu from '@/components/IconButtonWithMenu'
import Typography from '@/components/Typography'

import { CheckMarkIcon } from '@/icons/CheckMark'
import { DotsIcon } from '@/icons/Dots'

import { usePaymentMethodStore } from '@/store/paymentMethodStore'

const cardTypeIcon = {
  Visa: '/images/visa.png',
  Mastercard: '/images/mastercard.png'
}

const CardItem = ({
  id,
  type,
  last4,
  expiry
}: PaymentMethodDataProps): ReactElement => {
  const isMastercard = type === 'Mastercard'

  const setPaymentMethods = usePaymentMethodStore((state) => state.setPaymentMethods)
  const paymentMethods = usePaymentMethodStore((state) => state.paymentMethods)

  const handleRemove = (id: number) => {
    if (paymentMethods && paymentMethods.length > 1) {
      setPaymentMethods(paymentMethods.filter((item) => item.id !== id))
      notifySuccess('Card removed successfully')
    } else {
      notifyError('You must have at least one card')
    }
  }

  return (
    <Box className='w-full flex items-center justify-between bg-[var(--gray-light)] rounded-[12px] p-[24px]'>
      <Box className='flex items-center gap-2'>
        <Image
          src={cardTypeIcon[type as keyof typeof cardTypeIcon]}
          alt={`${type} card ${last4}`}
          width={30}
          height={24}
        />

        <Typography
          variant='subtitle2'
          sx={{ fontWeight: 600 }}
        >
          {`${type} (**${last4})`}
        </Typography>

        <Typography>
          {expiry}
        </Typography>

        {isMastercard && <CheckMarkIcon />}
      </Box>

      <IconButtonWithMenu
        aria-label='card item actions'
        ariaControls='card-item-menu'
        list={['Delete']}
        onItemClick={() => handleRemove(id)}
      >
        <DotsIcon />
      </IconButtonWithMenu>
    </Box>
  )
}

export default CardItem
