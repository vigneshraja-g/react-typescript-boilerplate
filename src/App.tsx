import { ThemeProvider } from 'styled-components'
import useTheme from './themes/useTheme'
import { GlobalStyle } from './themes/Globalstyle'
import { Counter } from './Counter'
import SVGI from 'icons/svg1.svg'
import Icon from 'components/IconLoader/IconLoader'
import ToggleMode from './themes/ToggleMode'

export const App = () => {
  const theme = useTheme()
  console.log(theme.mode)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SVGI width="100" fill={theme.mode === 'dark' ? 'pink' : 'green'} />
        <h1>React TypeScript Webpack Starter Template Vignesh</h1>
        <Counter />
        <Icon
          name="svg1"
          fill={theme.mode === 'dark' ? 'red' : 'green'}
          width="200"
        />
        <ToggleMode />
        <button
          onClick={() =>
            theme.setTheme(
              theme.textZoom === 'normal'
                ? { ...theme, textZoom: 'magnify' }
                : { ...theme, textZoom: 'normal' }
            )
          }
        >
          Toggle Zoom
        </button>
      </>
    </ThemeProvider>
  )
}
