import { classNames } from './classNames'

describe('classNames', () => {
  test('only 1st param', () => {
    expect(classNames(['someClass'])).toBe('someClass')
  })

  test('only 1st param 2 items', () => {
    expect(classNames(['someClass', 'anotherClass']))
      .toBe('someClass anotherClass')
  })

  test('with 2 params', () => {
    expect(classNames(['someClass'], {
      hovered: true,
      hidden: false
    }))
      .toBe('someClass hovered')
  })
})
