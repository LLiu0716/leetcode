import { title, isMatch } from './index'

const test = [
  { s: 'aa', p: 'a', result: false },
  { s: 'aa', p: 'a*', result: true },
  { s: 'aaa', p: 'a*', result: true },
  { s: 'abbb', p: '.a*', result: false },
  { s: 'abbb', p: '.*', result: true },
  { s: 'aa', p: '.*', result: true }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('动态分配解法 => isMatch', () => {
      it(`s: ${test[i].s}, p: ${test[i].p}`, () => {
        expect(isMatch(test[i].s, test[i].p)).toBe(test[i].result)
      })
    })
  }
})
