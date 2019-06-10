/**
 * @description
 *   React-specific ESLint config 
 */
module.exports = {
  extends: [
    '@xoi/eslint-config-core',
    './rules/react',
    './rules/a11y'
  ].map(require.resolve),
  rules: {}
}

