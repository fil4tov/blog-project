import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {}
}

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light')]
}
