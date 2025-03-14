
type UserDataProps = {
  firstName: string
  lastName: string
  avatar: string
  bookings: number
  totalSpent: string
}

type ResponseDataProps = {
  user: UserDataProps
}

export const fetchUser = async (): Promise<ResponseDataProps> => {
   // Emulate response to Backend with delay 2 sec
  await new Promise(resolve => setTimeout(resolve, 2000))

  const response = {
    user: {
      firstName: 'James', 
      lastName: 'Carter',
      avatar: '/images/userAvatar.png',
      bookings: 6,
      totalSpent: '$200+'
    }
  }
 
  return response
}