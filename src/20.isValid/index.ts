/**
 * @package 有效的括号
 * @description 1. 左括号必须用相同的右括号闭合
 *              2. 左括号必须以正确的顺序闭合
 *              3. 每个右括号都有一个对应类型的左括号
 * @author liu
 */
export const title = '有效的括号'

/**
 * 哈希表
 * @param {string} s
 * @returns {boolean}
 */
export function generateParenthesis(s: string): boolean {
  if (s.length % 2) return false
  const arr = []
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  for (const str of s) {
    if (map.has(str)) {
      if (!arr || arr[arr.length - 1] !== map.get(str)) {
        return false
      } else {
        arr.pop()
      }
    } else {
      arr.push(str)
    }
  }
  return !arr.length
}
