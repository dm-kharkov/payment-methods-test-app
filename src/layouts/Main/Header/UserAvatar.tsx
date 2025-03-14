'use client'

import type { ReactElement } from 'react'
import type { UserDataProps } from '@/store/userStore'

import React from 'react'

import AvatarComponent from '@/components/Avatar'
import Skeleton from '@/components/Skeleton'

import { getUserFullName } from '@/lib/user'

const AvatarStyles = {
  width: 40,
  height: 40
}

const MainLayoutHeaderUserAvatar = ({ user }: { user: UserDataProps | null }): ReactElement => {
  if (!user) {
    return (
      <Skeleton
        variant='circular'
        sx={{ ...AvatarStyles, bgcolor: 'lightgray' }}
      />
    )
  }

  const fullName = getUserFullName(user)

  return (
    <AvatarComponent
      alt={fullName}
      src={user.avatar}
      sx={AvatarStyles}
    />
  )
}

export default MainLayoutHeaderUserAvatar