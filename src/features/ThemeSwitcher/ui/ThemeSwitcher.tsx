import { cn } from 'shared/lib/helpers'
import { useTheme } from 'shared/lib/hooks'
import { Button } from 'shared/ui'

import Moon from 'shared/assets/icons/moon.svg'
import Sun from 'shared/assets/icons/sun.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      variant='clear'
      className={cn([className])}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
