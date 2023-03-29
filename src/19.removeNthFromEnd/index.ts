/**
 * @package 四数之和
 * @author liu
 */
export const title = '四数之和'

/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function fourSum(nums: number[], target: number): number[] {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  const len = nums.length
  const arr = []
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // 如果最小的4个数相加依然大于目标值, 说明所求不存在. 直接退出循环
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    // 如果最大值相加依然小于目标值 直接跳过当前循环
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target)
      continue
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      let left = j + 1
      let right = len - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          arr.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return arr
}
