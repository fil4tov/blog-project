import { cn } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn([className])}>
      <h1>{t('Страница не найдена')}</h1>
    </div>
  )
}

export default NotFoundPage
