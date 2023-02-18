/**
 * @package 整数转罗马数字
 * @author liu <admin>
 */
export const title = '整数转罗马数字'

/**
 * 暴力解法
 * @param {number} num
 * @returns {string}
 */
export function intToRoman(num: number): string {
  const Nums = [
    ['', 'M', 'MM', 'MMM'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  ]
  const roman = []
  if (num >= 1000) {
    roman.push(Nums[0][~~(num / 1000)])
  }
  if (num >= 100) {
    roman.push(Nums[1][~~((num % 1000) / 100)])
  }
  if (num >= 10) {
    roman.push(Nums[2][~~((num % 100) / 10)])
  }
  roman.push(Nums[3][num % 10])
  return roman.join('')
}

/**
 * 贪心解法
 * @param {number} num
 * @returns {string}
 */
export function intToRomanTow(num: number): string {
  const Nums = [
    { key: 'M', value: 1000 },
    { key: 'CM', value: 900 },
    { key: 'D', value: 500 },
    { key: 'CD', value: 400 },
    { key: 'C', value: 100 },
    { key: 'XC', value: 90 },
    { key: 'L', value: 50 },
    { key: 'XL', value: 40 },
    { key: 'X', value: 10 },
    { key: 'IX', value: 9 },
    { key: 'V', value: 5 },
    { key: 'IV', value: 4 },
    { key: 'I', value: 1 }
  ]
  const roman = []
  let i = 0

  while (i < Nums.length) {
    while (num >= Nums[i].value) {
      roman.push(Nums[i].key)
      num -= Nums[i].value
    }
    i++
  }

  return roman.join('')
}
