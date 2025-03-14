import type { ReactElement } from 'react'

import React from 'react'

const SkeletonCardItem = (): ReactElement => {
  return (
    <Box className='w-full'>
      <Box className='flex items-center gap-2 bg-[var(--gray-light)] rounded-[12px] p-[24px]'>
        <Image
          src={cardTypeIcon[type]}
          alt={`${type} card ${last4}`}
          width={30}
          height={24}
        />

        <Typography>
          {`${type} (**${last4})`}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardItem
