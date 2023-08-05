import { cn } from 'shared/lib/helpers/cls/cn'

describe('cls', () => {
  test('only 1st param', () => {
    expect(cn(['someClass'])).toBe('someClass')
  })

  test('only 1st param 2 items', () => {
    expect(cn(['someClass', 'anotherClass']))
      .toBe('someClass anotherClass')
  })

  test('with 2 params', () => {
    expect(cn(['someClass'], {
      hovered: true,
      hidden: false
    }))
      .toBe('someClass hovered')
  })
})
