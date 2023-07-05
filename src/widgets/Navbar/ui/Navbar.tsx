import { type FC } from 'react'

import { cls } from 'shared/lib/helpers'
import { AppLink } from 'shared/ui'
import { useTranslation } from 'react-i18next'

import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <header className={cls([styles.Navbar, className])}>
      <h2>{t('Блог')}</h2>
      <nav className={styles.links}>

      </nav>
    </header>
  )
}
