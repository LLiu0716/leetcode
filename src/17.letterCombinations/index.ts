/**
 * @package 电话号码的字母组合
 * @author liu
 */
export const title = '电话号码的字母组合'

const obj = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
/**
 * 暴力解法
 * @param {string} digits
 * @returns {string[]}
 */
let list: string[] = []
export function letterCombinations(digits: string): string[] {
  if (!digits) return []
  const len = digits.length
  if (len === 1) return obj[digits].split('')
  list = []
  getValue(digits, 0, '')
  return list
}

function getValue(strs: string, index: number, str: string) {
  if (index === strs.length) {
    list.push(str)
  } else {
    const value: string = strs[index]
    const leffers: string = obj[value]
    const len: number = leffers.length
    for (let i = 0; i < len; i++) {
      getValue(strs, index + 1, str + leffers[i])
    }
  }
}
