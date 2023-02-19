import { title, romanToInt } from './index'

const test = [
  { s: 'III', result: 3 },
  { s: 'IV', result: 4 },
  { s: 'VII', result: 7 },
  { s: 'XLVII', result: 47 },
  { s: 'XLIX', result: 49 },
  { s: 'LVIII', result: 58 },
  { s: 'MCMXCIV', result: 1994 },
  { s: 'MMCXCIVIII', result: 2197 }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => romanToInt', () => {
      it(`s: ${test[i].s} => ${test[i].result}`, () => {
        expect(romanToInt(test[i].s)).toBe(test[i].result)
      })
    })
  }
})
