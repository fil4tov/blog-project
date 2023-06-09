declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.png' {
  const content: any
  export default content
}

declare const __IS_DEV__: boolean
