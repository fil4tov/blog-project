import React, { createContext, type FC, useMemo, useState } from 'react'

export enum Theme {
  // eslint-disable-next-line no-unused-vars
  LIGHT = 'light',
  // eslint-disable-next-line no-unused-vars
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const store = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}
