/**
 * @pages 最长回文子串
 */
/**
 * 暴力解法
 * @param {string} s
 * @returns {string}
 */
export function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) return s
  let start = 0
  let end = 0
  for (let i = 0; i < len; i++) {
    const len1 = expandAroundCenter(s, i, i)
    const len2 = expandAroundCenter(s, i, i + 1)
    const num = Math.max(len1, len2)
    if (num > end - start) {
      start = Math.ceil(i - (num - 1) / 2)
      end = i + num / 2
    }
  }
  return s.substring(start, end + 1)
}

function expandAroundCenter(s: string, left: number, right: number) {
  let i = left
  let j = right
  while (i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
    i--
    j++
  }
  return j - i - 1
}
