import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'app/providers/Router'

const AppRouter: FC = () => {
  return (
    <div className='page-content'>
      <Suspense fallback={<h2>Loading...</h2>}>
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
