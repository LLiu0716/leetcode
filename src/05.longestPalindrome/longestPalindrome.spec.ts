import { longestPalindrome } from './longestPalindrome'

const test = [
  { s: 'babsd', result: 'bab' },
  { s: 'abad', result: 'aba' },
  { s: '上海自来水来自海上', result: '上海自来水来自海上' },
  { s: 'cbbd', result: 'bb' },
  { s: 'a', result: 'a' }
]

describe('最长回文子串', () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => longestPalindrome', () => {
      it(`${test[i].s}`, () => {
        expect(longestPalindrome(test[i].s)).toEqual(test[i].result)
      })
    })
  }
})
