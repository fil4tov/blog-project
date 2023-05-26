import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers'
import { useTheme } from 'shared/lib/hooks'
import { Button } from 'shared/ui'
import { Theme } from 'app/providers/ThemeProvider'

import Moon from 'shared/assets/icons/moon.svg'
import Sun from 'shared/assets/icons/sun.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      variant='clear'
      className={classNames([className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <Moon /> : <Sun />}
    </Button>
  )
}
