import { create } from 'zustand'

export type UserDataProps = {
  firstName: string
  lastName: string
  avatar: string
  bookings: number
  totalSpent: string
}

type UserStoreState = {
  user: UserDataProps | null
  setUser: (user: UserDataProps) => void
}

export const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}))