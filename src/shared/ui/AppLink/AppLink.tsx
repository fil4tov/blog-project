import { Link, type LinkProps } from 'react-router-dom'
import { cn } from 'shared/lib/helpers'
import styles from './AppLink.module.scss'

type Color = 'primary' | 'secondary'
interface AppLinkProps extends LinkProps {
  className?: string
  color?: Color
}

export const AppLink = (props: AppLinkProps) => {
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
      className={cn([className, styles[color]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
