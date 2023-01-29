module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'subject-case': [0, 'never']
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: ((#LEETCODE-)(\d){1,5}.*)$/
    }
  }
}
