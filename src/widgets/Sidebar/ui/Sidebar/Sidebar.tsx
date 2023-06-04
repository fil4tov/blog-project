import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Button } from 'shared/ui'
import { LangSwitcher } from 'features/LangSwitcher'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = (): void => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames([styles.Sidebar, className], {
        [styles.collapsed]: isCollapsed
      })}
    >
      <div className={styles.switchers}>
        <Button
          data-testid='sidebar-toggle'
          onClick={toggleCollapse}
        >
          {isCollapsed ? 'Open' : 'Close'}
        </Button>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
