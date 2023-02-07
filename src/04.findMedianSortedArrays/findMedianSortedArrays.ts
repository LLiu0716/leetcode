/** 寻找两个正序数组的中位数 */
/**
 * 暴力解法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = arr.length
  if (len % 2) {
    return arr[Math.floor(len / 2)]
  }
  const i = len / 2
  return (arr[i - 1] + arr[i]) / 2
}

/**
 * 二分解法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
export function findMedianSortedArraysMap(
  nums1: number[],
  nums2: number[]
): number {
  const m = nums1.length
  const n = nums2.length
  if (m > n) {
    return findMedianSortedArraysMap(nums2, nums1)
  }
  let iMin = 0
  let iMax = m
  while (iMin <= iMax) {
    const i = Math.floor((iMin + iMax) / 2)
    const j = Math.floor((m + n + 1) / 2 - i)
    if (j && i != m && nums2[j - 1] > nums1[i]) {
      iMin = i + 1
    } else if (i && j != n && nums1[i - 1] > nums2[j]) {
      iMax = i - 1
    } else {
      let maxLeft = 0
      if (!i) {
        maxLeft = nums2[j - 1]
        // } else if (!j) {
        //   maxLeft = nums1[i - 1]
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
      }
      if ((m + n) % 2) return maxLeft

      let minRight = 0
      if (i == m) {
        minRight = nums2[j]
        // } else if (j == n) {
        //   minRight = nums1[i]
      } else {
        minRight = Math.min(nums2[j], nums1[i])
      }
      return (maxLeft + minRight) / 2
    }
  }
}
