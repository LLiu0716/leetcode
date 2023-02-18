import { title, intToRoman, intToRomanTow } from './index'

const test = [
  { num: 3, result: 'III' },
  { num: 4, result: 'IV' },
  { num: 9, result: 'IX' },
  { num: 58, result: 'LVIII' },
  { num: 1994, result: 'MCMXCIV' }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => intToRoman', () => {
      it(`num: ${test[i].num} => ${test[i].result}`, () => {
        expect(intToRoman(test[i].num)).toBe(test[i].result)
      })
    })

    describe('贪心解法 => intToRomanTow', () => {
      it(`num: ${test[i].num} => ${test[i].result}`, () => {
        expect(intToRomanTow(test[i].num)).toBe(test[i].result)
      })
    })
  }
})
