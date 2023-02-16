import { title, myAtoi } from './index'

const test = [
  { x: '123', result: 123 },
  { x: '  0', result: 0 },
  { x: '  120 ffdss dds', result: 120 },
  { x: '  sss 120 ffdss dds', result: 0 },
  { x: '15342364690 fd', result: 2147483647 },
  { x: '1534236469 fd', result: 1534236469 },
  { x: '  -15342364690 fgd', result: -2147483648 },
  { x: '  -1534236469 fgd', result: -1534236469 },
  { x: '-123', result: -123 }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => myAtoi', () => {
      it(`${test[i].x}`, () => {
        expect(myAtoi(test[i].x)).toBe(test[i].result)
      })
    })
  }
})
