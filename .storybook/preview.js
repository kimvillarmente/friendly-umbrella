export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

import React from 'react'
import { ThemeProvider } from 'theme-ui'

export const decorators = [
  (Story) => (
    <ThemeProvider
      theme={{
        colors: {
          text: '#000',
          background: '#fff', // Canvas Background
          primary: '#07c', // primary button color
          secondary: '#05a',
          accent: '#609',
          muted: '#f6f6f6f',
        },
        fonts: {
          body:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          heading: 'Georgia, serif',
          monospace: 'Menlo, monospace',
        },
        fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
        fontWeights: {
          body: 400,
          heading: 700,
          bold: 700,
        },
        lineHeights: {
          body: 1.5,
          heading: 1.125,
        },
        letterSpacings: {
          body: 'normal',
          caps: '0.2em',
        },
        buttons: {
          primary: {
            color: 'background',
            bg: 'primary',
          },
          secondary: {
            color: 'background',
            bg: 'secondary',
          },
          gray: {
            color: 'background',
            bg: 'gray',
          },
        },
      }}
    >
      <Story />
    </ThemeProvider>
  ),
]
