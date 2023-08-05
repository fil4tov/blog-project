import { useTranslation } from 'react-i18next'
import { cn } from 'shared/lib/helpers'
import styles from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className={cn([styles.PageError, className])}>
      <h1>{t('Ошибка приложения')}</h1>
      <button
        className={styles.button}
        onClick={reload}
        type='button'
      >
        {t('Перезагрузить приложение')}
      </button>
    </div>
  )
}
