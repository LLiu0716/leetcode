import { twoSum, twoSumMap } from './index'

const test = [
  { nums: [], target: 3, result: [] },
  { nums: [1, 2], target: 3, result: [0, 1] },
  { nums: [1, 2, 7, 5], target: 9, result: [1, 2] },
  { nums: [3, 3], target: 6, result: [0, 1] },
  { nums: [1, 2, 8, 5], target: 7, result: [1, 3] },
  { nums: [1, 2, 8, 5], target: 11, result: [] },
  { nums: [1, 2, 8, 5], target: 13, result: [2, 3] }
]

describe('两数之和', () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => twoSum', () => {
      it(`[${test[i].nums}], ${test[i].target}`, () => {
        expect(twoSum(test[i].nums, test[i].target)).toEqual(test[i].result)
      })
    })

    describe('哈希解法 => twoSumMap', () => {
      it(`[${test[i].nums}], ${test[i].target}`, () => {
        expect(twoSumMap(test[i].nums, test[i].target)).toEqual(test[i].result)
      })
    })
  }
})
