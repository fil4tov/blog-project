import { useState } from 'react'
import { cn } from 'shared/lib/helpers'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { AppLink, Button } from 'shared/ui'
import { LangSwitcher } from 'features/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { appRoutesPaths } from 'shared/config'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const { t } = useTranslation()

  const toggleCollapse = (): void => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={cn([styles.Sidebar, className], {
        [styles.collapsed]: isCollapsed
      })}
    >
      <nav className={styles.links}>
        <AppLink className={styles.link} to={appRoutesPaths.main}>
          <HomeIcon className={styles.icon}/>
          <span>{t('Главная')}</span>
        </AppLink>
        <AppLink className={styles.link} to={appRoutesPaths.about}>
          <AboutIcon className={styles.icon}/>
          <span>{t('О нас')}</span>
        </AppLink>
      </nav>

      <div className={styles.switchers}>
        <Button
          className={styles.collapseBtn}
          data-testid='sidebar-toggle'
          onClick={toggleCollapse}
          round
          size='l'
          variant='filled'
        >
          {isCollapsed ? '>' : '<'}
        </Button>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </div>
    </div>
  )
}
