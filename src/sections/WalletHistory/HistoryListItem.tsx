import type { ReactElement } from 'react'
import type { PaymentHistoryDataProps } from '@/lib/fetchPaymentHistory'

import React from 'react'

import Box from '@/components/Box'
import Button from '@/components/Button'
import Typography from '@/components/Typography'

const HistoryItem = ({
  id,
  date,
  type,
  amount
}: PaymentHistoryDataProps): ReactElement => {
  const handleDetailsClick = () => {
    alert(`go to rote: billing-history-details/${id}`)
  }

  return (
    <Box className='flex items-center justify-between py-[40px]'>
      <Box className='flex gap-[24px]'>
        <Typography variant='subtitle1'>
          {date}
        </Typography>

        <Typography variant='subtitle2'>
          {type}
        </Typography>
      </Box>

      <Box className='flex gap-[65px]'>
        <Typography
          variant='subtitle1'
          sx={{ fontWeight: 600 }}
        >
          {amount}
        </Typography>

        <Button
          variant='text'
          onClick={handleDetailsClick}
        >
          <Typography
            className='underline text-[var(--gray-border)]'
            variant='body2'
          >
            details
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default HistoryItem
