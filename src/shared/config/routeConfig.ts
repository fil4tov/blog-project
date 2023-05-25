export enum appRoutesNames {
  MAIN = 'main',
  ABOUT = 'about'
}
export const appRoutesPaths: Record<appRoutesNames, string> = {
  [appRoutesNames.MAIN]: '/',
  [appRoutesNames.ABOUT]: '/about'
}
