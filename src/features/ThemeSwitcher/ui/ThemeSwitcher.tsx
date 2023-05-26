import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers'
import styles from './ThemeSwitcher.module.scss'
import { useTheme } from 'shared/lib/hooks'
import { Theme } from 'app/providers/ThemeProvider'

import Moon from 'shared/assets/icons/moon.svg'
import Sun from 'shared/assets/icons/sun.svg'
import { Button } from 'shared/ui'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      variant='clear'
      className={classNames([styles.ThemeSwitcher, className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <Moon /> : <Sun />}
    </Button>
  )
}
