declare module '*.svg' {
  import React = require('react')
  import 'vite/client'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
