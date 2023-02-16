/**
 * @package 正则表达式匹配
 * @author liu <admin>
 */
export const title = '正则表达式匹配'

function matches(s: string, p: string, i: number, j: number): boolean {
  if (i === 0) return false
  if (p.charAt(j - 1) === '.') return true
  return s.charAt(i - 1) === p.charAt(j - 1)
}
// function matches(s: string, p: string): boolean {
//   if (p === '.') return true
//   return s === p
// }

/**
 * 动态分配解法
 * @param {string} s
 * @param {string} p
 * @returns {boolean}
 */
export function isMatch(s: string, p: string): boolean {
  const m = s.length
  const n = p.length
  const f: boolean[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 })
  )
  f[0][0] = true
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p.charAt(j - 1) === '*') {
        f[i][j] = f[i][j - 2]
        if (matches(s, p, i, j - 1)) {
          f[i][j] = f[i][j] || f[i - 1][j]
        }
      } else {
        if (matches(s, p, i, j)) {
          f[i][j] = f[i - 1][j - 1]
        }
      }
    }
  }

  return f[m][n] || false
}
// export function isMatch(s: string, p: string): boolean {
//   const m = s.length
//   let arr = []
//   if (p.includes('*')) {
//     for (let i = 0; i < m; i++) {
//       arr[i] = p[i]
//       if (arr[i] === '*') {
//         arr[i] = arr[i - 1]
//       }
//       if (!arr[i]) {
//         arr[i] = arr[i - 1]
//       }
//     }
//     console.log('arr', arr.join(''))
//     return isMatch(s, arr.join(''))
//   }
//   for (let i = 0; i < m; i++) {
//     if (!matches(s[i], p[i] || '')) {
//       return false
//     }
//   }
//   return true
// }
