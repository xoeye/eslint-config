module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // XOi ESLint rules extend Airbnb's ESLint config.
    // Airbnb default is to enforce the .jsx extension.
    // We don't use that extension ¯\_(ツ)_/¯
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    // Future-proofing to prevent reliance on to-be-deprecated lifecycle hooks
    // or unstable APIs
    'react/no-unsafe': 'error'
  }
}
