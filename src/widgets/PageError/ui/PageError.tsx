import { type FC } from 'react'
import { cls } from 'shared/lib/helpers'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className={cls([styles.PageError, className])}>
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
