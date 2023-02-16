/**
 * @package 字符串转整数 (atoi)
 * @author liu <admin>
 */
export const title = '字符串转整数(atoi)'

/**
 * 暴力解法
 * @param {number} x
 * @returns {boolean}
 */
export function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x != 0)) return false
  if (x < 10) return true
  return x === Number(x.toString().split('').reverse().join(''))
}

/**
 * 不改变参数类型, 二分解法
 * @param {number} x
 * @returns {boolean}
 */
export function isPalindromeTow(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x != 0)) return false
  let num = 0
  while (x > num) {
    num = num * 10 + (x % 10)
    x = ~~(x / 10)
  }
  return x === num || x === ~~(num / 10)
}
