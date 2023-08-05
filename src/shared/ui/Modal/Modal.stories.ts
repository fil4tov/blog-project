import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nisi?'
  }
}

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nisi?'
  },
  decorators: [ThemeDecorator('light')]
}
