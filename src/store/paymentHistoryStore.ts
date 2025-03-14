import { create } from 'zustand'

import { PaymentHistoryDataProps } from '@/lib/fetchPaymentHistory'

type PaymentHistoryStoreState = {
  paymentHistory: PaymentHistoryDataProps[] | null
  setPaymentHistory: (methods: PaymentHistoryDataProps[]) => void
}

export const usePaymentHistoryStore = create<PaymentHistoryStoreState>((set) => ({
  paymentHistory: [],
  setPaymentHistory: (history) => set({ paymentHistory: history })
}))