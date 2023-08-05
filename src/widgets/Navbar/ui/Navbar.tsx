import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from 'shared/lib/helpers'

import { Button, Modal } from 'shared/ui'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const onModalToggle = useCallback(() => {
    setIsAuthOpen(prev => !prev)
  }, [])

  return (
    <header className={cn([styles.Navbar, className])}>
      <h2>{t('Блог')}</h2>
      <nav className={styles.links}>
        <Button onClick={onModalToggle}>{t('Войти')}</Button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal onClose={onModalToggle} isOpen={isAuthOpen}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nisi?
        </Modal>
      </nav>
    </header>
  )
}
