export type PaymentHistoryDataProps = {
  id: number
  date: string
  type: string
  amount: string
}

type ResponseDataProps = {
  paymentMethods: PaymentHistoryDataProps[]
}

export const fetchPaymentHistory = async (): Promise<ResponseDataProps> => {
  // Emulate response to Backend with delay 4 sec
  await new Promise(resolve => setTimeout(resolve, 4000))

  const response = {
    paymentMethods: [
      {
        id: 1,
        date: '02/11/2025',
        type: 'appointment',
        amount: '$68.00'
      },
      {
        id: 2,
        date: '02/11/2025',
        type: 'walk-in',
        amount: '$43.00'
      },
      {
        id: 3,
        date: '12/18/2024',
        type: 'appointment',
        amount: '$120.50'
      },
      {
        id: 4,
        date: '11/27/2024',
        type: 'appointment',
        amount: '$64.00'
      }
    ]
  }
 
  return response
}