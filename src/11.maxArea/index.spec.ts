import { title, maxArea, maxAreaTow } from './index'

const test = [
  { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], result: 49 },
  { height: [1, 8, 5, 4, 3, 6, 7, 5, 7], result: 49 }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => maxArea', () => {
      it(`height: [${test[i].height}]`, () => {
        expect(maxArea(test[i].height)).toBe(test[i].result)
      })
    })

    describe('双指针解法 => maxAreaTow', () => {
      it(`height: [${test[i].height}]`, () => {
        expect(maxAreaTow(test[i].height)).toBe(test[i].result)
      })
    })
  }
})
