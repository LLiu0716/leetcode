/**
 * @package 整数反转
 * @author liu <admin>
 */
export const title = '整数反转'

/**
 * 暴力解法
 * @param {number} x
 * @returns {number}
 */
export function reverse(x: number): number {
  if (x === 0) return 0
  const m = Math.pow(2, 31)
  const num = Number(
    Math.abs(Math.trunc(x)).toString().split('').reverse().join('')
  )
  if (num > m - 1 || num < -m) return 0
  if (x < 0) return -num
  return num
}

/**
 * 截尾解法
 * @param {number} x
 * @returns {number}
 */
export function reverseTow(x: number): number {
  const m = Math.pow(2, 31)
  let num = 0
  while (x !== 0) {
    num = num * 10 + (x % 10)
    if (num < -m || num > m - 1) return 0
    x = ~~(x / 10)
  }
  return num
}
