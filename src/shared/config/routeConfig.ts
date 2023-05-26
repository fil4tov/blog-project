export enum appRoutesNames {
  // eslint-disable-next-line no-unused-vars
  MAIN = 'main',
  // eslint-disable-next-line no-unused-vars
  ABOUT = 'about'
}
export const appRoutesPaths: Record<appRoutesNames, string> = {
  [appRoutesNames.MAIN]: '/',
  [appRoutesNames.ABOUT]: '/about'
}
