import { reverse, title, reverseTow } from './index'

const test = [
  { x: 123, result: 321 },
  { x: 0, result: 0 },
  { x: 120, result: 21 },
  { x: 1534236469, result: 0 },
  { x: -1534236469, result: 0 },
  { x: -123, result: -321 }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => reverse', () => {
      it(`${test[i].x}`, () => {
        expect(reverse(test[i].x)).toBe(test[i].result)
      })
    })

    describe('截尾解法 => reverseTow', () => {
      it(`${test[i].x}`, () => {
        expect(reverseTow(test[i].x)).toBe(test[i].result)
      })
    })
  }
})
