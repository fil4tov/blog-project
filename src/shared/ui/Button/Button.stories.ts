import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const OutlinedDark: Story = {
  args: {
    variant: 'outlined',
    children: 'Button'
  }
}

export const FilledDark: Story = {
  args: {
    variant: 'filled',
    children: 'Button'
  }
}

export const ClearDark: Story = {
  args: {
    variant: 'clear',
    children: 'Button'
  }
}

export const OutlinedLight: Story = {
  args: {
    variant: 'outlined',
    children: 'Button'
  },
  decorators: [ThemeDecorator('light')]
}

export const FilledLight: Story = {
  args: {
    variant: 'filled',
    children: 'Button'
  },
  decorators: [ThemeDecorator('light')]
}

export const ClearLight: Story = {
  args: {
    variant: 'clear',
    children: 'Button'
  },
  decorators: [ThemeDecorator('light')]
}
