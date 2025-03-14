import type { ElementType } from 'react'
import React from 'react'
import NextLink from 'next/link'

type LinkPropsType = {
  href?: string;
  to?: string;
  rel?: string;
  target?: string;
  component?: ElementType;
};

export default function withLinkOnButton<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & LinkPropsType> {
  const WrappedComponent: React.FC<P & LinkPropsType> = (props) => {
    const { to, href, ...restProps } = props

    const ComponentProps: P & LinkPropsType = {
      ...restProps
    } as P

    if (href) {
      ComponentProps.href = href
      ComponentProps.rel = 'nofollow noopener noreferrer'
      ComponentProps.target = '_blank'
    }

    if (to) {
      ComponentProps.to = to
      ComponentProps.component = NextLink
    }

    return <Component {...ComponentProps} />
  }

  WrappedComponent.displayName = `withLinkOnButton(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}
