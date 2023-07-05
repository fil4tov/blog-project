import { type FC } from 'react'
import { cls } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={cls([className])}>
      <h1>{t('Страница не найдена')}</h1>
    </div>
  )
}

export default NotFoundPage
