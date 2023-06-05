import type { Meta, StoryObj } from '@storybook/react'

import { AppLink } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDark: Story = {
  args: {
    color: 'primary',
    children: 'Link'
  }
}

export const SecondaryDark: Story = {
  args: {
    color: 'secondary',
    children: 'Link'
  }
}

export const PrimaryLight: Story = {
  args: {
    color: 'primary',
    children: 'Link'
  },
  decorators: [ThemeDecorator('light')]
}

export const SecondaryLight: Story = {
  args: {
    color: 'secondary',
    children: 'Link'
  },
  decorators: [ThemeDecorator('light')]
}
