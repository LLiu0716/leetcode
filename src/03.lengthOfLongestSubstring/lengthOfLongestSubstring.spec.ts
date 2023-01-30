import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringMap
} from './lengthOfLongestSubstring'

const test = [
  { target: '123', result: 3 },
  { target: 'abcabcbb', result: 3 },
  { target: 'bbbbb', result: 1 },
  { target: 'pwwkew', result: 3 }
]

describe('无重复字符最长子串', () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => lengthOfLongestSubstring', () => {
      it(`${test[i].target}`, () => {
        expect(lengthOfLongestSubstring(test[i].target)).toBe(test[i].result)
      })
    })

    describe('哈希解法 => lengthOfLongestSubstringMap', () => {
      it(`${test[i].target}`, () => {
        expect(lengthOfLongestSubstringMap(test[i].target)).toBe(test[i].result)
      })
    })
  }
})
