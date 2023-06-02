export enum appRoutesNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}
export const appRoutesPaths: Record<appRoutesNames, string> = {
  [appRoutesNames.MAIN]: '/',
  [appRoutesNames.ABOUT]: '/about',
  [appRoutesNames.NOT_FOUND]: '*'
}
