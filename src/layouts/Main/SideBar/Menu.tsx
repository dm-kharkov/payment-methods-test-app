'use client'

import type { ReactElement } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import NAV_LIST from '@/constants/nav'

const MainLayoutSideBarMenu = (): ReactElement => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className='flex flex-col gap-[48px]'>
        {NAV_LIST.map((item) => {
          const label = item.replaceAll('/', '')
          const isActive = pathname === item

          const classes = isActive
            ? 'text-[var(--primary-text)]'
            : 'text-[var(--gray-text)]'

          return (
            <li key={item}>
              <Link
                className={classes}
                href={item}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainLayoutSideBarMenu