import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {}
}

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light')]
}
