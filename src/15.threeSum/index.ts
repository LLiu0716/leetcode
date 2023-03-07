/**
 * @package 三数之和
 * @author liu
 */
export const title = '三数之和'

/**
 * 暴力解法
 * @param {number[]} nums
 * @returns {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  const len = nums.length
  if (len < 3) return []
  // 先冒泡排序数组, 做过排序后. 可以直接从后往前取值
  const numList: number[] = nums.sort((a, b) => a - b)
  const arr: number[][] = []
  for (let i = 0; i < len; i++) {
    // 跳过和上一个循环一样结果的循环
    if (i > 0 && numList[i] === numList[i - 1]) continue
    // 记录目标值
    const target: number = -1 * numList[i]
    // 记录指针所在位置
    let third: number = len - 1
    for (let j = i + 1; j < len; j++) {
      // 跳过和上一个循环一样结果的循环
      if (j > i + 1 && numList[j] === numList[j - 1]) continue
      // 如果当前数 + 指针指向的数 大于 目标值 就回移指针
      while (j < third && numList[third] + numList[j] > target) {
        third--
      }
      // 如果指针等于当前循环值就跳出循环
      if (j === third) break
      // 如果满足条件, 就返回这三个数
      if (numList[j] + numList[third] === target) {
        arr.push([numList[i], numList[j], numList[third]])
      }
    }
  }
  return arr
}
