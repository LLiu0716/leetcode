/**
 * @package N 字形变换
 */
export const title = 'N 字形变换'

/**
 * 暴力解法
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */
export function convert(s: string, numRows: number): string {
  const len = s.length
  const r = numRows
  if (r === 1 || r >= len) return s
  const arr: string[][] = new Array(r).fill('')
  // const arr = Array.from({ length: r }, x => '')
  for (let i = 0; i < r; i++) {
    arr[i] = []
  }
  const t = r * 2 - 2
  for (let i = 0, x = 0; i < len; i++) {
    arr[x].push(s[i])
    if (i % t < r - 1) {
      x++
    } else {
      x--
    }
  }
  const ans = []
  for (const row of arr) {
    ans.push(row.join(''))
  }
  return ans.join('')
}

/**
 * 暴力解法 tow
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */
export function convertTow(s: string, numRows: number): string {
  const len = s.length
  const r = numRows
  if (r === 1 || r >= len) return s
  const arr: string[] = []
  const t = r * 2 - 2
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < len - i; j += t) {
      arr.push(s[j + i])
      if (0 < i && i < r - 1 && j + t - i < len) {
        arr.push(s[j + t - i])
      }
    }
  }
  return arr.join('')
}
