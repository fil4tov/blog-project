import { type FC } from 'react'

import { useTheme } from 'shared/lib/hooks'
import { classNames } from 'shared/lib/helpers'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import './styles/index.scss'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames(['app', theme])}>
      <Navbar/>
      <main>
        <Sidebar/>
        <AppRouter/>
      </main>
    </div>
  )
}

export default App
