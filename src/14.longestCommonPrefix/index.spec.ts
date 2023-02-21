import { title, longestCommonPrefix, longestCommonPrefixTow } from './index'

const test = [
  { strs: ['flower', 'flow', 'flight'], result: 'fl' },
  { strs: ['as', 'a'], result: 'a' },
  { strs: ['as', 'as', 'a'], result: 'a' },
  { strs: ['a', 'as', 'as', 'ass'], result: 'a' },
  { strs: ['dog', 'racecar', 'car'], result: '' }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => longestCommonPrefix', () => {
      it(`s: [${test[i].strs}] => ${test[i].result}`, () => {
        expect(longestCommonPrefix(test[i].strs)).toBe(test[i].result)
      })
    })

    describe('暴力解法 => longestCommonPrefixTow', () => {
      it(`s: [${test[i].strs}] => ${test[i].result}`, () => {
        expect(longestCommonPrefixTow(test[i].strs)).toBe(test[i].result)
      })
    })
  }
})
