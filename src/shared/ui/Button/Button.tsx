import { type ButtonHTMLAttributes, type FC } from 'react'
import { cls } from 'shared/lib/helpers'
import styles from './Button.module.scss'

type Variant = 'outlined' | 'clear' | 'filled'
type Size = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: Variant
  size?: Size
  round?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = 'outlined',
    round,
    size = 'm',
    children,
    ...otherProps
  } = props

  const classes = [
    styles.Button,
    className,
    styles[variant],
    styles[size]
  ]

  const mods = {
    [styles.round]: round
  }

  return (
    <button
      type='button'
      className={cls(classes, mods)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
