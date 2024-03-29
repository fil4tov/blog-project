import {
  LOCAL_STORAGE_THEME_KEY,
  type Theme,
  ThemeContext
} from 'app/providers/ThemeProvider/ui/ThemeContext'
import { useContext } from 'react'

interface UseThemeReturn {
  theme: Theme
  toggleTheme: () => void
}
export function useTheme (): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    document.body.removeAttribute('class')
    document.body.classList.add(newTheme)
  }

  return { theme, toggleTheme }
}
