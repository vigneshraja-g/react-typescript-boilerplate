import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './locales/i18next'
import { App } from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'

if (process.env.NODE_ENV === 'development') {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000)
  })
}
ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
