import type { ReactElement } from 'react'
import type { PaymentCardFormValues } from '@/constants/schemas'

import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'

import Box from '@/components/Box'
import Button from '@/components/Button'
import FormProvider from '@/components/Form/Provider'

import NumberInput from '@/fields/NumberInput'

import { createPaymentCard } from '@/actions/card'
import { ADD_PAYMENT_CARD_SCHEMA } from '@/constants/schemas'

import useForm from '@/hooks/useForm'
import { notifySuccess, notifyError } from '@/lib/toast'

const defaultValues: PaymentCardFormValues = {
  cardNumber: '',
  month: '',
  year: '',
  cvv: ''
}

const CreatePaymentCardForm = ({ onClose }: { onClose: () => void }): ReactElement => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const methods = useForm<PaymentCardFormValues>({
    resolver: zodResolver(ADD_PAYMENT_CARD_SCHEMA),
    defaultValues,
    mode: 'onChange'
  })

  const onSubmit = async (data: PaymentCardFormValues) => {
    try {
      setIsSubmitting(true)
      createPaymentCard(data)

      notifySuccess('New Card has been created')

      onClose()

    } catch (error) {
      notifyError(error instanceof Error
        ? error.message
        : 'Failed to create card'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        className='w-full flex flex-col gap-[40px]'
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        <NumberInput
          name='cardNumber'
          label='Card Number'
          maxLength={16}
          helperText='Enter 16 digits card number'
        />

        <Box className='flex gap-[16px] mb-[40px]'>
          <NumberInput
            name='month'
            label='Expiration month (MM)'
            maxLength={2}
            helperText='Enter month (01-12)'
          />

          <NumberInput
            name='year'
            label='Expiration year (YY)'
            maxLength={2}
            helperText='Enter last 2 digits of year'
          />

          <NumberInput
            name='cvv'
            label='CVV'
            maxLength={3}
            isPassword={true}
            helperText='Enter 3 digits CVV code'
          />
        </Box>

        <Button
          type='submit'
          variant='contained'
          disabled={isSubmitting}
          sx={{
            width: 'fit-content',
            margin: '0 auto'
          }}
        >
          {isSubmitting ? 'submitting...' : 'done'}
        </Button>
      </form>
    </FormProvider>
  )
}

export default CreatePaymentCardForm
