import { type FC } from 'react'
import { cls } from 'shared/lib/helpers'
import styles from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <span className={cls([styles.Loader, className])}/>
  )
}
