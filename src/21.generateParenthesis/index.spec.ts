import {
  title,
  generateParenthesis /* generateParenthesisTow */
} from './index'

const test = [
  { n: 3, result: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
  // { n: 3, result: ['()()()', '(()())', '()(())', '(())()', '((()))'] },
  { n: 1, result: ['()'] }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => generateParenthesis', () => {
      it(`n: ${test[i].n} => [${test[i].result}]`, () => {
        expect(generateParenthesis(test[i].n)).toEqual(test[i].result)
      })
    })

    // describe('暴力解法 => generateParenthesisTow', () => {
    //   it(`n: ${test[i].n} => [${test[i].result}]`, () => {
    //     expect(generateParenthesisTow(test[i].n)).toEqual(test[i].result)
    //   })
    // })
  }
})
