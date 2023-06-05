import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {}
}

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light')]
}
