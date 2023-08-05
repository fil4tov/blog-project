import { cn } from 'shared/lib/helpers'
import { Loader } from 'shared/ui'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn([styles.PageLoader, className])}>
      <Loader/>
    </div>
  )
}
