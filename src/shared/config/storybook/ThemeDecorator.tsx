import { type Theme } from 'app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  document.body.removeAttribute('class')
  document.body.classList.add(theme)
  return (
    <Story/>
  )
}
