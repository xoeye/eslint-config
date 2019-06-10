module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['import'],
  settings: {
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    // Default exports do not require a specific name when imported.
    // Named exports, however, require use of a specific name when imported.
    'import/prefer-default-export': 'off'
  }
}
