import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './locales/i18next'
import { App } from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV === 'development') {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000)
  })
}
ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <App />
        </Suspense>
      </BrowserRouter>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(console.log)
