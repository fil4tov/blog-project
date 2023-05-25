import {appRoutesNames, appRoutesPaths} from "shared/config/";
import {RouteProps} from "react-router-dom";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


export const routerConfig: Record<appRoutesNames, RouteProps> = {
  [appRoutesNames.MAIN]: {
    path: appRoutesPaths[appRoutesNames.MAIN],
    element: <MainPage/>
  },
  [appRoutesNames.ABOUT]: {
    path: appRoutesPaths[appRoutesNames.ABOUT],
    element: <AboutPage/>
  },
}