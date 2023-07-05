import { cls } from 'shared/lib/helpers/cls/cls'

describe('cls', () => {
  test('only 1st param', () => {
    expect(cls(['someClass'])).toBe('someClass')
  })

  test('only 1st param 2 items', () => {
    expect(cls(['someClass', 'anotherClass']))
      .toBe('someClass anotherClass')
  })

  test('with 2 params', () => {
    expect(cls(['someClass'], {
      hovered: true,
      hidden: false
    }))
      .toBe('someClass hovered')
  })
})
