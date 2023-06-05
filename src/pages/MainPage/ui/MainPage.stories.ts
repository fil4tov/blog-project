import type { Meta, StoryObj } from '@storybook/react'

import MainPage from './MainPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'pages/MainPage',
  component: MainPage
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {}
}

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light')]
}
