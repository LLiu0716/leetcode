import {
  findMedianSortedArrays,
  findMedianSortedArraysMap
} from './findMedianSortedArrays'

const test = [
  { nums1: [1, 3], nums2: [2], result: 2 },
  { nums1: [3, 4, 5, 6], nums2: [1, 2], result: 3.5 },
  { nums1: [2, 3, 5, 6], nums2: [7, 8], result: 5.5 },
  { nums1: [2, 3, 5, 6], nums2: [1], result: 3 },
  { nums1: [2, 3, 5, 6], nums2: [7], result: 5 },
  { nums1: [1, 3, 5, 6], nums2: [2, 7], result: 4 },
  { nums1: [1, 3, 5, 6, 9], nums2: [2, 7, 8], result: 5.5 },
  { nums1: [1, 3, 5, 6], nums2: [2, 7, 8], result: 5 }
]

describe('寻找两个正序数组的中位数', () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => findMedianSortedArrays', () => {
      it(`[${test[i].nums1}], [${test[i].nums2}]`, () => {
        expect(findMedianSortedArrays(test[i].nums1, test[i].nums2)).toBe(
          test[i].result
        )
      })
    })

    describe('二分解法 => findMedianSortedArraysMap', () => {
      it(`[${test[i].nums1}], [${test[i].nums2}]`, () => {
        expect(findMedianSortedArraysMap(test[i].nums1, test[i].nums2)).toBe(
          test[i].result
        )
      })
    })
  }
})
