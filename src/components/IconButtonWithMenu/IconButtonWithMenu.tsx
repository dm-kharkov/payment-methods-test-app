'use client'

import type { MouseEvent, ReactElement } from 'react'

import type { IconButtonProps } from '@mui/material/IconButton'

import React from 'react'

import Button from '@/components/Button'
import Menu from '@/components/Menu'
import MenuItem from '@/components/MenuItem'

type IconButtonWithMenuProps = IconButtonProps & {
  ariaControls: string
  children: ReactElement
  list: string[],
  onItemClick?: (item: string) => void
}

const IconButtonWithMenu = ({
  ariaControls,
  children,
  list,
  onItemClick,
  ...restProps
}: IconButtonWithMenuProps): ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (item: string): void => {
    handleClose()
    onItemClick?.(item)
  }

  return (
    <>
      <Button.Icon
        {...restProps}
        aria-controls={ariaControls}
        aria-haspopup='true'
        onClick={handleMenu}
      >
        {children}
      </Button.Icon>

      <Menu
        id={ariaControls}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {list.map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default IconButtonWithMenu