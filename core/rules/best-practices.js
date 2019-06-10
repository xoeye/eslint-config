module.exports = {
  env: {
    es6: true
  },
  rules: {
    /**
     * @todo
     *   Remove console.logs or migrate to logger module
     */
    'no-console': 'warn'
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