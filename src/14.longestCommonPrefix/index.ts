/**
 * @package 最长公共前缀
 * @author liu <admin>
 */
export const title = '最长公共前缀'

function getValue(s: string, target: string) {
  if (s === target) return target
  const len = Math.min(s.length, target.length)
  let i = 0
  while (i < len) {
    if (s.charAt(i) === target.charAt(i)) {
      i++
    } else {
      return s.substring(0, i)
    }
  }
  return target.substring(0, len)
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

/**
 * 纵向解法
 * @param {string[]} strs
 * @returns {string}
 */
export function longestCommonPrefixTow(strs: string[]): string {
  const base = strs[0]
  for (let i = 0; i < base.length; i++) {
    const str = base.charAt(i)
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== str) {
        return base.substring(0, i)
      }
    }
  }
  return base
}
