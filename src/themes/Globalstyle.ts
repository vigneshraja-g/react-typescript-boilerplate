import { createGlobalStyle } from 'styled-components'
import { getBackground, getFontSize, getForeground } from './Themes'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeground};
    font-size: ${getFontSize};
  }
  `
