import style from 'styled-theming'

export const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111',
})

export const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE',
})

export const getFontSize = style('textZoom', {
  normal: '1em',
  magnify: '1.2em',
})
