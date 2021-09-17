import React from 'react'
import { ThemeConsumer } from 'styled-components'
import Button from 'components/Button/Button'

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          variant="primary"
          onClick={() =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'light' }
                : { ...theme, mode: 'dark' }
            )
          }
        >
          Toggle Mode
        </Button>
      )}
    </ThemeConsumer>
  )
}
