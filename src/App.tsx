import React from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import useTheme from './themes/useTheme'
import { GlobalStyle } from './themes/Globalstyle'
import { Counter } from './Counter'
import SVGI from 'icons/svg1.svg'
import Icon from 'components/IconLoader/IconLoader'
import ToggleMode from './themes/ToggleMode'
import { RBButton } from 'components/RBComponents/index'

import './App.scss'
import LanguageSelect from './locales/LocaleChange'

const Test = React.lazy(() => import('./Test'))

export const App = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  console.log('app', theme)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SVGI width="100" fill={theme.mode === 'dark' ? 'pink' : 'green'} />
        <h1>React TypeScript Webpack Starter Template Vignesh</h1>
        <Counter />
        {theme.mode === 'dark' && (
          <React.Suspense fallback={'Loading...'}>
            <Test theme={theme.mode} />
          </React.Suspense>
        )}
        <Icon
          name="svg1"
          fill={theme.mode === 'dark' ? 'red' : 'green'}
          width="200"
        />
        <h2>{t('please_enter_name')}</h2>
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
        <Button>test</Button>
        <RBButton>RBButton</RBButton>
        <LanguageSelect />
      </>
    </ThemeProvider>
  )
}
