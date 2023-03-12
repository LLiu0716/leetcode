import { title, fourSum } from './index'

const test = [
  { nums: [1, 2], target: 10, result: [] },
  { nums: [2, 2, 2, 2, 2], target: 8, result: [[2, 2, 2, 2]] },
  {
    nums: [-5, -4, -1, 0, 1, 2, 6, 6, 6, -1, -1],
    target: 2,
    result: [
      [-5, -1, 2, 6],
      [-5, 0, 1, 6],
      [-4, -1, 1, 6],
      [-1, 0, 1, 2]
    ]
  },
  {
    nums: [1, 2, 3, 4, 6, 6, 6],
    target: 2,
    result: []
  },
  {
    nums: [1, 1, 1, 1, 1, 1],
    target: 5,
    result: []
  },
  {
    nums: [-1, -1, -1, 1, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    target: 9,
    result: [
      [1, 2, 2, 4],
      [2, 2, 2, 3]
    ]
  },
  {
    nums: [-1, 1, 2, 3, 5, 6, 7],
    target: 6,
    result: []
  },
  {
    nums: [1, 0, -1, 0, -2, 2],
    target: 0,
    result: [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ]
  }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => fourSum', () => {
      it(`nums: [${test[i].nums}], target: ${test[i].target} => [${test[i].result}]`, () => {
        expect(fourSum(test[i].nums, test[i].target)).toEqual(test[i].result)
      })
    })
  }
})
