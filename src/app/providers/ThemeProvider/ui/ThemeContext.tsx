import { createContext, type ReactNode, useLayoutEffect, useMemo, useState } from 'react'

export type Theme = 'dark' | 'light'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'dark'

interface ThemeProviderProps {
  children?: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const store = useMemo(() => ({ theme, setTheme }), [theme])

  useLayoutEffect(() => {
    const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
    if (!storageTheme) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, defaultTheme)
      document.body.classList.add(defaultTheme)
    } else {
      document.body.classList.add(storageTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}
