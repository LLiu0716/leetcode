/** 两数之和 */

/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(nums: number[], target: number): number[] {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

/**
 * 哈希解法
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSumMap(nums: number[], target: number): number[] {
  const map = new Map()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const num = target - nums[i]
    if (map.has(num)) {
      return [map.get(num), i]
    }
    map.set(nums[i], i)
  }
  return []
}
