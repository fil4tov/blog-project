import { cn } from 'shared/lib/helpers'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggleLanguage}
      className={cn([className])}
      variant='clear'
    >
      {short ? t('Язык короткий') : t('Язык длинный')}
    </Button>
  )
}
