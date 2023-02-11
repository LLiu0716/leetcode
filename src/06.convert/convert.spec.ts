import { title, convert, convertTow } from './index'

const test = [
  { s: 'z', numRows: 3, result: 'z' },
  { s: 'PAYPALISHIRING', numRows: 3, result: 'PAHNAPLSIIGYIR' },
  { s: 'PAYPALISHIRING', numRows: 4, result: 'PINALSIGYAHRPI' }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => convert', () => {
      it(`${test[i].s}, ${test[i].numRows}`, () => {
        expect(convert(test[i].s, test[i].numRows)).toBe(test[i].result)
      })
    })

    describe('暴力解法 => convertTow', () => {
      it(`${test[i].s}, ${test[i].numRows}`, () => {
        expect(convertTow(test[i].s, test[i].numRows)).toBe(test[i].result)
      })
    })
  }
})
