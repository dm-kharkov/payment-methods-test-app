import { z } from 'zod'

export const ADD_PAYMENT_CARD_SCHEMA = z.object({
  cardNumber: z.string()
    .min(16, 'Card number must be exactly 16 digits')
    .max(16, 'Card number must be exactly 16 digits')
    .regex(/^[0-9]+$/, 'Card number must contain only digits'),
  
  month: z.string()
    .min(2, 'Month must be exactly 2 digits')
    .max(2, 'Month must be exactly 2 digits')
    .regex(/^[0-9]+$/, 'Month must contain only digits')
    .refine((val: string) => {
      const month = parseInt(val, 10)
      return month >= 1 && month <= 12
    }, 'Month must be between 01 and 12'),
  
  year: z.string()
    .min(2, 'Year must be exactly 2 digits')
    .max(2, 'Year must be exactly 2 digits')
    .regex(/^[0-9]+$/, 'Year must contain only digits'),
  
  cvv: z.string()
    .min(3, 'CVV must be exactly 3 digits')
    .max(3, 'CVV must be exactly 3 digits')
    .regex(/^[0-9]+$/, 'CVV must contain only digits')
})

export type PaymentCardFormValues = z.infer<typeof ADD_PAYMENT_CARD_SCHEMA>
