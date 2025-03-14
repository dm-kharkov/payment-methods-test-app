import type { ReactElement } from 'react'

import React from 'react'

import Box from '@/components/Box'
import Button from '@/components/Button'
import Dialog from '@/components/Dialog'
import Typography from '@/components/Typography'

import CreatePaymentCardForm from '@/forms/CreateCard'

import { PlusIcon } from '@/icons/Plus'
import { CrossIcon } from '@/icons/Cross'

const AddCard = (): ReactElement => {
  const [open, setOpen] = React.useState(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (
    <Box mt='26px'>
      <Button
        variant='text'
        startIcon={<PlusIcon />}
        onClick={handleOpenDialog}

      >
        add new card
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseDialog}
        scroll='body'
      >
        <Box className='fixed top-0 right-0'>
          <Button.Icon onClick={handleCloseDialog}>
            <CrossIcon />
          </Button.Icon>
        </Box>

        <Box className='w-[630px] mx-auto mt-[140px] text-center py-[40px]'>
          <Typography variant='h3' mb='44px'>
            adding your card
          </Typography>

          <Typography variant='body1' mb='80px'>
            Securely enter your card details to complete your booking.
            Your card will only be charged after your appointment.
          </Typography>

          <CreatePaymentCardForm onClose={handleCloseDialog} />
        </Box>
      </Dialog>
    </Box>
  )
}

export default AddCard
