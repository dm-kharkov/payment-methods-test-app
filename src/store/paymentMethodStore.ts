import { create } from 'zustand'

import { PaymentMethodDataProps } from '@/lib/fetchPaymentMethods'

type PaymentMethodStoreState = {
  paymentMethods: PaymentMethodDataProps[] | null
  setPaymentMethods: (methods: PaymentMethodDataProps[]) => void
}

export const usePaymentMethodStore = create<PaymentMethodStoreState>((set) => ({
  paymentMethods: [],
  setPaymentMethods: (methods) => set({ paymentMethods: methods })
}))