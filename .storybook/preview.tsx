import React from 'react'
import type { Decorator, Preview } from '@storybook/react'

import GlobalStyleProvider from '../src/GlobalStyleProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
}

export default preview

export const decorators: Decorator[] = [
  (Story, context) => (
    <GlobalStyleProvider>
      <Story {...context} />
    </GlobalStyleProvider>
  ),
]
