/**
 * @package 最长公共前缀
 * @author liu <admin>
 */
export const title = '最长公共前缀'

function getValue(s: string, target: string) {
  if (s === target) return target
  const len = s.length > target.length ? s.length : target.length
  let i = 0
  while (i < len) {
    if (s.charAt(i) === target.charAt(i)) {
      i++
    } else {
      return s.substring(0, i)
    }
  }
}

/**
 * 暴力解法
 * @param {string[]} strs
 * @returns {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  let str: string = strs[0]
  for (let i = 0; i < strs.length; i++) {
    str = getValue(strs[i], str) as string
  }
  return str
}
