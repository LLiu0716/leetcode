import { title, threeSum } from './index'

const test = [
  { nums: [0, 1], result: [] },
  { nums: [0, 1, 1], result: [] },
  {
    nums: [-1, 0, 1, 2, -1, -4],
    result: [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
  },
  { nums: [0, 0, 0], result: [[0, 0, 0]] }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => threeSum', () => {
      it(`nums: [${test[i].nums}] => [${test[i].result}]`, () => {
        expect(threeSum(test[i].nums)).toEqual(test[i].result)
      })
    })
  }
})
