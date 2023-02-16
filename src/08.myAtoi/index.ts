/**
 * @package 字符串转整数 (atoi)
 * @author liu <admin>
 */
export const title = '字符串转整数(atoi)'

/**
 * 暴力解法
 * @param {string} s
 * @returns {number}
 */
export function myAtoi(s: string): number {
  const str = s.trim()
  const m = Math.pow(2, 31)
  const num = parseInt(str, 10)
  if (isNaN(num)) return 0
  if (num > m - 1) return m - 1
  if (num < -m) return -m
  return num
}
