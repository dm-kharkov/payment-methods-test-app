export const getUserFullName = (user: { firstName: string, lastName: string }): string => {
  if (!user) {
    return 'N/A'
  }

  const { firstName, lastName } = user

  return `${firstName} ${lastName}`
}
