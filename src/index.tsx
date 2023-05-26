import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n'
import { Suspense } from 'react'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App/>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
