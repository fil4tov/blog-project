import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames([className])}
      variant='clear'
    >
      {t('Язык')}
    </Button>
  )
}
