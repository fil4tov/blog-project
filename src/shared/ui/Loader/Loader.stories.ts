import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {}
}

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator('light')]
}
