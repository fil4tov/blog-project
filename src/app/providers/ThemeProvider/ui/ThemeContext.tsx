import React, { createContext, type FC, type ReactNode, useMemo, useState } from 'react'

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

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const store = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}
