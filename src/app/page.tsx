import type { ReactNode } from 'react'

import { redirect } from 'next/navigation'

import * as ROUTES from '@/constants/routes'

const HomePage = (): ReactNode => {
  redirect(ROUTES.WALLET)
}

export default HomePage
