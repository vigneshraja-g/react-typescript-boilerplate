declare module '*.png'

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module 'i18next' {
  import { default as i18n } from 'i18next'
  export default i18n
}
