import { appRoutesNames, appRoutesPaths } from 'shared/config/'
import { type RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export const routerConfig: Record<appRoutesNames, RouteProps> = {
  [appRoutesNames.MAIN]: {
    path: appRoutesPaths[appRoutesNames.MAIN],
    element: <MainPage/>
  },
  [appRoutesNames.ABOUT]: {
    path: appRoutesPaths[appRoutesNames.ABOUT],
    element: <AboutPage/>
  },
  [appRoutesNames.NOT_FOUND]: {
    path: appRoutesPaths[appRoutesNames.NOT_FOUND],
    element: <NotFoundPage/>
  }
}
