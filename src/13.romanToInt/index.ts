/**
 * @package 罗马数字转整数
 * @author liu <admin>
 */
export const title = '罗马数字转整数'

/**
 * 暴力解法
 * @param {string} s
 * @returns {number}
 */
export function romanToInt(s: string): number {
  const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)
  let num = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    const value = map.get(s[i])
    if (i < len - 1 && value < map.get(s[i + 1])) {
      num -= value
    } else {
      num += value
    }
  }
  return num
}

// function getValue(s: string): number {
//   switch (s) {
//     case 'I':
//       return 1
//     case 'V':
//       return 5
//     case 'X':
//       return 10
//     case 'L':
//       return 50
//     case 'C':
//       return 100
//     case 'D':
//       return 500
//     default:
//       return 1000
//   }
// }

// /**
//  * 暴力解法
//  * @param {string} s
//  * @returns {number}
//  */
// export function romanToIntTow(s: string): number {
//   let sum = 0
//   let preNum = getValue(s.charAt(0))
//   const len = s.length
//   for (let i = 1; i < len; i++) {
//     const num = getValue(s.charAt(i))
//     if (preNum < num) {
//       sum -= preNum
//     } else {
//       sum += preNum
//     }
//     preNum = num
//   }
//   return sum + preNum
// }
