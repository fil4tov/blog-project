import { type FC } from 'react'
import { cls } from 'shared/lib/helpers'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggleLanguage}
      className={cls([className])}
      variant='clear'
    >
      {short ? t('Язык короткий') : t('Язык длинный')}
    </Button>
  )
}
