/** 无重复字符最长子串 */
/**
 * 暴力解法
 * @param {string} s
 * @returns {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  let num = 0
  const len = s.length
  for (let i = 0, str = ''; i < len; i++) {
    if (str.includes(s[i])) {
      str = str.substring(str.indexOf(s[i]) + 1) + s[i]
    } else {
      str += s[i]
      num = Math.max(num, str.length)
    }
  }
  return num
}

/**
 * 哈希解法
 * @param {string} s
 * @returns {number}
 */
export function lengthOfLongestSubstringMap(s: string): number {
  let max = 0
  let left = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const target = map.get(s[i])
      if (target + 1 > left) {
        left = target + 1
      }
    }
    map.set(s[i], i)
    max = Math.max(max, i - left + 1)
  }
  return max
}
