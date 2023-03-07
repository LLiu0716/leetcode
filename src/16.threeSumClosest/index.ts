/**
 * @package 最接近三数之和
 * @author liu
 * 从数组中找到 三位数相加之和 最接近 target
 * 大白话就是 数组中的任意三位数相加 等于或者只最接近 => 大于/小于 target
 */
export const title = '最接近三数之和'

/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export function threeSumClosest(nums: number[], target: number): number {
  const len = nums.length
  nums.sort((a, b) => a - b)
  let ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < len; i++) {
    let start = i + 1
    let end = len - 1
    while (start < end) {
      const sum = nums[start] + nums[end] + nums[i]
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else return ans
    }
  }
  return ans
}
