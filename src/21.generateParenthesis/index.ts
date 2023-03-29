/**
 * @package 括号生成
 * @description 数字`n`代表生成括号的对数, 请设计一个函数, 用于生成所有可能的并且**有效**的括号组合
 * @author liu
 */
export const title = '括号生成'

/**
 * 哈希表
 * @param {number} n
 * @returns {string[]}
 */
export function generateParenthesis(n: number): string[] {
  if (n === 1) return ['()']
  const arr: string[] = []
  setValue(arr, '', 0, 0, n)
  console.log('arr -> ', arr)
  return arr
}

function setValue(
  list: string[],
  char: string,
  open: number,
  close: number,
  max: number
) {
  if (char.length === max * 2) {
    list.push(char)
    return
  }
  if (open < max) {
    char += '('
    setValue(list, char, open + 1, close, max)
    char = char.substring(0, char.length - 1)
  }
  if (close < open) {
    char += ')'
    setValue(list, char, open, close + 1, max)
    char = char.substring(0, char.length - 1)
  }
}

/**
 * 哈希表
 * @param {number} n
 * @returns {string[]}
 */
// export function generateParenthesisTow(n: number): string[] {
//   if (n === 1) return ['()']
//   const arr: string[] = []
//   let i = 1
//   arr.push('()')
//   while (i < n) {
//     i++
//     generate(arr)
//   }
//   return arr.filter(v => v.length == n * 2)
// }

// function generate(arr: string[]) {
//   const result = '()'

//   const len = arr.length
//   for (let j = 0; j < len; j++) {
//     if (arr[j] + result !== result + arr[j]) {
//       arr.push(result + arr[j])
//     }
//     arr.push(arr[j] + result)
//     arr.push(result.charAt(0) + arr[j] + result.charAt(1))
//   }
// }
