import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await import('./AboutPage'))

// export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   setTimeout(() => { // @ts-expect-error
//     resolve(import('./AboutPage'))
//   }, 5000)
// }))
