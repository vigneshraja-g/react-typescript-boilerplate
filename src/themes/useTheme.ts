import { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'
import themeScheme from './Themes'

export default function useTheme(
  defaultTheme = { mode: 'light', textZoom: 'normal' }
) {
  const [theme, _setTheme] = useState(getInitialTheme)
  console.log(theme)
  function getInitialTheme() {
    const savedTheme = storage.getItem('theme')
    if (savedTheme) {
      const theme = JSON.parse(savedTheme)
      theme.scheme = themeScheme[theme.mode]
      return theme
    } else {
      defaultTheme.scheme = themeScheme['light']
      return defaultTheme
    }
    // return savedTheme ? JSON.parse(savedTheme) : defaultTheme
  }

  useEffect(() => {
    delete theme.scheme
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  theme.scheme = themeScheme[theme.mode]
  return {
    ...theme,
    setTheme: ({ ...theme }) => _setTheme(theme),
  }
}
