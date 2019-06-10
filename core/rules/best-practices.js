module.exports = {
  env: {
    es6: true
  },
  rules: {
    /**
     * @todo
     *   Remove console.logs or migrate to logger module
     */
    'no-console': 'warn',
    
    // Allow for functions to implicitly return undefined
    'consistent-return': 'off',

    // Allow for function hoisting
    'no-use-before-define': ['error', { functions: false }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.test.{js,ts,tsx}'],
      env: {
        jest: true
      }
    }
  ]
}