import { title, threeSumClosest } from './index'

const test = [
  { nums: [-1, 2, 1, -4], target: 1, result: 2 },
  { nums: [-1, 3, -2, -3, 2, 1, -4], target: 1, result: 1 },
  { nums: [-1, 2, 6, 5, 1, -4], target: 1, result: 1 },
  { nums: [-1, 2, 7, 8, 1, -4], target: 1, result: 2 },
  { nums: [0, 0, 0], target: 1, result: 0 }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => threeSum', () => {
      it(`nums: [${test[i].nums}], target: ${test[i].target} => ${test[i].result}`, () => {
        expect(threeSumClosest(test[i].nums, test[i].target)).toBe(
          test[i].result
        )
      })
    })
  }
})
