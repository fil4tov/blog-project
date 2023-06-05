import type { Preview } from '@storybook/react'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import '../../src/app/styles/index.scss'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    ThemeDecorator('dark'),
    RouterDecorator
  ]
}

export default preview
