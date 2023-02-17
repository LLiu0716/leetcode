/**
 * @package 盛最多水的容器
 * @author liu <admin>
 */
export const title = '盛最多水的容器'

/**
 * 暴力解法
 * @param {number[]} height
 * @returns {number}
 */
export function maxArea(height: number[]): number {
  let ans = 0
  const len = height.length
  for (let i = 0; i < len; i++) {
    if (height[i] > ans / (len - i - 1)) {
      for (let j = i + 1; j < len; j++) {
        ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]))
      }
    }
  }
  return ans
}

/**
 * 双指针解法
 * @param {number[]} height
 * @returns {number}
 */
export function maxAreaTow(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let ans = 0
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l)
    ans = Math.max(ans, area)
    if (height[l] <= height[r]) {
      l++
    } else {
      r--
    }
  }

  return ans
}
