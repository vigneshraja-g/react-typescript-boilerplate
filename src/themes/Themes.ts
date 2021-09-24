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

const themeScheme = {
  dark: {
    background: '#1c4958',
    foreground: '#a1ccde',

    accent1: '#f4c8a5',
    accent2: '#b47368',
    accent3: '#923621',

    text1: '#c6cfd3',
    text2: '#808186',
  },
  light: {
    background: '#a53237',
    foreground: '#f66f40',

    accent1: '#f8986d',
    accent2: '#9c4952',
    accent3: '#f66f40',

    text1: '#f5e5e1',
    text2: '#354f55',
  },
}

export default themeScheme
