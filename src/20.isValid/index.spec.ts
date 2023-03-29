import { title, isValid } from './index'

const test = [
  { s: '{([{(}])}', result: false },
  { s: '{([{()}])}', result: true },
  { s: '{([{({])}])}', result: false },
  { s: '()[]{}(){}[]()', result: true },
  { s: '()[]{}(]{}[]()', result: false }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => isValid', () => {
      it(`s: ${test[i].s} => ${test[i].result}`, () => {
        expect(isValid(test[i].s)).toEqual(test[i].result)
      })
    })
  }
})
