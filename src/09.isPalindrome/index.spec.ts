import { title, isPalindrome, isPalindromeTow } from './index'

const test = [
  { x: 123, result: false },
  { x: 1230, result: false },
  { x: 0, result: true },
  { x: 6, result: true },
  { x: -123, result: false },
  { x: -1230, result: false }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => isPalindrome', () => {
      it(`${test[i].x}`, () => {
        expect(isPalindrome(test[i].x)).toBe(test[i].result)
      })
    })

    describe('二分解法 => isPalindromeTow', () => {
      it(`${test[i].x}`, () => {
        expect(isPalindromeTow(test[i].x)).toBe(test[i].result)
      })
    })
  }
})
