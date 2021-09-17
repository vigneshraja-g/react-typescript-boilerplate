import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

if (process.env.NODE_ENV === 'development') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
