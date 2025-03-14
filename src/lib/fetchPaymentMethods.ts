export type PaymentMethodDataProps = {
  id: number
  type: string
  last4: string
  expiry: string
}

type ResponseDataProps = {
  paymentMethods: PaymentMethodDataProps[]
}

export const fetchPaymentMethods = async (): Promise<ResponseDataProps> => {
  // Emulate response to Backend with delay 3 sec
  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = {
    paymentMethods: [
      {
        id: 1,
        type: 'Visa',
        last4: '4242',
        expiry: '08/26'
      },
      {
        id: 2,
        type: 'Mastercard',
        last4: '1234',
        expiry: '03/25'
      }
    ]
  }
 
  return response
}