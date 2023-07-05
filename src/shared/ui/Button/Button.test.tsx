import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui'

describe('Button', () => {
  test('to be in the document', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
  test('to have class filled', () => {
    render(<Button variant='filled'>test</Button>)
    expect(screen.getByText('test')).toHaveClass('filled')
  })
})
