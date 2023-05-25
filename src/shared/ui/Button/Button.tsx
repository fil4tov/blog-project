import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/helpers";
import styles from './Button.module.scss'

type Variant = 'outlined' | 'clear' | 'filled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: Variant
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = 'outlined',
    ...otherProps
  } = props
  return (
    <button
      {...otherProps}
      className={classNames([styles.Button, className, styles[variant]])}
    >

    </button>
  );
};