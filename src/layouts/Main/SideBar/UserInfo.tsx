'use client'

import type { ReactElement } from 'react'

import React from 'react'

import Avatar from '@/components/Avatar'
import Box from '@/components/Box'
import Divider from '@/components/Devider'
import Skeleton from '@/components/Skeleton'
import Typography from '@/components/Typography'

import { getUserFullName } from '@/lib/user'
import { useUserStore } from '@/store/userStore'

const AvatarStyles = {
  width: 120,
  height: 120,
  marginBottom: '36px'
}

const SkeletonStyles = { bgcolor: 'lightgray' }

const SkeletonUserInfo = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Skeleton
        variant='circular'
        sx={{ ...AvatarStyles, ...SkeletonStyles }}
      />

      <Skeleton
        variant='text'
        width={220}
        height={34}
        sx={{ ...SkeletonStyles, marginBottom: '46px' }}
      />

      <Skeleton
        variant='rounded'
        width={220}
        height={64}
        sx={SkeletonStyles}
      />
    </div>
  )
}

const MainLayoutSideBarUserInfo = ({ className }: { className: string }): ReactElement => {
  const user = useUserStore((state) => state.user)

  if (!user) {
    return <SkeletonUserInfo className={className} />
  }

  const fullName = getUserFullName(user)

  return (
    <Box className={className}>
      <Avatar
        alt={fullName}
        src={user.avatar}
        sx={AvatarStyles}
      />

      <Typography variant='h1' mb='46px'>
        {fullName}
      </Typography>

      <ul className='flex items-center justify-between'>
        <li>
          <Typography variant='h4' mb='15px'>
            {user.bookings}
          </Typography>

          <Typography variant='body2'>
            bookings
          </Typography>
        </li>

        <li>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ minHeight: 26 }}
          />
        </li>

        <li>
          <Typography variant='h4' mb='15px'>
            {user.totalSpent}
          </Typography>

          <Typography variant='body2'>
            total spent
          </Typography>
        </li>
      </ul>
    </Box>
  )
}

export default MainLayoutSideBarUserInfo