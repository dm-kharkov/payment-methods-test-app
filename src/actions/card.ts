import type { PaymentCardFormValues } from '@/constants/schemas'
import type { PaymentMethodDataProps } from '@/lib/fetchPaymentMethods'

import { usePaymentMethodStore } from '@/store/paymentMethodStore'

const generateRandomId = (): number => {
  return Math.floor(Math.random() * 10000)
}

interface CardActionResult {
  type: string
  payload: PaymentMethodDataProps
}

export function createPaymentCard(formData: PaymentCardFormValues): CardActionResult {
  const paymentMethods = usePaymentMethodStore.getState().paymentMethods || []
  
  const newCard: PaymentMethodDataProps = {
    id: generateRandomId(),
    type: 'Mastercard',
    last4: formData.cardNumber.slice(-4),
    expiry: `${formData.month}/${formData.year}`
  }
  
  usePaymentMethodStore.setState({
    paymentMethods: [...paymentMethods, newCard]
  })
  
  return {
    type: 'PAYMENTCARD_CREATE',
    payload: newCard
  }
}
