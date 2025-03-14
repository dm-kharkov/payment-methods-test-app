import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'

import MuiButton from '@mui/material/Button'

import ButtonIcon from '@/components/Button/Icon'
import ButtonGroup from '@/components/Button/Group'
import ButtonBase from '@/components/Button/Base'

import withLinkOnButton from '@/hoc/withLinkOnButton'

export type LinkPropsType = {
  href?: string
  to?: string
  rel?: string
  target?: string
  component?: React.ElementType
}

interface ButtonTypes extends MuiButtonProps, LinkPropsType { }

type ButtonType = typeof MuiButton & {
  Base: typeof ButtonBase
  Icon: typeof ButtonIcon
  Group: typeof ButtonGroup
}

type EnhancedButtonType = React.FC<ButtonTypes> & {
  Base: typeof ButtonBase
  Icon: typeof ButtonIcon
  Group: typeof ButtonGroup
}

const Button: ButtonType = withLinkOnButton(MuiButton) as ButtonType

Button.Base = ButtonBase
Button.Icon = ButtonIcon
Button.Group = ButtonGroup

export type { ButtonTypes }
export default Button as EnhancedButtonType
