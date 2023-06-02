import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'app/providers/Router'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: FC = () => {
  return (
    <div className='page-content'>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {Object.values(routerConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path}/>
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default AppRouter
