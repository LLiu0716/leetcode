import { title, letterCombinations } from './index'

const test = [
  {
    strs: '24',
    result: ['ag', 'ah', 'ai', 'bg', 'bh', 'bi', 'cg', 'ch', 'ci']
  },
  { strs: '', result: [] },
  { strs: '2', result: ['a', 'b', 'c'] },
  {
    strs: '234',
    result: [
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi'
    ]
  },
  {
    strs: '27',
    result: [
      'ap',
      'aq',
      'ar',
      'as',
      'bp',
      'bq',
      'br',
      'bs',
      'cp',
      'cq',
      'cr',
      'cs'
    ]
  }
]

describe(title, () => {
  for (let i = 0; i < test.length; i++) {
    describe('暴力解法 => threeSum', () => {
      it(`strs: ${test[i].strs} => [${test[i].result}]`, () => {
        expect(letterCombinations(test[i].strs)).toEqual(test[i].result)
      })
    })
  }
})
