import type { Meta, StoryObj } from '@storybook/react'

import NotFoundPage from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {}
}

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light')]
}
