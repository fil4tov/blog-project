import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers'
import styles from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

type Color = 'primary' | 'secondary'
interface AppLinkProps extends LinkProps {
  className?: string
  color?: Color
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    color = 'primary',
    ...otherProps
  } = props
  return (
    <Link
      to={to}
      className={classNames([className, styles[color]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
